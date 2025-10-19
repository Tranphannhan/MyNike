import Image from "next/image";

interface TrendingItem {
    image: string;
    name: string;
    category: string;
    price: string;
}

interface TrendingListProps {
    trendingItems: TrendingItem[];
    titleList: string;
}

export default function TrendingList({ trendingItems , titleList}: TrendingListProps) {
    return (
        <>
            <div className="arrow arrow2">
                <label>{titleList}</label>
                <div className="arrow_icon">
                    <div className="label_icon">Shop</div>
                    <div className="arrowleft arrowleft2">
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="arrowright arrowright2">
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>

            <div className="trending_relative">
                <div className="featured trending">
                    <div className="main_featured">
                        <div className="featured_container">
                            {trendingItems.map((item, index) => (
                                <div key={index} className="Trending_product">
                                    <Image width={500} height={500} src={item.image} alt={item.name} className="Trending_product_img" />
                                    <label>{item.name}</label>
                                    <label>{item.category}</label>
                                    <label>{item.price}</label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
