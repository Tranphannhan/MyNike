'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { accountUser } from '../types/account/accountInterface';
import { jwtDecode } from 'jwt-decode';
import { cartProductsType } from '../types/product/productCardInterface';
import { formatDate } from '../utils/format';
import { useAppDispatch } from '../store/hooks';
import { resetCart } from '../cart/cartSlice';

function ModalPay({ Callback, isOpen, DataCart }: { Callback: () => void; isOpen: boolean ; DataCart: cartProductsType[]|null}) {
  const [infoAccount, setInfoAccount] = useState<accountUser | null>(null);
  const [invoiceName, setInvoiceName] = useState('Nike shoe invoice');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [gmail, setGmail] = useState('');
  const [address, setAddress] = useState('');
  const [id, setId] = useState('')
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      const decoded: accountUser = jwtDecode(token);
      setInfoAccount(decoded);
    }
  }, [isOpen]);

  useEffect(() => {
    if (infoAccount) {
      setName(infoAccount.name || '');
      setPhone(infoAccount.phone || '');
      setGmail(infoAccount.gmail || '');
      setAddress(infoAccount.address || '');
      setId(infoAccount.id || '');
    }
  }, [infoAccount]);

  async function handlePay() {
    const today = new Date();
    const formatted = formatDate(today);
    const process = 'pending';
  
    const paymentInfo = {
      name: invoiceName,
      name_user: name,
      phone: phone,
      gmail: gmail,
      address: address,
      details: DataCart,
      date: formatted,
      progress: process,
    };
  
    try {
      const res = await fetch(`http://localhost:3001/bills/${id}`, {
        method: 'POST', // hoặc 'PUT' nếu bạn cập nhật
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentInfo),
      });
  
      if (!res.ok) {
        throw new Error('Payment failed');
      }
  
      alert('Payment successful')
      dispatch(resetCart())
      Callback(); // Đóng modal
      
    } catch (err) {
      console.error('Error during payment:', err);
    }
  }

  return (
    <>
      <Modal show={isOpen} onHide={Callback}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src="/images/logonike.jpg" width={60} height={60} alt="Nike Logo" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="Form__iptMDBay">
            <input
              value={invoiceName}
              onChange={(e) => setInvoiceName(e.target.value)}
              type="text"
              placeholder="Invoice name"
              className="iptMDBay"
            />
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Your name"
              className="iptMDBay"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              placeholder="Number Phone"
              className="iptMDBay"
            />
            <input
              value={gmail}
              onChange={(e) => setGmail(e.target.value)}
              type="email"
              placeholder="Gmail"
              className="iptMDBay"
            />
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              placeholder="Address"
              className="iptMDBay"
            />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ width: 150, height: 45, borderRadius: 1000 }} variant="dark" onClick={handlePay}>
            Cash payment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalPay;
