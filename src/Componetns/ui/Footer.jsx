import React from 'react';
import facebook from '../../assets/facebook.png'
import x from '../../assets/twitter.png'
import insta from '../../assets/instagram.png'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-12">
            <aside>
                <h1 className='text-4xl font-bold text-white'>KeenKeePer</h1>
                <p className="font-semibold">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
            </aside>
            <nav>
                <p className='font-semibold text-lg'>Social Links</p>

                <div className="grid grid-flow-col gap-4">
                    <img src={facebook} alt="facebook" className='w-6' />
                    <img src={x} alt="twitter" className='w-6' />
                    <img src={insta} alt="instagram" className='w-6' />
                </div>
            </nav>
            <div className="mt-3 border-t border-white/20 pt-5 flex flex-col md:flex-row justify-between gap-4 text-sm text-gray-200">
                <p>
                    Copyright © {new Date().getFullYear()} - All rights reserved
                </p>

                <div className="flex gap-5">
                    <p className="hover:underline cursor-pointer">Privacy Policy</p>
                    <p className="hover:underline cursor-pointer">Terms</p>
                    <p className="hover:underline cursor-pointer">Support</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;