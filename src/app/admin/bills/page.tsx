'use client'
import React, { useState, useEffect } from 'react';
import { Select, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { cartProductsType } from '@/app/types/product/productCardInterface';

interface bills {
  _id: string;
  name: string;
  progress: string;
  date: string;
  name_user: string;
  phone: string;
  gmail: string;
  address: string;
  id_user: string;
  details: cartProductsType[] | null;
}

const Bills: React.FC = () => {
  const [bills, setBills] = useState<bills[]>([]);
  const [loading, setLoading] = useState(true);

  const handleChangeProgress = async (bill: bills, newProgress: string) => {
    try {
      // Gửi request cập nhật đến backend
      const {id_user,...billNotIdUser} = bill
      console.log(id_user)
      await fetch(`http://localhost:3001/bills/${bill._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...billNotIdUser, progress: newProgress ,id_user: id_user}), // sửa process -> progress
      });
  
      // Cập nhật lại state ở frontend
      setBills((prev) =>
        prev.map((b) =>
          b._id === bill._id ? { ...b, progress: newProgress } : b
        )
      );
    } catch (error) {
      console.error('Lỗi cập nhật trạng thái:', error);
    }
  };
  
  

  const columns: TableColumnsType<bills> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Date',
      dataIndex: 'date',
    },
    {
      title: 'User Name',
      dataIndex: 'name_user',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
    },
    {
      title: 'Email',
      dataIndex: 'gmail',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Trạng thái',
      dataIndex: 'progress',
      render: (value, record) => (
        <Select
          value={value}
          onChange={(newValue) => handleChangeProgress(record, newValue)}
          style={{ width: 120 }}
        >
          <Select.Option value="pending">pending</Select.Option>
          <Select.Option value="Processing">Processing</Select.Option>
          <Select.Option value="Shipped">Shipped</Select.Option>
          <Select.Option value="Delivered">Delivered</Select.Option>
        </Select>
      ),
    },
    
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('http://localhost:3001/bills');
        const data = await res.json();
        setBills(data);
      } catch (error) {
        console.error('Failed to fetch bills:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Table<bills>
      rowKey="_id"
      columns={columns}
      dataSource={bills}
      loading={loading}
      expandable={{
        expandedRowRender: (record) => (
          <Table
          dataSource={record.details || []}
          pagination={false}
          rowKey={(item) => item._id || item.name}
          columns={[
              {
                title: 'Image',
                render: (item) => (
                  <img
                    src={`http://localhost:3001/images/${item.img}`}
                    alt={item.name}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                ),
              },
              {
                title: 'Name',
                dataIndex: 'name',
              },
              {
                title: 'Quantity',
                dataIndex: 'quantity',
              },
              {
                title: 'Price',
                dataIndex: 'price',
                render: (price: number) => `${price.toLocaleString()} VND`,
              },
              {
                title: 'Total amount',
                render: (item) =>
                  `${(item.price * item.quantity).toLocaleString()} VND`,
              },
              
            ]}
          />
        ),
        rowExpandable: (record) => !!record.details && record.details.length > 0,
      }}
    />
  );
};

export default Bills;
