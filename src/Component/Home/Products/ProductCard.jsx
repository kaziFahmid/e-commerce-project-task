import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

export default function ProductCard({ image, title, price, description, _id }) {
  const { refetch, data: carts = [] } = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/carts');
      return res.json();
    },
  });

  let handleAddToCart = (product) => {
    // Check if the product already exists in the cart
    const isProductExists = carts.some((cartItem) => cartItem.id === _id);

    if (isProductExists) {
      alert('Product already exists in the cart.');
      return;
    }

    axios.post('/carts', product).then((res) => {
      console.log(res);
      // Refresh the cart data
      refetch();
    });
  };

  return (
    <div className="card mt-12 bg-base-100 shadow-xl">
      <figure>
        <img src={image} className="img-fluid h-56" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>Price: {price}</p>
        <div className="card-actions justify-center mt-4">
          <button
            className="btn btn-primary"
            onClick={() =>
              handleAddToCart({ image, title, price, description, id: _id })
            }
          >
            Add To Cart
          </button>
          <Link to={`/productdetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
