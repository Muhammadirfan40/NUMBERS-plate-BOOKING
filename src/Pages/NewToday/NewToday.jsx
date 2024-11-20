import React from 'react';
import numberplate from '../../Images/numberplate.jpeg';
import Newtodaybgimg from '../../Component/Backgroundimg/Newtodaybgimg';

const plateData = [
    {
        id: 1,
        views: 435,
        likes: 85,
        description: 'Private Plate 197500',
        category: 'Personal',
        status: 'Active',
        transferBy: 'Irfan',
        originalPrice: '70,000 Q.T',
        discountedPrice: '50,000 Q.T',
        time: '2 hours ago',
    },
    {
        id: 2,
        views: 520,
        likes: 120,
        description: 'Private Plate 123456',
        category: 'Commercial',
        status: 'Active',
        transferBy: 'Ahmed',
        originalPrice: '90,000 Q.T',
        discountedPrice: '75,000 Q.T',
        time: '3 hours ago',
    },
    {
        id: 3,
        views: 300,
        likes: 65,
        description: 'Private Plate 654321',
        category: 'Personal',
        status: 'Inactive',
        transferBy: 'Sara',
        originalPrice: '80,000 Q.T',
        discountedPrice: '60,000 Q.T',
        time: '1 hour ago',
    },

];

function NewToday() {
    return (
        <>
            <div className='mb-4'>

                <h1 className="text-center text-white text-6xl p-3">NEW TODAY</h1>


                <div className="relative">

                    <Newtodaybgimg />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 py-8 px-2 absolute top-0 left-0 ">

                        {plateData.map((plate) => (
                            <div key={plate.id} className="bg-yellow-400 rounded-lg shadow-lg p-4">
                                <div className="flex justify-between items-center mb-3">
                                    <h2 className="text-base font-semibold">Plate Number</h2>
                                    <div className="flex gap-2">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-medium">{plate.views}</span>
                                            <span>
                                                <i className="ri-eye-fill"></i>
                                            </span>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-medium">{plate.likes}</span>
                                            <span>
                                                <i className="ri-heart-3-line"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-md flex items-center justify-center mb-3">
                                    <img
                                        src={numberplate}
                                        alt="Qatar Plate"
                                        className="w-full h-auto"
                                    />
                                </div>

                                <div className="mb-3">
                                    <p className="text-gray-700 font-medium">{plate.description}</p>
                                </div>

                                <div className="flex justify-between items-center mb-3">
                                    <div>
                                        <span className="text-sm bg-[#F4DBDB] rounded-full px-3 py-1">
                                            {plate.category}
                                        </span>
                                    </div>
                                    <div className="flex flex-col text-center">
                                        <span className="text-sm text-[#92905F] font-bold">
                                            {plate.status}
                                        </span>
                                        <span className="text-black text-[8px]">
                                            Transfer by {plate.transferBy}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-center mb-3">
                                    <button className="text-black border border-black px-4 py-2 rounded-lg text-xs flex gap-2">
                                        <span>
                                            <i className="ri-shopping-cart-line"></i>
                                        </span>
                                        <p>For Sale</p>
                                    </button>
                                    <button className="text-black border border-black px-4 py-2 rounded-lg text-xs flex gap-2">
                                        <span>
                                            <i className="ri-time-line"></i>
                                        </span>
                                        <p>{plate.time}</p>
                                    </button>
                                </div>

                                <div className="text-center flex items-center gap-3 justify-end">
                                    <p className="text-black line-through text-[10px]">
                                        {plate.originalPrice}
                                    </p>
                                    <p className="text-lg font-bold text-black">
                                        {plate.discountedPrice}
                                    </p>
                                </div>
                            </div>
                        ))}

                    </div>

                </div>

            </div>

        </>
    );
}

export default NewToday;
