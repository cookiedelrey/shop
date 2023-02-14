import React, { useEffect } from 'react';
import { useProducts } from '../../ProductContextProvider';
import ProductCard from './ProductCard';
import './ProductList.css'

const ProductList = ({searchTerm}) => {
  const { products, getProducts } = useProducts();
  

  useEffect(() => {
    getProducts();
  }, []);
  
  useEffect(() => {
    if (!searchTerm) {
      getProducts();
    }
  }, [searchTerm]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <p className='main-title'>
        Картины эпохи Возрождения
        </p>
    <div className='list'>
       {products ? (
       filteredProducts.map((item) => <ProductCard key={item.id} item={item} />)
      ) : (
        <></>
      )}
    </div>
    </>
  );
};

export default ProductList;
