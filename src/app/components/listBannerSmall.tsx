import Image from "next/image";

interface categoryType{
    title:string;
    image:string;
}

interface categories{
    categories: categoryType[];
    titleBanner: string;
}

const ListBannerSmall = ({categories, titleBanner}: categories) => {
    if(!categories) return;
  return (
    <div className="w-[85%] mx-auto mb-[80px]" >
        <label className="text-[26px] mb-[25px]">{titleBanner ?? ''}</label>
    <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-[10px]">
      {categories.map((category, index) => (
        <div key={index} className="relative group">
          <Image
            src={category.image}
            alt={category.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover aspect-[7.5/10]"
          />
          <p className="mt-3 text-start text-lg font-medium">{category.title}</p>
        </div>
      ))}
    </div>
    </div>
   
  );
};

export default ListBannerSmall;
