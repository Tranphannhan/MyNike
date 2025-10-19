'use client'
import React, { useState, useEffect } from 'react';
import { Table, Image } from 'antd';
import type { TableColumnsType } from 'antd';
import UpdateProduct from '../components/updateProduct';


interface ProductType {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  img: string;
  views: number;
  createdAt?: string; // trường này có thể không có từ API nên để optional
}


const Products: React.FC = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [product, setProduct] = useState<ProductType | null>(null);
  const [loading, setLoading] = useState(true);
  const [isOpenModal, setIsOpenModal] = useState <boolean>(false)

  const handleEdit = (record: ProductType) => {
    console.log("Sửa sản phẩm:", record);
    setProduct(record)
    setIsOpenModal(true)
  };

  const close = ()=>{
    setIsOpenModal(false)
  }
  
  const handleDelete = async (id: React.Key) => {
    try {
      const res = await fetch(`http://localhost:3001/products/${id}`, {
        method: 'DELETE',
      });
  
      if (res.ok) {
        alert(`✅ Đã xóa sản phẩm có id: ${id}` );
        setProducts((prev: ProductType[]) => prev.filter(product => product._id !== id));
      } else {
        console.error("❌ Xóa thất bại!");
      }
    } catch (error) {
      console.error("❌ Lỗi khi xóa:", error);
    }
  };
  

const columns: TableColumnsType<ProductType> = [
  {
    title: 'Image',
    dataIndex: 'img',
    render: (img: string) => (
      <Image
        width={80}
        src={`http://localhost:3001/images/${img}`}
        alt="product"
      />
    ),
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    render: (price: number) => `${price.toLocaleString()} VND`,
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
  {
    title: 'Category',
    dataIndex: 'category',
  },
  {
    title: 'Views',
    dataIndex: 'views',
  },
  {
    title: 'Created At',
    dataIndex: 'createdAt',
    render: (createdAt: string | undefined) =>
      createdAt ? createdAt : 'N/A',
  },
  {
    title: 'Update & Delete',
    dataIndex: 'actions',
    key: 'actions',
    render: (_, record: ProductType) => (
      <div style={{ display: 'flex', gap: '8px' }}>
        <button
          onClick={() => handleEdit(record)}
          style={{ padding: '4px 8px', background: '#1677ff', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Sửa
        </button>
        <button
          onClick={() => handleDelete(record._id)}
          style={{ padding: '4px 8px', background: '#ff4d4f', color: 'white', border: 'none', borderRadius: '4px' }}
        >
          Xóa
        </button>
      </div>
    ),
  }
  
];


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3001/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);



  return (<>
        <UpdateProduct DataCart={product} Callback={close} isOpen={isOpenModal}></UpdateProduct>
        <Table<ProductType>
            rowKey="_id"
            columns={columns}
            dataSource={products}
            loading={loading}
            />
  </>
   
  );
};

export default Products;
