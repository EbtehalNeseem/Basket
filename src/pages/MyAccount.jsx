import React, { useEffect, useState } from 'react'
import image from '../assets/Image.png'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUserToken } from '../Store/userStore';
import api from '../js/axiosInstance';


export default function MyAccount() {
    const setTokens = useUserToken((state) => state.setTokens);
    const [isLoading, setisLoading] = useState(false);
    const [message, setmessage] = useState('')
    let navigate = useNavigate();
    let {accessToken , userId} = useUserToken();


    
function handelRegister(formValues) {

    setisLoading(true);

    const url = userId ? `/auth/update-profile/${userId}` : `/auth/update-profile`;

    api.put(url, formValues, {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    })
    .then((response) => {
        setisLoading(false);
        setmessage(response?.data?.message)
        
        
    })
    .catch((error) => {
        setisLoading(false);
        console.error(error.response ? error.response.data : error.message);
    });
}


    let validationSchema = Yup.object().shape({
        Name: Yup.string().min(3, 'name minLength must be 3').max(10, 'name maxLength is 10').required('name is required'),
        Phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'Phone number is Invaild').required('Phone number is required'),
        Email: Yup.string().email('Email is Invalid').required('Email is required'),

    })


    let formik = useFormik({
        initialValues: {
            Name: '',
            Phone: '',
            Email: '',

        },
        validationSchema,
        onSubmit: handelRegister
    })


    return <>
        <section className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-3xl bg-white shadow-lg rounded-2xl flex flex-col md:flex-row overflow-hidden">

                {/* Left Side: Form */}
                <div className="w-full md:w-1/2 pb-8 pr-8 pl-8  md:p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-[#35AFA0] mb-6 text-center md:text-left">
                        Update Profile
                    </h2>
                    {message ? <div class="flex items-center p-2 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
                        <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                        </svg>
                        <span class="sr-only">Info</span>
                        <div>
                            {message}
                        </div>
                    </div> : ''}

                    <form className="space-y-5" onSubmit={formik.handleSubmit}>
                        {/* Name */}
                        <div>
                            <input
                                name="Name"
                                value={formik.values.Name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                placeholder="Full Name"
                                className="w-full px-5 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"
                            />
                            {formik.errors.Name && formik.touched.Name && (
                                <div className="flex items-center p-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                                    <svg
                                        className="shrink-0 inline w-4 h-4 me-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Z" />
                                    </svg>
                                    {formik.errors.Name}
                                </div>
                            )}
                        </div>

                        {/* Phone */}
                        <div>
                            <input
                                name="Phone"
                                value={formik.values.Phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full px-5 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"
                            />
                            {formik.errors.Phone && formik.touched.Phone && (
                                <div className="flex items-center p-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                                    <svg
                                        className="shrink-0 inline w-4 h-4 me-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Z" />
                                    </svg>
                                    {formik.errors.Phone}
                                </div>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                name="Email"
                                value={formik.values.Email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-5 py-3 border border-gray-300 rounded-full bg-gray-50 text-gray-900 text-sm focus:ring-2 focus:ring-[#2C988B] focus:border-[#2C988B] outline-none transition"
                            />
                            {formik.errors.Email && formik.touched.Email && (
                                <div className="flex items-center p-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                                    <svg
                                        className="shrink-0 inline w-4 h-4 me-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Z" />
                                    </svg>
                                    {formik.errors.Email}
                                </div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#35AFA0] hover:bg-[#2C988B] text-white font-semibold py-3 rounded-full text-sm transition flex items-center justify-center gap-2"
                        >
                            {isLoading ? (
                                <i className="fas fa-spinner fa-spin"></i>
                            ) : (
                                'Update Profile'
                            )}
                        </button>
                    </form>
                </div>

                {/* Right Side: Illustration */}
                <div className="hidden md:flex md:w-1/2 bg-white items-center justify-center">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                        alt="Profile update"
                        className="w-64 h-64 object-contain drop-shadow-lg"
                    />
                </div>
            </div>
        </section>



    </>
}
