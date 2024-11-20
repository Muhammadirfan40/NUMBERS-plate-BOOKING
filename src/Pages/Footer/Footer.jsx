import React from 'react';

function Footer() {
    return (

        <>
            <hr className='border border-black' />
            <div className="p-8 ">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
                    {/* Resources Section */}
                    <div>
                        <h2 className="text-xl py-3 font-bold">Resources</h2>
                        <ul className="space-y-2">
                            <li>Gift Cards</li>
                            <li>Find a Store</li>
                            <li>Membership</li>
                            <li>Site Feedback</li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h2 className="text-xl py-3 font-bold">Help</h2>
                        <ul className="space-y-2">
                            <li>Customer Support</li>
                            <li>FAQs</li>
                            <li>Live Chat</li>
                            <li>Site Feedback</li>
                        </ul>
                    </div>

                    {/* Company Section */}
                    <div>
                        <h2 className="text-xl py-3 font-bold">Company</h2>
                        <ul className="space-y-2">
                            <li>About Us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Site Feedback</li>
                        </ul>
                    </div>

                    {/* Promotions & Discounts Section */}
                    <div>
                        <h2 className="text-xl py-3 font-bold">Promotions & Discounts</h2>
                        <ul className="space-y-2">
                            <li>Seasonal Offers</li>
                            <li>Exclusive Deals</li>
                            <li>Loyalty Rewards</li>
                            <li>Site Feedback</li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="flex flex-wrap justify-start gap-4 text-sm text-gray-600">
                    <p>&copy; 2024, Inc. All rights reserved.</p>
                    <p><a href="#" className="hover:underline">Guide</a></p>
                    <p><a href="#" className="hover:underline">Terms of Sale</a></p>
                    <p><a href="#" className="hover:underline">Privacy Policy</a></p>
                </div>
            </div>
        </>

    );
}

export default Footer;
