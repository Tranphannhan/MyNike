'use client'

import { useEffect, useRef, useState } from 'react'
import './detail.css'
import { cartProductsType, ProductCardType } from '@/app/types/product/productCardInterface'
import { getDetailProduct } from '@/app/services/productServices'
import { useParams } from 'next/navigation'
import { formatCurrency } from '@/app/utils/format'
import Message from '@/app/detail/[id]/modalAddCart'
import { useAppDispatch } from '@/app/store/hooks'
import { addToCart } from '@/app/cart/cartSlice'

export default function Detail() {
    const sizes = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];
    const imageList = [
        "BLAZER+LOW+'77+VNTG (9).png",
        "BLAZER+LOW+'77+VNTG (10).png",
        "BLAZER+LOW+'77+VNTG (11).png",
        "BLAZER+LOW+'77+VNTG (12).png",
        "BLAZER+LOW+'77+VNTG (13).png",
        "BLAZER+LOW+'77+VNTG (14).png",
        "BLAZER+LOW+'77+VNTG (15).png",
        "DYO.png",
      ];
    const BASE_URL_API = process.env.NEXT_PUBLIC_API_BASE_URL;
    const { id } = useParams();
    const [product, setProduct] = useState<ProductCardType | null>(null);
    const [openMessage, setOpenMessage] = useState<boolean>(false)
    const ProductAddToCart = useRef<cartProductsType | null>(null);
    const [size,setSize] = useState <number> (39)
  

    const dispatch = useAppDispatch()

    function handleAddToCart(product: ProductCardType | null) {
        if (!product) return;
        console.log(openMessage)
        if (typeof window !== "undefined") {
            ProductAddToCart.current = {
                ...product,
                size: size,
                quantity: 1,
                color: { _idColor: "123", nameColor: "white" },
            };

            dispatch(addToCart(ProductAddToCart.current))
            setOpenMessage(false);
            setTimeout(() => setOpenMessage(true), 1); 
        }
    }

    useEffect(() => {
        const fetchDetail = async () => {
            if (!id) return;
            try {
                const dataProduct: ProductCardType | null = await getDetailProduct(id);
                if (dataProduct) setProduct(dataProduct);
            } catch (error) {
                console.error("Lỗi khi tải sản phẩm:", error);
            }
        };
        fetchDetail();
    }, [id]);
    
    return(
        <>
             <main>   
            { <Message
                callBack={()=>setOpenMessage(false)} 
                open={openMessage}
                productMessage={ProductAddToCart.current}
             />}  
        <div className="container_detail">
            <div className="details_product">
                <div className="details_product_left">
                    <div className="details_product_left_sicky">
                        <div className="details_product_left_sicky_name">
                            <label >{product?.name}</label>
                            <label >{product?.category}</label>
                            <label >{formatCurrency(product?.price ??0)}</label>
                        </div>
                        <div className="details_product_left_image">
                            <img loading="lazy" src={`${BASE_URL_API}/images/${product?.img}`} alt=""/>
                            <label ><i className="fa-solid fa-star"></i>Highly Rated</label>
                            <div className="details_product_left_image_contain_arrow">
                                <i className="fa-solid fa-chevron-right"></i>
                                <i className="fa-solid fa-chevron-left"></i>
                        </div>
                    </div>
                    <div className="details_product_left_miniimage">
                        <img loading="lazy" src="../images/BLAZER+LOW+'77+VNTG (2).png" alt=""/>
                        <img loading="lazy" src="../images/BLAZER+LOW+'77+VNTG (1).png" alt=""/>
                        <img loading="lazy" src="../images/BLAZER+LOW+'77+VNTG (3).png" alt=""/>
                        <img loading="lazy" src="../images/BLAZER+LOW+'77+VNTG (4).png" alt=""/>
                        <img loading="lazy" src="../images/BLAZER+LOW+'77+VNTG (5).png" alt=""/>
                        <img loading="lazy" src="../images/BLAZER+LOW+'77+VNTG (6).png" alt=""/>
                        <img loading="lazy" src="../images/BLAZER+LOW+'77+VNTG (7).png" alt=""/>
                    </div>
                </div>
                    </div>
                <div className="details_product_right">
                    <label  className="display_mobile_none">{product?.name}</label>
                    <label className="display_mobile_none">{product?.description}</label>
                    <label className="display_mobile_none">{formatCurrency(product?.price ??0)}</label>

                    <div className="details_product_right_size size_mobile">
                        <div className="details_product_right_size_text">
                            <label >Select Size</label>
                            <label >Size Guide</label>
                        </div>

                        <div className="details_product_right_btn">
                            {sizes.map(size=> (<button key={size} onClick={()=>{setSize(size)}}>SZ {size}</button>))}
                        </div>
                    </div>

                    <div className="details_product_right_img">
                    {imageList.map((img, index) => (
                        <img loading="lazy" key={index} src={`../images/${img}`} alt={`product-image-${index}`} />
                    ))}
                    </div>

                    <div className="details_product_right_size size_pc">
                        <div className="details_product_right_size_text">
                            <label >Select Size</label>
                            <label >Size Guide</label>
                        </div>

                        <div className="details_product_right_btn">
                            {sizes.map(size=> (<button key={size} onClick={()=>{setSize(size)}}>SZ {size}</button>))}
                        </div>
                    </div>

                    <div className="details_product_right_addbag">
                        <button onClick={()=>{handleAddToCart(product)}}>Add to Bag</button>
                        <button>Favourite<i className="fa-regular fa-heart"></i></button>
                    </div>

                    <p className="details_product_right_text">
                        Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low 77 Vintage returns with its low-profile style and heritage b-ball looks. Featuring luscious suede details, a retro Swoosh design and a super-soft collar, its the must-have wardrobe staple that will take you everywhere.
                    </p>

                    <ul>
                        <li>
                            Colour Shown: Summit White/Photon Dust/White/Cacao Wow
                        </li>
                        <li>
                            Style: DA6364-113
                        </li>
                        <li>
                            Country/Region of Origin: Vietnam
                        </li>

                    </ul>
                    <a href="#">View Product Details</a>

                    <div className="details_product_right_more">
                        <div className="details_product_right_more_freeDalivery">
                            <label className='open_details_product_right_more' >Free Delivery and Returns<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                            <div className="details_product_right_more_freeDalivery_contain">
                                <label >Your order of 5.000.000₫ or more gets free standard delivery.</label>
                                <ul>
                                    <li>Standard delivered 4-5 Business Days</li>
                                    <li>Express delivered 2-4 Business Days</li>
                                </ul>
                                <label >Orders are processed and delivered Monday-Friday (excluding public holidays)</label>
                                <label >Nike Members enjoy <a href="">free returns.</a></label>
                            </div>
                        </div>
                        <div className="details_product_right_more_Reviews">
                            <label className='open_details_product_right_more' >Reviews (105)<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                            <div className="details_product_right_more_Reviews_contain">
                                <div className="details_product_right_more_Reviews_contain_reviewProduct">
                                    <div className="details_product_right_more_Reviews_contain_reviewProduct_icon">
                                        <p><i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </p>
                                        <label >4.5 Stars</label>
                                    </div>
                                    <a href="">Write a Review</a>
                                </div>

                                <div className="details_product_right_more_Reviews_contain_reviewOfproduct">
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_name">
                                        Tran Phan Nhan
                                    </div>
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_day">
                                        <p><i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </p>
                                        <p>4-9-2024</p>
                                    </div>
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_contain">
                                        Product is very great and cheap
                                    </div>
                                </div>

                                <div className="details_product_right_more_Reviews_contain_reviewOfproduct">
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_name">
                                        Tran Phan Nhan
                                    </div>
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_day">
                                        <p><i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </p>
                                        <p>4-9-2024</p>
                                    </div>
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_contain">
                                        Product is very great and cheap
                                    </div>
                                </div>

                                <div className="details_product_right_more_Reviews_contain_reviewOfproduct">
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_name">
                                        Tran Phan Nhan
                                    </div>
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_day">
                                        <p><i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </p>
                                        <p>4-9-2024</p>
                                    </div>
                                    <div className="details_product_right_more_Reviews_contain_reviewOfproduct_contain">
                                        Product is very great and cheap
                                    </div>
                                </div>

                                <a href="" className="More_review">More Reviews</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container_detail_alsoLike">
                <div className="container_detail_alsoLike_contain">
                    <label >YOU MIGHT ALSO LIKE</label>
                    <div className="container_detail_alsoLike_contain_arrow"><i className="fa-solid fa-chevron-left"></i><i className="fa-solid fa-chevron-right"></i></div>
                    <div className="container_detail_alsoLike_contain_product">
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="../images/giaynammoi1.png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="../images/giaynammoi2.png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="../images/giaynu.png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                        <div className="container_detail_alsoLike_contain_product_child"><img loading="lazy" src="../images/giaynam (3).png" alt=""/>
                            <div className="container_detail_alsoLike_contain_product_child_name">Nike Air Max 270</div>
                            <div className="container_detail_alsoLike_contain_product_child_type">Younger Kids Shoes</div>
                            <div className="container_detail_alsoLike_contain_product_child_price">2,549,000₫</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container_detail_banner">
                <div>Explore the Nike Blazer Low 77 Vintage</div>
                <img loading="lazy" src="../images/banner-detail (1).jpg" alt=""/>
                <div>Originally designed for performance hoops, the Nike Blazer Low offers durability and comfort that lasts. The nearly 1-to-1 remake features crisp leather on the upper with soft suede and synthetic details for added durability and throwback styling.
                </div>
                <img loading="lazy" src="../images/banner-detail (2).jpg" alt=""/>
                <div >The ultra-clean colours, simple lines and low-cut, padded collar create a sleek look that feels great.</div>
                <img loading="lazy" src="../images/banner-detail (3).jpg" alt=""/>
                <div>The vulcanised construction fuses the outsole to midsole for a streamlined look thats durable and comfortable.</div>
            </div>
        </div>
    </main>
        </>
       
    )
}