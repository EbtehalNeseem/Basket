import React, { useEffect, useState } from 'react'
import image from '../assets/Image.png'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserToken } from '../Store/userStore';
import api from '../js/axiosInstance';


export default function Register() {
  const setTokens = useUserToken((state) => state.setTokens);
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('')
  let navigate = useNavigate();
  

  function handelRegister(formValues) {
    setisLoading(true)
    api.post(`/auth/register`, formValues)
      .then((response) => {
        setisLoading(false)
        navigate('/login')
        setTokens(response?.data?.AccessToken, response?.data?.refreshToken);
        
      })
      .catch((response) => {
        setisLoading(false);
        setError(response?.response?.data?.message)
        
      })

  }

  let validationSchema = Yup.object().shape({
    Name: Yup.string().min(3, 'name minLength must be 3').max(10, 'name maxLength is 10').required('name is required'),
    Phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'Phone number is Invaild').required('Phone number is required'),
    Email: Yup.string().email('Email is Invalid').required('Email is required'),
    Password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/, 'Password is Invalid').required('Password is required'),
    role: Yup.string().oneOf(['Customer', 'Admin'], 'role must be Customer or Admin').required('role is required')
  })


  let formik = useFormik({
    initialValues: {
      Name: '',
      Phone: '',
      Email: '',
      Password: '',
      role: ''
    },
    validationSchema,
    onSubmit: handelRegister
  })


  return <>
    <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden">
        {/* Left side: Form */}
        <div className="w-full md:w-1/2 p-8 md:p-10">
          <h2 className="text-3xl font-semibold text-[#35AFA0] mb-6 text-center md:text-left">
            Sign Up
          </h2>

             {error ? <div class="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                {error}
              </div>
            </div>:''}


          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <input name='Name' value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="text"
              placeholder="Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"

            />


            {formik.errors.Name && formik.touched.Name ? <div class="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                {formik.errors.Name}
              </div>
            </div> : null}


            <input name='Phone' value={formik.values.Phone} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="tel"
              placeholder="Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"
            />

            {formik.errors.Phone && formik.touched.Phone ? <div class="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                {formik.errors.Phone}
              </div>
            </div> : null}

            <input name='Email' value={formik.values.Email} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"
            />

            {formik.errors.Email && formik.touched.Email ? <div class="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                {formik.errors.Email}
              </div>
            </div> : null}

            <input name='Password' value={formik.values.Password} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"
            />


            {formik.errors.Password && formik.touched.Password ? <div class="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                {formik.errors.Password}
              </div>
            </div> : null}

            <input name='role' value={formik.values.role} onChange={formik.handleChange} onBlur={formik.handleBlur}
              type="text"
              placeholder="Role"
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"
            />


            {formik.errors.role && formik.touched.role ? <div class="flex items-center p-2 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
              <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
              </svg>
              <span class="sr-only">Info</span>
              <div>
                {formik.errors.role}
              </div>
            </div> : null}

            <button
              type="submit"
              className="w-full bg-[#35AFA0] hover:bg-[#2C988B] text-white font-semibold py-3 rounded-full text-sm transition"
            >
              {isLoading ? <i class="fas fa-spinner fa-spin"></i> : 'Sign Up'}
            </button>

            <p className="text-center text-gray-600 text-sm mt-4">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#35AFA0] hover:text-[#2C988B] font-medium transition"
              >
                Log In
              </a>
            </p>
          </form>
        </div>

        {/* Right side: Illustration */}
        <div className="hidden md:flex w-1/2 bg-white items-center justify-center p-6">
          <img
            src={image}
            alt="shopping illustration"
            className="w-72 h-auto"
          />
        </div>
      </div>
    </section>

  </>
}
