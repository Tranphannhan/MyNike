'use client'

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ProductType {
  _id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  img: string;
  views: number;
  createdAt?: string;
}

function UpdateProduct({
  Callback,
  isOpen,
  DataCart,
}: {
  Callback: () => void;
  isOpen: boolean;
  DataCart: ProductType | null;
}) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState<File | undefined>(undefined);

  useEffect(() => {
    if (DataCart) {
      setName(DataCart.name || '');
      setPrice(DataCart.price || 0);
      setCategory(DataCart.category || '');
      setDescription(DataCart.description || '');
    }
  }, [isOpen]);

  async function handlePay() {
    const formdata = new FormData();

    if (img) {
      formdata.append('img', img);
    } else {
      formdata.append('img', DataCart?.img || '');
    }

    formdata.append('name', name);
    formdata.append('price', String(price));
    formdata.append('description', description);
    formdata.append('category', category);
    formdata.append('views', String(DataCart?.views || 0));

    try {
      const res = await fetch(`http://localhost:3001/products/${DataCart?._id}`, {
        method: 'PUT',
        body: formdata,
      });
  
      if (!res.ok) {
        throw new Error('Cập nhật thất bại!');
      }
  
      alert('✅ Cập nhật thành công:');
      Callback(); // đóng modal sau khi thành công
      window.location.reload()
    } catch (error) {
      console.error('❌ Lỗi cập nhật:', error);
    }

    console.log('Submitting data:', {
      name,
      price,
      description,
      category,
      views: DataCart?.views,
      img: img || DataCart?.img,
    });

    Callback(); // đóng modal sau khi gửi
  }

  return (
    <Modal show={isOpen} onHide={Callback}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Image src="/images/logonike.jpg" width={60} height={60} alt="Nike Logo" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="Form__iptMDBay">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Product name"
            className="iptMDBay"
          />
          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            type="number"
            placeholder="Price"
            className="iptMDBay"
          />
          <input
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            type="text"
            placeholder="Category"
            className="iptMDBay"
          />
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description"
            className="iptMDBay"
          />
          <input
            type="file"
            className="iptMDBay"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) {
                setImg(file);
              }
            }}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button
          style={{ width: 150, height: 45, borderRadius: 1000 }}
          variant="dark"
          onClick={handlePay}
        >
          Update Product
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateProduct;
