'use client'
import {
  UserOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  TagsOutlined,
  PictureOutlined,
  DashboardOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import type { GetProp, MenuProps } from 'antd';
import { useRouter } from 'next/navigation';

type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: 'products-parents',
    icon: <ShoppingCartOutlined />,
    label: 'Products',
    children: [
      {
        key: 'products',
        label: 'Product List',
      },
      {
        key: 'productsAdd',
        icon: <PlusOutlined />,
        label: 'Add Product',
      },
    ],
  },
  {
    key: 'users',
    icon: <UserOutlined />,
    label: 'Users',
  },
  {
    key: 'bills',
    icon: <FileTextOutlined />,
    label: 'Bills',
  },
  {
    key: 'categories',
    icon: <TagsOutlined />,
    label: 'Categories',
    children: [
      {
        key: 'categories-list',
        label: 'Category List',
      },
      {
        key: 'categories-add',
        icon: <PlusOutlined />,
        label: 'Add Category',
      },
    ],
  },
  {
    key: 'banners',
    icon: <PictureOutlined />,
    label: 'Banners',
    children: [
      {
        key: 'banners-list',
        label: 'Banner List',
      },
      {
        key: 'banners-add',
        icon: <PlusOutlined />,
        label: 'Add Banner',
      },
    ],
  },
];

export default function MenuAdmin() {

    const router = useRouter();

    const handleClick: MenuProps['onClick'] = (e) => {
        router.push(`/admin/${e.key}`);
      };
  

  return (
    <Menu
      mode="inline"
      style={{ width: 256, height: '100vh', borderRight: 0 }}
      defaultSelectedKeys={['dashboard']}
      items={items}
      onClick={handleClick}
    />
  );
}
