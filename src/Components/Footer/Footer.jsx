import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black w-full font-inter mt-20'>
            <div className="max-w-[1440px] mx-10 lg:mx-auto grid lg:grid-cols-5 xl:grid-cols-5 md:grid-cols-3  grid-cols-1 py-16 justify-between gap-10 
            
            px-5 md:px-0 lg:px-5 xl:px-5 2xl:px-0
            
            ">
                <div className="text-left">
                    <h2 className='text-xl font-bold'>CS — Ticket System</h2>
                    <p className='text-sm text-gray-500 mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className=" text-left">
                    <h3 className='text-md font-medium'>Company</h3>
                    <ul className='text-sm text-gray-500 mt-5'>

                        <li className='mt-2'><a href="/">About Us</a></li>
                        <li className='mt-2'><a href="/">Our Mission</a></li>
                        <li className='mt-2'><a href="/">Contact Saled</a></li>
                    </ul>
                </div>

                <div className=" text-left">
                    <h3 className='text-md font-medium'>Services</h3>
                    <ul className='text-sm text-gray-500 mt-5'>
                        <li className='mt-2'><a href="/">Products & Services</a></li>
                        <li className='mt-2'><a href="/">Customer Stories</a></li>
                        <li className='mt-2'><a href="/">Download Apps</a></li>
                    </ul>
                </div>

                <div className=" text-left">
                    <h3 className='text-md font-medium'>Information</h3>
                    <ul className='text-sm text-gray-500 mt-5'>
                        <li className='mt-2'><a href="/">Privacy Policy</a></li>
                        <li className='mt-2'><a href="/">Terms & Conditions</a></li>
                        <li className='mt-2'><a href="/">Join Us</a></li>
                    </ul>
                </div>

                <div className=" text-left">
                    <h3 className='text-md font-medium'>Social Links</h3>
                    <ul className='text-sm text-gray-500 mt-5'>
                        <li className='mt-2'><a href="/"><div className='bg-white h-5 w-5 inline rounded-xl text-md  text-black mr-1 p-1'><i className="fa-brands fa-x-twitter"></i></div>  @CS — Ticket System</a></li>
                        <li className='mt-2'><a href="/"><div className='bg-white h-5 w-5 inline rounded-xl text-md  text-black mr-1 p-1'><i className="fa-brands fa-linkedin-in"></i></div>  @CS — Ticket System</a></li>
                        <li className='mt-2'><a href="/"><div className='bg-white h-5 w-5 inline rounded-xl text-md  text-black mr-1 p-1'><i className="fa-brands fa-facebook-f bg-white rounded-2xl text-sm"></i></div> @CS — Ticket System</a></li>
                        <li className='mt-2'><a href="/"><div className='bg-white h-5 w-5 inline rounded-xl text-md  text-black mr-1 p-1'><i className="fa-regular fa-envelope"></i></div> support@cst.com</a></li>
                    </ul>
                </div>
            
            </div>

            <div className=" max-w-[1440px]  mx-auto py-5">
                <div className="w-11/12 mx-auto h-[1px] bg-gray-700"></div>
                <p className='text-sm md:text-md text-[#fafafa] mt-5'>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;