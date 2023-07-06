import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react'
import useProducts from '../../../hooks/useProducts';

export default function AddProduct() {
    const[refetch,products]=useProducts()
     
    const handleSubmit = (e) => {
        e.preventDefault();
      let title=e.target.title.value
      let image=e.target.picture.value
      let description=e.target.description.value
      let category=e.target.category.value
        const product={
            title,
            image,
            description,
            category}

            axios.post('/products',product)
            .then(res=>{
               
                if(res.insertedId){
                    refetch()
                }
            })
      
      };
  return (
    <div className="flex mt-12 justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className=" md:w-96 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            htmlFor="title"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter title"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="picture"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Picture
          </label>
          <input
            type="text"
            id="picture"
            name="picture"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter picture URL"
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label
            htmlFor="category"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter category"
            required
          />
        </div>

        <div className="flex items-center justify-center">
        <button className="btn btn-neutral">Submit</button>
        </div>
      </form>
    </div>
  )
}
