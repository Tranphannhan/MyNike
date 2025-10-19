import React, { JSX } from "react";
import { ProductCardType } from "../types/product/productCardInterface";
import { formatCurrency } from "../utils/format";


export default function ProductCard({ products }: { products: ProductCardType[] }): JSX.Element { 
    return (
      <>
        {products.map((product, index) => (
            <div className="child_product" key={index} >
              <a href={`detail/${product._id}`}>
              <img 
                src={`http://localhost:3001/images/${product.img}`} 
                alt={product.name} 
              />
              </a>
              <label>{product.name}</label>
              <label>{product.category}</label>
              <label>{product.description}</label>
              <label>{formatCurrency(product.price)}</label>
            </div>
        ))}
      </>
    );
  }
  