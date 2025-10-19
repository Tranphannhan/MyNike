import Image from "next/image";

interface BannerItem {
    image: string;
    title: string;
    actionText: string;
}

interface ListBannerProps {
    banners: BannerItem[];
    titleList: string;
}

export default function ListBanner({ banners, titleList }: ListBannerProps) {
    return (
        <>
            <div className="arrow">
                <label>{titleList}</label>
                <div className="arrow_icon">
                    <div className="arrowleft">
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="arrowright">
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>

            <div className="feature_relative">
                <div className="featured feature1">
                    <div className="main_featured">
                        <div className="featured_container">
                            {banners.map((item, index) => (
                                <div key={index} className="featured_product">
                                    <Image width={500} height={500} src={item.image} alt={item.title} className="featured_product_img" />
                                    <label>{item.title}</label>
                                    <label>{item.actionText}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
