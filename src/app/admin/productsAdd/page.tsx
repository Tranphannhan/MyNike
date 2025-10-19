'use client';

import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';

interface ProductForm {
    name: string;
    price: string;
    description: string;
    category: string;
  }

const AddProduct: React.FC = () => {
  const [fileList, setFileList] = useState<UploadFile<RcFile>[]>([]);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: ProductForm) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('price', values.price);
    formData.append('description', values.description);
    formData.append('category', values.category);
    formData.append('views', '1');

    if (fileList.length > 0 && fileList[0].originFileObj) {
        formData.append('img', fileList[0].originFileObj as RcFile);
      }

    try {
      setLoading(true);
      const res = await fetch('http://localhost:3001/products', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        alert('✅ Thêm sản phẩm thành công!');
      } else {
        message.error('❌ Thêm sản phẩm thất bại!');
      }
    } catch (err) {
      console.error(err);
      message.error('❌ Có lỗi xảy ra!');
    } finally {
      setLoading(false);
    }
  };

  const handleUploadChange = (info: UploadChangeParam) => {
    setFileList(info.fileList);
  };

  return (
    <Form layout="vertical" onFinish={onFinish}>
      <Form.Item label="Tên sản phẩm" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Giá" name="price" rules={[{ required: true }]}>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item label="Mô tả" name="description" rules={[{ required: true }]}>
        <Input.TextArea />
      </Form.Item>

      <Form.Item label="Danh mục" name="category" rules={[{ required: true }]}>
        <Input />
      </Form.Item>


      <Form.Item label="Ảnh" name="img" rules={[{ required: true }]}>
        <Upload
          beforeUpload={() => false} // Không tự upload
          onChange={handleUploadChange}
          fileList={fileList}
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
        </Upload>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loading}>
          Thêm sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
