'use client'
import React, { JSX, useState } from "react";
import './cart.css'
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { removeFromCart, updateQuantityCart, updateSizeCart } from "./cartSlice";
import { formatCurrency } from "../utils/format";
import { cartProductsType } from "../types/product/productCardInterface";
import { InputNumber, Space } from 'antd';
import ModalPay from "../components/modalPay";


export default function Cart(): JSX.Element{
    const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
    const BASE_APIBackend = process.env.NEXT_PUBLIC_API_BASE_URL
    const [showFormPayment,setShowFormPayment] = useState<boolean>(false);
    const cart = useAppSelector(state => state.cart.items);
    const [openSize, setOpenSize] = useState<boolean>(false);
    const [productCurrent, setProductCurrent] = useState<cartProductsType | null>(null)
    const dispatch = useAppDispatch();

    function handleShowPayment (){
        const show = !showFormPayment;
        setShowFormPayment(show)
    }

    function selectSize(item:cartProductsType){
        console.log(item)
        setOpenSize(true)
        setProductCurrent(item)
    }

    function selectUpdateSize(size:number){
        const newProductCrt = {...productCurrent, size: size}  as cartProductsType;
        setProductCurrent(newProductCrt)
        console.log(newProductCrt)
    }

    function handleUpdateSize(){
        const id:string|undefined = productCurrent?._id;
        const size:number|undefined = productCurrent?.size;
        if(!id || !size) return
        dispatch(updateSizeCart({id,size}))
        setOpenSize(false)
    }

    return(
        <>
                <main>
                <ModalPay DataCart={cart} isOpen={showFormPayment} Callback={handleShowPayment}/>
                    
            <div className="bag">
                <div className="bag_container">
                    <div className="bag_left">
                        <div className="bag_left_title_mobile">
                            <label >Bag</label>
                            <div className="bag_left_title_mobile_items">
                                <label><span>1</span>Item</label>
                                <label >4,999,000₫</label>
                            </div>
                        </div>
                        <div className="bag_left_alert">
                            <label >FREE DELIDERY<i className="bi bi-x close_alert"></i></label>
                            <label >Applies to orders of 5.000.000₫ or more. <a href="">View details.</a></label>
                        </div>
                        <div className="bag_left_title">Bag</div>
                        <div className="bag_left_form_product">

                            {
                                cart.map((item,index)=>(
                                    <div className="bag_left_product" key={index}>
                                <img
                                src={`${BASE_APIBackend}/images/${item.img}`} 
                                alt="" 
                                height={100} 
                                width={100} 
                                />

                                <div className="bag_left_product_content">
                                    <div className="bag_left_product_name">
                                        <label >{item.name}</label>
                                        <label >{formatCurrency(item.price)}</label>
                                    </div>
                                    <div className="bag_left_product_type">{item.description}</div>
                                    <div className="bag_left_product_color">{item.color.nameColor}</div>
                                    <div className="bag_left_product_select">
                                        <div className="bag_left_product_select_size">
                                        <button onClick={()=>{selectSize(item)}}>Size</button>
                                        <button onClick={()=>{selectSize(item)}}>{item.size}</button>
                                        </div>
                                        <div className="bag_left_product_select_quanlity">
                                            <label >Quanlity</label>
                                            <Space>
                                            <InputNumber 
                                            className="inputNumber"
                                            min={1} 
                                            max={99} 
                                            defaultValue={item.quantity} 
                                            onChange={(value) => {
                                                dispatch(updateQuantityCart({id: item._id, quantity:Number(value)}));
                                            }}
                                            />
                                            </Space>
                                            {/* <input
                                            type="number"
                                            value={item.quantity}
                                            min={1}
                                            onChange={(e) => {
                                                dispatch(updateQuantityCart({id: item._id, quantity:Number(e.currentTarget.value)}));
                                            }}
                                            /> */}
                                        </div>
                                    </div>

                                    <div className="bag_left_product_content_icon">
                                        <i className="fa-regular fa-heart"></i>
                                        <i onClick={()=>{dispatch(removeFromCart(item._id))}} className="fa-regular fa-trash-can"></i>
                                    </div>
                                </div>
                            </div>
                                ))
                            }
                        </div>

                        <div onClick={()=>{setOpenSize(false)} } className={`select_size_form ${openSize && 'select_size_form--Open'}`}>
                                    <div onClick={(e) => e.stopPropagation()} className={`select_size_form_container ${openSize && 'select_size_form_container--Open'}`}>
                                        <div className="select_size_form_container_left">
                                            <img src={`${BASE_APIBackend}/images/${productCurrent?.img}`} alt=""/>
                                        </div>
                                        <div className="select_size_form_container_right">
                                            <p>{productCurrent?.description}</p>
                                            <p>{productCurrent?.name}</p>
                                            <p>{formatCurrency(productCurrent?.price)}</p>
                                            <p>Select Size</p>
                                            <div className="select_size_form_container_right_select">
                                                {sizes.map((size) => (
                                                <button onClick={()=>{selectUpdateSize(size)}} className={size === productCurrent?.size?'sizeActive':''} key={size}>{size}</button>
                                                ))}
                                            </div>
                                            <button onClick={handleUpdateSize} className="btnUpdateSize">Update Size</button>
                                        </div>
                                    </div>
                                </div>

                    </div>
                    <div className="bag_right">
                        <label >Summary</label>
                        <div className="bag_right_price">
                            <label >Subtotal <i className="fa-solid fa-hippo"></i></label>
                            <label >4,999,000₫</label>
                        </div>
                        <div className="bag_right_Estimated">
                            <label >Estimated Delivery & Handling</label>
                            <label >250,000₫</label>
                        </div>
                        <div className="bag_right_Total">
                            <label >Total</label>
                            <label >5,249,000₫</label>
                        </div>
                        <div className="bag_right_btn">
                            <button onClick={
                                handleShowPayment
                            }>Pay now</button>
                            <button>Member Checkout</button>
                        </div>
                    </div>

                </div>
            </div>
            <div className="bag_left_favourites">
                        <label >Favourites</label>
                        <label >Want to view your favourites? <a href="">Join us</a> or <a href="">Sign in</a></label>
                    </div>

            <div className="container_detail_alsoLike">
                <div className="container_detail_alsoLike_contain">
                    <label >YOU MIGHT ALSO LIKE</label>
                    <div className="container_detail_alsoLike_contain_arrow"><i className="fa-solid fa-chevron-left"></i><i className="fa-solid fa-chevron-right"></i></div>
                    <div className="container_detail_alsoLike_contain_product">
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="images/giaynammoi1.png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="images/giaynammoi2.png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="images/giaynu.png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="images/giaynam (3).png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}