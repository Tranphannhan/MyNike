import { ParamValue } from "next/dist/server/request/params";
import { ProductCardType } from "../types/product/productCardInterface";

// lấy tất cả sản phẩm
export async function getAllProducts(): Promise<ProductCardType[] | null>{
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try{
        const response = await fetch(`${BASE_URL}/products`);
        const dataProductsAll = response.json();
        return dataProductsAll
    }catch(error){
        console.error("Lỗi API khi lấy tất cả sản phẩm:", error);
        return null;
    }
}

// lấy chi tiết 1 sản phẩm
export async function getDetailProduct(id: ParamValue): Promise<ProductCardType | null>{
    const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    try{
        const response = await fetch(`${BASE_URL}/products/getById/${id}`);
        const dataProduct =await response.json();
            if(Array.isArray(dataProduct)&& dataProduct.length>0){
                return dataProduct[0]
            }
                return dataProduct
    }catch(error){
        console.error("Lỗi API khi lấy chi tiết 1 sản phẩm:", error);
        return null;
    }
}