import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from "../../Images/Logo.png";
import Backgroundimg from "../../Component/Backgroundimg/Backgroundimg"
import NewToday from '../../Pages/NewToday/NewToday';
import Ourservices from '../OurServices/Ourservices';
import Feedbackus from '../Feedbackus/Feedbackus';
import Footer from '../Footer/Footer';

const HomePage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for category dropdown

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleCategoryDropdown = () => {
        setIsCategoryOpen(!isCategoryOpen);
    };

    return (
        <>
            <div className='px-4 bg-gray-300'>

                <nav className="bg-gray-300 p-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">

                        {/* Logo */}
                        <div className="h-28 w-64">
                            <img src={logo} alt="logo" className='' />
                        </div>

                        <div className='flex md:flex-col gap-2 mt-12'>
                            {/* Desktop Menu */}
                            <div className="hidden md:flex gap-4 md:ga text-black text-3xl font-normal">
                                <a href="#">NORMAL</a>
                                <a href="#about" >SELVER</a>
                                <a href="#services" >GOLDEN</a>
                                <a href="#contact" >VIP</a>


                                {/* Category Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={toggleCategoryDropdown}
                                        className="text-black flex items-center gap-2"
                                    >
                                        CATEGORY
                                        <i className={`ri-arrow-down-s-line text-lg transform ${isCategoryOpen ? 'rotate-180' : ''}`}></i>
                                    </button>
                                    {isCategoryOpen && (
                                        <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg z-10 text-xl">
                                            <a href="#category1" className="block px-4 py-2 text-black hover:bg-gray-100">
                                                Category 1
                                            </a>
                                            <a href="#category2" className="block px-4 py-2 text-black hover:bg-gray-100">
                                                Category 2
                                            </a>
                                            <a href="#category3" className="block px-4 py-2 text-black hover:bg-gray-100">
                                                Category 3
                                            </a>
                                        </div>
                                    )}
                                </div>


                            </div>

                            {/* Search Input */}
                            <div className="relative mt-2 md:mt-0">
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="p-2 pl-10 rounded-md  text-black focus:outline-none focus:ring-2 focus:ring-black w-full"
                                />
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 017-7zM14 14l4 4" />
                                </svg>
                            </div>
                        </div>

                        {/* Hamburger Icon */}
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu} className="text-white focus:outline-none">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        <div className='flex md:flex-col gap-2'>

                            <div className='flex gap-6 mt-2 mb-8 justify-center'>
                                <button className='border border-black rounded text-center items-center text-xl font-semibold px-2 py-1  '>SELL +</button>
                                <button className=' rounded text-center items-center text-xl font-semibold px-2 py-1 bg-yellow-300'>Order</button>
                            </div>

                            <div className='flex gap-4 justify-between'>
                                <button>  <i class="ri-heart-3-line text-4xl"></i></button>
                                <button><i class="ri-notification-line text-4xl "></i></button>
                                <button> <i class="ri-mail-fill  text-4xl "></i></button>
                                <Link to="/loginpage" className='rounded border-black text-xl  py-2 px-3 bg-white'>Sign In</Link>
                            </div>

                        </div>



                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden bg-gray-800 p-4 space-y-4">
                            <a href="#" className="text-white hover:text-gray-400">Home</a>
                            <a href="#about" className="text-white hover:text-gray-400">About</a>
                            <a href="#services" className="text-white hover:text-gray-400">Services</a>
                            <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
                        </div>
                    )}
                </nav>


                <div className="relative">

                    {/* Background Image */}
                    <Backgroundimg />

                    {/* Text Overlay */}
                    <div className="absolute top-8 left-8 text-start text-white space-y-6">
                        {/* Text Content */}
                        <div className="flex flex-col gap-4">
                            <h1 className="text-8xl font-bold">Car Number Plate</h1>
                            <h3 className="text-6xl font-semibold">PAKISTAN 8899</h3>
                            <h5 className="text-6xl font-medium">&160</h5>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4">
                            <a
                                href="#"
                                className="bg-white text-black py-2 px-4 rounded hover:bg-blue-600"
                            >
                                Contact
                            </a>
                            <a
                                href="#"
                                className="bg-white text-black py-2 px-4 rounded hover:bg-yellow-500"
                            >
                                Book Now
                            </a>
                        </div>
                    </div>

                </div>

                <NewToday />
                <Ourservices />
                <Feedbackus />
                <Footer />

            </div>

        </>
    )
}

export default HomePage;
