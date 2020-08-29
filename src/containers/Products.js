import React, { useContext } from "react";

import ProductItem from "../components/Products/ProductItem";
import { ProductsContext } from "../context/products-context";
import "./Products.css";

const Products = (props) => {
  const productObj = useContext(ProductsContext);
  const productList = useContext(ProductsContext).products;

  console.log("productObj is: ", productObj);
  console.log("productList.products is: ", productList);

  return (
    <ul className='products-list'>
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFav={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
