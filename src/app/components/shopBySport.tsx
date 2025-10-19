import Image from "next/image";

interface Sport {
    image: string;
    name: string;
}

interface ShopBySportProps {
    sports: Sport[];
}

export default function ShopBySport({ sports }: ShopBySportProps) {
    return (
        <>
            <div className="arrow arrow3">
                <label>Shop By Sport</label>
                <div className="arrow_icon">
                    <div className="arrowleft arrowleft3">
                        <i className="fa-solid fa-angle-left"></i>
                    </div>
                    <div className="arrowright arrowright3">
                        <i className="bi bi-chevron-right"></i>
                    </div>
                </div>
            </div>

            <div className="main3_relative">
                <div className="main3">
                    <div className="product_main3s">
                        {sports.map((sport, index) => (
                            <div key={index} className="product_main3">
                                <Image width={500} height={500} src={sport.image} alt={sport.name} />
                                <button>{sport.name}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
