import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import {  useLocation, useNavigate } from 'react-router-dom'
export default function Signup() {
    let navigate = useNavigate()
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const { user, createUser } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const phone = e.target.number.value;

    const phoneNumberPattern = /^(?:\+?88)?01[3-9]\d{8}$/; // Regex pattern for Bangladeshi phone number

    if (!phoneNumberPattern.test(phone)) {
      setPhoneNumberError('Please enter a valid Bangladeshi phone number');
      return;
    } else {
      setPhoneNumberError('');
      // Proceed with the signup process or other actions
    }

    const users = {
      email,
      phone,
      role:"user"
    };


  createUser( email,password)
  .then((result) => {
    // Signed in 
    const user = result.user;
    console.log(user)
    axios.post('/allusers',users)
    .then(res=>console.log(res))
    navigate(from, { replace: true })

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });




    
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>

            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

             
            </div>
          </div>

          <div>
            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
              Phone number
            </label>
            <div className="mt-2">
              <input
                id="number"
                name="number"
                type="number"
                autoComplete="number"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
               {phoneNumberError && (
                <p className="mt-2 text-xs text-red-500">{phoneNumberError}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign up
            </button>
          </div>
        </form>

        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}
