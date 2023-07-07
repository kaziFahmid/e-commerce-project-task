import axios from 'axios'
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function AddaCustomer() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const role = e.target.role.value;
    
        axios
          .post('/allusers', {
            email,
            phone,
            role,
          })
          .then((response) => {
            if(response.insertedId){
                toast("New Customer has been added");
            };
     
          })
          
      };
  return (
    <div className="flex justify-center items-center  mt-28">
        <ToastContainer />
    <form onSubmit={handleSubmit} className="bg-white w-3/4 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
    
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
 
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter phone number"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
          Role
        </label>
        <input
          type="text"
          name="role"
          id="role"
       
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter role"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Customer
        </button>
      </div>
    </form>
  </div>
  )
}
