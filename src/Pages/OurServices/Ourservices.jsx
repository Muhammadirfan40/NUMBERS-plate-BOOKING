import React from 'react';
import ourser from "../../Images/ourser.jpeg";

function Ourservices() {
    return (

        <>
            <div className="bg-white rounded-lg p-8 shadow-md relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6 text-center md:text-start italic">
                    Discover Unique Plate Numbers That Mach <br /> Your Style
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-4">
                    <div>
                        <p className="text-gray-700 leading-relaxed text-lg">
                            Welcome to our innovative online platform, where buying and selling exclusive car numbers is made simple and convenient. Whether you're looking for a unique number plate to make a statement or need a specific combination for your vehicle, we offer a wide selection of personalized and rare car numbers to suit every preference.

                            Our user-friendly website allows you to easily browse, search, and purchase the perfect car number from a vast collection. We provide secure payment options and fast delivery to ensure a smooth transaction experience. With a dedicated customer support team, we are always here to assist you with any queries or concerns. Explore our listings today and find the number that makes your car truly one-of-a-kind!
                        </p>
                    </div>
                    <div>
                        <img src={ourser} alt="Our Services" className="rounded-lg shadow-lg w-full h-auto" />
                    </div>
                </div>
                <div className='text-end absolute right-8'>
                    <button className='border border-black rounded px-6 py-2 text-center bg-yellow-300 '>Join Now</button>
                </div>
            </div>

        </>

    );
}

export default Ourservices;
