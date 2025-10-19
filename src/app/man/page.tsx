import ListBanner from "../components/listBanner";
import MemberBenefits from "../components/listBannerMember";
import ShopBySport from "../components/shopBySport";
import SlideSpotlight from "../components/slideSpotlight";
import TrendingList from "../components/TrendingList";
import { bannersData, memberData, sportsData } from "../data/banner";
import { trendingData } from "../data/products";
import style from './man.module.css'

export default function Index(){
    return(
        <>
                    <main>
                    <h1 className={style.TextBannerPage}>Men</h1>
                    <div className="banner_img">
                  
                <video className="imgbanner" autoPlay loop muted>
                    <source src="/images/BannerMenPage.mp4" type="video/mp4" />
                </video>
        </div>
        <div className="banner_introduction">
                <label >
                MASCULINE BEAUTY
                 </label>
                <label >Confident steps and strength come from Nike Mens shoes.</label>
                <button>Shop</button>
            </div>
            
            <ListBanner
                banners={bannersData} 
                titleList='Trending'
             />

            <TrendingList
                trendingItems={trendingData} 
                titleList='Trending This Week'
             />
       
        <div className="spotlight">
            <label >Classics Spotlight</label>
        </div>
        <div className="spot_products">
            <SlideSpotlight
            
            />
        </div>

        <ShopBySport sports={sportsData}/>           

        <MemberBenefits memberProducts={memberData}/>

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