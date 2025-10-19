'use client'
import { useEffect, useRef, useState } from 'react'
import ProductCard from '../components/productCard'
//lấy API
import { getAllProducts } from '../services/productServices'
import './products.css'
import { ProductCardType } from '../types/product/productCardInterface'
import Pagination from 'react-bootstrap/Pagination';
// import { productsData } from '../data/products'
export default function Products(){
    const [products,setProducts] = useState<ProductCardType[]>([])
    const elementProducts = useRef<HTMLDivElement | null>(null)
    const elementFilter = useRef<HTMLDivElement | null>(null)
    const showFilter = useRef<boolean>(false)

    function handleSort(typeSort: string){
        if(!products) return;

        const productsSort: ProductCardType[] = [...products]

        switch (typeSort) {
            case 'lowToHigh':
                productsSort.sort((a,b)=> b.price - a.price)
                break;
            case 'HighToLow':
                productsSort.sort((a,b)=> a.price - b.price)
                break;
            default:
                return;
        }

        setProducts(productsSort)
    }

    function handleShowFilter(){
        if(!elementProducts.current || !elementFilter.current) return;
        
        if(!showFilter.current){
            elementProducts.current.style.width = "calc(100% - 600px)";
            elementFilter.current.style.transform = "translateX(100%)"
        }else{
            elementProducts.current.style.width = "calc(100% - 300px)";
            elementFilter.current.style.transform = "translateX(0)"
        }
        elementProducts.current.style.marginLeft = "auto";
        showFilter.current = !showFilter.current;
    }

    useEffect(()=>{
        const fetchData = async() =>{
            //lấy API
            const dataProducts: ProductCardType[] | null =await getAllProducts();
            // const dataProducts: ProductCardType[] = productsData
            if(dataProducts){
                setProducts(dataProducts)
            }
        }
        fetchData()
    },[])
    return(
        <>
            <main>
            <div className="filters_container">
                <div className="filters">
                    <p className="hide_sortby">Mens Shoes</p>
                    <div className="filters_tool">
                        <div className="openfilters"
                            onClick={handleShowFilter}
                        >
                            <button>Show Filters</button><i className="fa-solid fa-filter"></i></div>
                            <div className="Sort_By"><label>Sort By</label><i className="bi bi-chevron-right sort_by_icon"></i>
                                <div className="contain_sortBy">
                                    <li><a href="">Featured</a></li>
                                    <li><a href="">Newest</a></li>
                                    <li><a onClick={()=>{handleSort('lowToHigh')}}>Price: High-Low</a></li>
                                    <li><a onClick={()=>{handleSort('HighToLow')}}>Price: Low-High</a></li>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
           


            <div className="product">

                   <div className="filters_tool_menu"
                        ref={elementFilter}
                   >
                        <div className="scroll_filters">

                            <div className="filters_tool_menu_container">
                                <p className="Title_mobile">Mens Shoes</p>
                                <div className="menu_type">
                                    <a href="">Lifestyle</a>
                                    <a href="">Jordan</a>
                                    <a href="">Running</a>
                                    <a href="">Basketball</a>
                                    <a href="">Football</a>
                                    <a href="">Training & Gym</a>
                                    <a href="">Skateboarding</a>
                                    <a href="">Golf</a>
                                    <a href="">Tennis</a>
                                    <a href="">Athletics</a>
                                    <a href="">Walking</a>
                                </div>
                                <div className="toolmenu">
                                    <div className="toolmanu_child">
                                        <label  >Gender<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Men</label></p>
                                            <p><input type="checkbox"/><label >women</label></p>
                                            <p><input type="checkbox"/><label >Uniset</label></p>
                                        </div>
                                    </div>

                                    <div className="toolmanu_child">
                                        <label >Color<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child">
                                            <div className="color_container">
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "black"}}></div>
                                                    Black
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "blue"}}></div>
                                                    Blue
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "brown"}}></div>
                                                    Brown
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "green"}}></div>
                                                    Green
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "gray"}}></div>
                                                    Grey
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "orangered"}}></div>
                                                    Orange
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "pink"}}></div>
                                                    Pink
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "purple"}}></div>
                                                    Purple
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "red"}}></div>
                                                    Red
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "white"}}></div>
                                                    White
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "yellow"}}></div>
                                                    Yellow
                                                </div>
                                                <div className="color">
                                                    <div className="black" style={{backgroundColor: "rgb(149, 149, 149)"}}></div>
                                                    Multi
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="toolmanu_child">
                                        <label >Size<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <div className="size">
                                                <button>35</button>
                                                <button>36</button>
                                                <button>37</button>
                                                <button>38</button>
                                                <button>39</button>
                                                <button>40</button>
                                                <button>41</button>
                                                <button>42</button>
                                                <button>43</button>
                                                <button>44</button>
                                                <button>45</button>
                                                <button>46</button>
                                                <button>47</button>
                                                <button>48</button>
                                                <button>49</button>
                                            </div>
                                        </div>
                                    </div>
                                    
    
    
                                    <div className="toolmanu_child">
                                        <label  >Sale & Offers<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Sale</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Kids<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Boys</label></p>
                                            <p><input type="checkbox"/><label >Girls</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Brand<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Nike</label></p>
                                            <p><input type="checkbox"/><label >Jordan</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Collections<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Nike Motiva</label></p>
                                            <p><input type="checkbox"/><label >Nike P-6000</label></p>
                                            <p><input type="checkbox"/><label >Nike V2K</label></p>
                                            <p><input type="checkbox"/><label >Nike SupperRep</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Air Max<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Air Max 1</label></p>
                                            <p><input type="checkbox"/><label >Air Max Furyosa</label></p>
                                            <p><input type="checkbox"/><label >Air Max Puple</label></p>
                                            <p><input type="checkbox"/><label >Air Max Dn</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Width<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Regular</label></p>
                                            <p><input type="checkbox"/><label >Wide</label></p>
                                            <p><input type="checkbox"/><label >Extra Wide</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Sports<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Lifestyle</label></p>
                                            <p><input type="checkbox"/><label >Running</label></p>
                                            <p><input type="checkbox"/><label >Training & Gym</label></p>
                                            <p><input type="checkbox"/><label >Basketball</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Closure Type<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Slip On</label></p>
                                            <p><input type="checkbox"/><label >Strap</label></p>
                                            <p><input type="checkbox"/><label >Zip</label></p>
                                            <p><input type="checkbox"/><label >Toggle</label></p>
                                        </div>
                                    </div>
    
                                    <div className="toolmanu_child">
                                        <label  >Features<i className="bi bi-chevron-right icon_menu_tool"></i></label>
                                        <div className="contain_tool_child" >
                                            <p><input type="checkbox"/><label >Spikeless</label></p>
                                            <p><input type="checkbox"/><label >Water-resistant</label></p>
                                            <p><input type="checkbox"/><label >Waterproof</label></p>
                                       
                                        </div>
                                    </div>
    
                                </div>
                            </div>


                        </div>
                    </div>

                <div className="product_container"  ref={elementProducts}>
                    <div className="products_contain">
                        <div className="child_container_product">
                            <div className="child_product">
                                <img loading="lazy" src="images/anhdausanpham.png" alt=""/>
                                <div className="contain_product">
                                    <label >Nike Infinity</label>
                                    <button>Shop</button>
                                </div>
                            </div>

                            {
                                <ProductCard  products={products}/>
                            }
                             <Pagination>
                                <Pagination.First />
                                <Pagination.Prev />
                                <Pagination.Item active>{1}</Pagination.Item>
                                <Pagination.Item >{2}</Pagination.Item>
                                <Pagination.Item>{3}</Pagination.Item>
                                <Pagination.Next />
                                <Pagination.Last />
                            </Pagination>
                        </div>
                    </div>
                </div>
            </div>
       
        </main>
        </>
    )
}