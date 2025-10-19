
import Image from "next/image";
import MemberBenefits from "../components/listBannerMember";
import ListBannerSmall from "../components/listBannerSmall";
import TrendingList from "../components/TrendingList";
import {BannerSmallData1, BannerSmallData2, memberData} from "../data/banner";
import { trendingDataWomen } from "../data/products";
import styleWomen from './women.module.css';

export default function Index(){
    return(
        <>
                    <main>
        {/* <div className={styleWomen.banner_img}>
            <h1 className={styleWomen.TextBannerPage}>Women</h1>
            <Image width={500} height={500} className={styleWomen.Banner1} src="/images/BannerPageWomen.png" alt="" />
        </div> */}
        <h1 className={styleWomen.TextBannerPage}>Women</h1>
        <div className="banner_img">
                <video className="imgbanner" autoPlay loop muted>
                    <source src="/images/BannerWomenPage.mp4" type="video/mp4" />
                </video>
        </div>
        <div className="banner_introduction">
                <label >
                FEMININE BEAUTY
                 </label>
                <label >Beautiful and charming steps through Nike shoes.</label>
                <button>Shop</button>
            </div>

            <div className={styleWomen.feature_women}>
                <label className={styleWomen.feature_text}>Featured</label>
                <div className={styleWomen.feature_container}>
                    <div className={styleWomen.f_container_item}>
                        <Image width={500} height={500} className={styleWomen.f_c_img} src="/images/Feature_Women (1).png" alt="" />
                        <div className={styleWomen.f_c_i_text}>
                            <label className={styleWomen.f_c_i_Text}>Nike Running Shoe Finder</label>
                            <button className={styleWomen.f_c_i_Button}>Shop</button>
                        </div>
                    </div>

                    <div className={styleWomen.f_container_item}>
                        <Image width={500} height={500} className={styleWomen.f_c_img} src="/images/Feature_Women (2).png" alt="" />
                        <div className={styleWomen.f_c_i_text}>
                            <label className={`${styleWomen.f_c_i_TextWhite} ${styleWomen.f_c_i_Text}`}>YOU CANT WIN. SO WIN.<br/>
                                Get ShaCarris Looks
                            </label>
                            <button className={`${styleWomen.f_c_i_ButtonWite} ${styleWomen.f_c_i_Button}`}>Shop</button>
                        </div>
                    </div>
                </div>
        </div>

        <div className="textTranding w-[93%] mx-auto text-[26px]">Trending</div>

        <ListBannerSmall titleBanner="" categories={BannerSmallData1}/>

        <ListBannerSmall titleBanner="New And Featured" categories={BannerSmallData2}/>

        <TrendingList trendingItems={trendingDataWomen} titleList="Trending"/>

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