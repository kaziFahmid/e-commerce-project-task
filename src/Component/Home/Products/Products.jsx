import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
{products.map((product)=>{return <div className="card mt-12   bg-base-100 shadow-xl">
  <figure><img src={product.image}  className='img-fluid h-56'alt="Shoes" /></figure>
  <div className="card-body">


    <h2 className="card-title ">{product.title}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>})}

        </div>
      
    </div>
  )
}
