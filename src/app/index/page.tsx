import SlideSpotlight from "../components/slideSpotlight";

export default function Index(){
    return(
        <>
                    <main>
                    <div className="banner_img">
  <video className="imgbanner" autoPlay loop muted>
    <source src="/images/0826.mp4" type="video/mp4" />
  </video>
</div>
        <div className="banner_introduction">
                <label >
                    BUILT FOR THE CHASE</label>
                <label >  Run ‘em down in the new Giannis Freak 6.</label>
                <button>Shop</button>
            </div>
                            <div className="arrow">
                                <label >Featured</label>
                                <div className="arrow_icon">
                                    <div className="arrowleft"><i className="fa-solid fa-angle-left"></i></div>
                                    <div className="arrowright"><i className="bi bi-chevron-right"></i></div>
                                </div>
                            </div>
                        <div className="feature_relative">
                            <div className="featured feature1">
                                <div className="main_featured">
                                    <div className="featured_container">
                                        <div className="featured_product">
                                            <img loading="lazy" src="images/anhmininam (1).png" alt="" className="featured_product_img"/>
                                                <label >For An Eye-Catching Edge</label>
                                                <label >Explore</label>
                                        </div>
                                        <div className="featured_product">
                                            <img loading="lazy" src="images/anhmininam (2).jpeg" alt="" className="featured_product_img"/>
                                                <label >Next-Gen Mercurial</label>
                                                <label >Shop</label>
                                        </div>
                                        <div className="featured_product">
                                            <img loading="lazy" src="images/anhmininam (3).jpeg" alt="" className="featured_product_img"/>
                                                <label >Nike. Just Do It Lace Up in Nike Cortez</label>
                                                <label >Shop</label>
                                        </div>
                                        <div className="featured_product">
                                            <img loading="lazy" src="images/anhmininam (4).png" alt="" className="featured_product_img"/>
                                                <label >Nike. Just Do It Back to School</label>
                                                <label >Shop</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

        <div className="arrow arrow2">
            <label >Trending This Week</label>
            <div className="arrow_icon">
                <div className="label_icon">Shop</div>
                <div className="arrowleft arrowleft2"><i className="fa-solid fa-angle-left"></i></div>
                <div className="arrowright arrowright2"><i className="bi bi-chevron-right"></i></div>
            </div>
        </div>


        <div className="trending_relative">
            <div className="featured trending">
                <div className="main_featured">
                    <div className="featured_container">
                        <div className="Trending_product">
                            <img loading="lazy" src="images/giaynam (1).png" alt="" className="Trending_product_img"/>
                                <label >
                                    Nike V2K Run
                                  </label>
                                <label > Shoes</label>
                                <label >3,519,000₫</label>
                        </div>
                        <div className="Trending_product">
                            <img loading="lazy" src="images/giaynam (2).png" alt="" className="Trending_product_img"/>
                                <label >
                                    Nike V2K Run
                                  </label>
                                <label > Shoes</label>
                                <label >3,519,000₫</label>
                        </div>
                       
                        <div className="Trending_product">
                            <img loading="lazy" src="images/giaynam (3).png" alt="" className="Trending_product_img"/>
                                <label >
                                    Nike V2K Run
                                  </label>
                                <label > Shoes</label>
                                <label >3,519,000₫</label>
                        </div>
                       
                        <div className="Trending_product">
                            <img loading="lazy" src="images/giaynam (4).png" alt="" className="Trending_product_img"/>
                                <label >
                                    Nike V2K Run
                                  </label>
                                <label > Shoes</label>
                                <label >3,519,000₫</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div className="thelatest">
            <label >The Latest</label>
        </div>
        <div className="banner_thelatest">
            <img loading="lazy" src="images/banner_theLatest.jpeg" alt=""/>
            <label >New from Nike Fooball</label>
            <label >2024-25 LIVERPOOL F.C AWAY KIT</label>
            <label >Bringing back iconic tones of teal.</label>
            <button>Shop</button>
            
        </div>


        <div className="spotlight">
            <label >Classics Spotlight</label>
        </div>
        <div className="spot_products">
        {
            <SlideSpotlight
            
            />
        }
        </div>


       {/* <div className="spot_products">
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (4).png" alt=""/>
                <label >Nike Infinity</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (2).png" alt=""/>
                <label >Nike Air Max</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (3).png" alt=""/>
                <label >Nike Zoom</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (1).png" alt=""/>
                <label >Nike React</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (5).png" alt=""/>
                <label >Nike Pegasus</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (4).png" alt=""/>
                <label >Nike Fusyta</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (2).png" alt=""/>
                <label >Nike Metcon</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (4).png" alt=""/>
                <label >Nike Infinity</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (2).png" alt=""/>
                <label >Nike Air Max</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (3).png" alt=""/>
                <label >Nike Zoom</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (1).png" alt=""/>
                <label >Nike React</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (5).png" alt=""/>
                <label >Nike Pegasus</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (4).png" alt=""/>
                <label >Nike Fusyta</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (2).png" alt=""/>
                <label >Nike Metcon</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (4).png" alt=""/>
                <label >Nike Infinity</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (2).png" alt=""/>
                <label >Nike Air Max</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (3).png" alt=""/>
                <label >Nike Zoom</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (1).png" alt=""/>
                <label >Nike React</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (5).png" alt=""/>
                <label >Nike Pegasus</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (4).png" alt=""/>
                <label >Nike Fusyta</label>
            </div>
            <div className="spot_product">
                <img loading="lazy" src="images/giaynam (2).png" alt=""/>
                <label >Nike Metcon</label>
            </div>
        
            <div className="spot_arrow">
                <div className="spot_arrow_left arrow_icon_spot">
                    <i className="fa-solid fa-angle-left"></i>
                </div>
                <div className="spot_arrow_right arrow_icon_spot">
                    <i className="fa-solid fa-angle-right"></i>
                </div>
            </div>

            <div className="count_spot">
                <div className="count_spot_icon">
                    <div className="count_spot_icon_item">1</div>
                    <div className="count_spot_icon_item">2</div>
                    <div className="count_spot_icon_item">3</div>
                    <div className="count_spot_icon_item">4</div>
                    <div className="count_spot_icon_item">5</div>
                </div>
            </div>
        </div> */}

            <div className="arrow arrow3">
                <label >Shop By Sport</label>
                <div className="arrow_icon">
                    <div className="arrowleft arrowleft3"><i className="fa-solid fa-angle-left"></i></div>
                    <div className="arrowright arrowright3"><i className="bi bi-chevron-right"></i></div>
                </div>
            </div>
            <div className="main3_relative">
                <div className="main3">
                    <div className="product_main3s">
                        <div className="product_main3">
                            <img loading="lazy" src="images/spot (1).png" alt=""/>
                            <button>Running</button>
                        </div>
                        <div className="product_main3">
                            <img loading="lazy" src="images/spot (4).png" alt=""/>
                            <button>Fooball</button>
                        </div>
                        <div className="product_main3">
                            <img loading="lazy" src="images/spot (3).png" alt=""/>
                            <button>Basketball</button>
                        </div>
                        <div className="product_main3">
                            <img loading="lazy" src="images/spot (2).png" alt=""/>
                            <button>Tennis</button>
                        </div>
                        <div className="product_main3">
                            <img loading="lazy" src="images/spot (5).png" alt=""/>
                            <button>Skateboarding</button>
                        </div>
                    </div>
                </div>
            </div>

      
       


        <div className="dontmiss">
            <label >Dont Miss</label>
            <video className="video_dontmiss" autoPlay loop muted>
                <source src="images/0829.mp4" type="video/mp4"/>
            </video>
            <div className="dont_misstext">
                <label >Jordan Men</label>
                <label >FLIGHT MVP</label>
                <label >Kick your style into high gear with bold pieces inspired by the racetrack. Pair graphic tops and hoodies with versatile bottoms and layering
    
                </label><label > pieces for a high-octane look.</label>
                <button>Shop</button>
            </div>
        </div>
        <div className="main4">
            <div className="main4_container">
                <div className="arrow arrow4">
                    <label >Member Benefits</label>
                    <div className="arrow_icon">
                        <div className="arrowleft arrowleft4"><i className="fa-solid fa-angle-left"></i></div>
                        <div className="arrowright arrowright4"><i className="bi bi-chevron-right"></i></div>
                    </div>
                </div>
        
                <div className="product_relative">
                        <div className="main4_scroll">
                            <div className="products_main4">
                                <div className="product_4">
                                    <img loading="lazy" src="images/anhmininu (3).png" alt=""/>
                                    <div className="product_4_contain">
                                        <label >Member Product</label>
                                        <label >Your Exclusive Access</label>
                                        <button>Shop</button>
                                    </div>
                                </div>

                                <div className="product_4">
                                    <img loading="lazy" src="images/anhmininu (1).png" alt=""/>
                                    <div className="product_4_contain">
                                        <label >Member Product</label>
                                        <label >Your Exclusive Access</label>
                                        <button>Shop</button>
                                    </div>
                                </div>

                                <div className="product_4">
                                    <img loading="lazy" src="images/anhmininu (4).png" alt=""/>
                                    <div className="product_4_contain">
                                        <label >Member Product</label>
                                        <label >Your Exclusive Access</label>
                                        <button>Shop</button>
                                    </div>
                                </div>

                                <div className="product_4">
                                    <img loading="lazy" src="images/anhmininu (2).png" alt=""/>
                                    <div className="product_4_contain">
                                        <label >Member Product</label>
                                        <label >Your Exclusive Access</label>
                                        <button>Shop</button>
                                    </div>
                                </div>

                        
                            </div>
                           
                        </div>
                </div>
            </div>
        </div>

        <div className="main_end">
            <div className="main_end_container">
                <div className="end_contain">
                    <label >Icons</label>
                    <label >Air Force 1</label>
                    <label >Huarache</label>
                    <label >Air Max 90</label>
                    <label >Air Max 95</label>
                </div>

                <div className="end_contain">
                    <label >Shoes</label>
                    <label >All Shoes</label>
                    <label >Custom Shoes</label>
                    <label >Jordan Shoes</label>
                    <label >Running Shoes</label>
                </div>

                <div className="end_contain">
                    <label >Clothing</label>
                    <label >All Clothing</label>
                    <label >Modest Wear</label>
                    <label >Hoodies & Pullovers</label>
                    <label >Shirts & Tops</label>
                </div>

                <div className="end_contain">
                    <label >Kids</label>
                    <label >Infant & Toddler Shoes</label>
                    <label >Kids Shoes</label>
                    <label >Kids Jordan Shoes</label>
                    <label >Kids Basketball Shoes</label>
                </div>
            </div>
        </div>
        </main>
        </>
    )
}