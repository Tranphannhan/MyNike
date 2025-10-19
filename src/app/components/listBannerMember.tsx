import Image from "next/image";

interface MemberProduct {
    image: string;
    title: string;
    description: string;
}

interface MemberBenefitsProps {
    memberProducts: MemberProduct[];
}

export default function MemberBenefits({ memberProducts }: MemberBenefitsProps) {
    return (
        <div className="main4">
            <div className="main4_container">
                <div className="arrow arrow4">
                    <label>Member Benefits</label>
                    <div className="arrow_icon">
                        <div className="arrowleft arrowleft4">
                            <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="arrowright arrowright4">
                            <i className="bi bi-chevron-right"></i>
                        </div>
                    </div>
                </div>

                <div className="product_relative">
                    <div className="main4_scroll">
                        <div className="products_main4">
                            {memberProducts.map((item, index) => (
                                <div key={index} className="product_4">
                                    <Image src={item.image} alt={item.title} width={500} height={500}/>
                                    <div className="product_4_contain">
                                        <label>{item.title}</label>
                                        <label>{item.description}</label>
                                        <button>Shop</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
