import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';

export default function Products() {
    const [products, setProducts] = useState([]);

const fetchData = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
    useEffect(() => {
     
  
      fetchData();
    }, []);
  return (
    <div>
        <div className='grid  md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-28 container mx-auto'>
{products.map((product)=>{return <ProductCard {...product}/>})}

        </div>
      
    </div>
  )
}
