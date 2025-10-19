import Image from "next/image";
import React from "react";

interface AgeCategory {
  ageRange: string;
  title: string;
  imageUrl: string;
}

interface SizeSelectionProps {
  categories: AgeCategory[];
}

const ListBannerSizeKids: React.FC<SizeSelectionProps> = ({ categories }) => {
  return (
    <div className="w-[85%] mx-auto">
      <label className="text-[26px] mb-6">Sizes for All</label>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[10px]">
        {categories.map((category, index) => (
          <div key={index} className="relative">
            <Image
              width={500}
              height={500}
              src={category.imageUrl}
              alt={category.title}
              className="w-full h-auto object-cover aspect-[7.5/10] "
            />
            <div className="absolute bottom-[7%] left-[7%] text-white">
              <p className="text-white mb-0">{category.ageRange}</p>
              <h3 className="text-lg font-bold">{category.title}</h3>
              <button className="mt-2 px-[15px] py-[5px] bg-white text-black text-sm" style={{borderRadius:100}}>
                Shop
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListBannerSizeKids;
