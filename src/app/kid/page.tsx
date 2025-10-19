import Image from "next/image";
import ListBannerSizeKids from "../components/listBannerKidsSize";
import ListBannerSmall from "../components/listBannerSmall";
import ShopBySport from "../components/shopBySport";
import TrendingList from "../components/TrendingList";
import { BannerSizeKids, BannerSmallDataKids, sportsDataKids} from "../data/banner";
import { trendingDataWomen } from "../data/products";
import style from './kids.module.css';
export default function Index(){
    return(
        <>
                    <main>
        <div className={style.banner_img}>
            <h1 className={style.TextBannerPage}>Kid</h1>
            <Image width={500} height={500} className={style.Banner1} src="/images/bannerKidsPage.png" alt="" />
        </div>
        <div className="banner_introduction pb-[70px]">
                <label className={style.textBanner}>
                ALL DAY COMFORT FOR <br />
                <span className="block text-center">THE KIDS</span>
                </label>

                <label >Both in and out of school.</label>
                <button className="!py-[5px]">Shop</button>

        </div>

        <ListBannerSmall titleBanner="Featured" categories={BannerSmallDataKids}/>

        <TrendingList trendingItems={trendingDataWomen} titleList="Popular for Kids"/>

        <ListBannerSizeKids categories={BannerSizeKids}/>

        <ShopBySport sports={sportsDataKids}/>
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