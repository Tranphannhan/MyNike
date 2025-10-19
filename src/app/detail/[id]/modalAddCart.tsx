"use client";
import { useEffect, useRef } from "react";
import { cartProductsType } from "../../types/product/productCardInterface";
import { formatCurrency } from "@/app/utils/format";
import { useAppSelector } from "@/app/store/hooks";

interface MessageType {
  productMessage: cartProductsType | null;
  open: boolean;
  callBack: ()=>void;
}

export default function Message({  productMessage, open, callBack }: MessageType) {
  const elementContainer = useRef<HTMLDivElement | null>(null);
  const BASE_URL_API = process.env.NEXT_PUBLIC_API_BASE_URL;
    const quantityCart = useAppSelector(state=>state.cart.totalQuantity)

  useEffect(() => {
      if(elementContainer.current){
        elementContainer.current.classList.add("open");
      }
  }, []);

  return (
    <div onClick={callBack} className={`container_Modal_Product ${open && 'container_Modal_Product--Open'}`}>
      <div className={`container_Modal_Cart ${open && 'container_Modal_Cart--open '}`}ref={elementContainer} onClick={(e) => e.stopPropagation()}>
        <div className="modal_container">
          <div className="modal-header">
            <span className="check-icon">
              <i className="bi bi-check-circle-fill"></i>
            </span>
            <span>Added to Bag</span>
            <button onClick={callBack} className="close-btn">
              <i className="bi bi-x-lg"></i>
            </button>
          </div>
          <div className="modal-body">
            <img
              src={`${BASE_URL_API}/images/${productMessage?.img}`}
              alt={productMessage?.name || "Product Image"}
              className="product-image"
            />
            <div className="product-info">
              <strong>{productMessage?.name || "Nike Vomero 18"}</strong>
              <p>{productMessage?.description}</p>
              <p>{`${productMessage?.color.nameColor} | Size: ${productMessage?.size}`}</p>
              <p className="price">{formatCurrency(productMessage?.price) }</p>
            </div>
          </div>
          <div className="modal-footer">
            <button className="view-bag-btn">View Bag ({quantityCart})</button>
            <button className="checkout-btn">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );

}
