import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Product } from '~/interface/interface';



const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Gọi API từ JSON Server
    axios.get<Product[]>('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='mx-auto w-[1170px] font-bold my-[20px]'>
      <h2 className='text-center text-[24px]'>SẢN PHẨM HOT NHẤT</h2>
      <ul className='grid grid-cols-5'>
        {products
          .filter(product => product.category === 'phone')
          .map(product => (
            <li key={product.id}>
              <h3>{product.brand} - {product.model}</h3>
              <p>Price: ${product.price}</p>
              <img src={product.img}/>
              <ul>
                <li>Screen Size: {product.specs?.screenSize}</li>
                <li>Camera: {product.specs?.camera}</li>
                <li>Storage: {product.specs?.storage}</li>
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ProductList;
