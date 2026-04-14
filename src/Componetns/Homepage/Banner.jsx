import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className='text-center space-y-3 py-8'>
                <h2 className='text-4xl text-[#1F2937] font-bold'>Friends to keep close in your life</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture therelationships that matter most.</p>
                <button className='btn bg-[#244D3F] text-white'>+ Add a Friend </button>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                <div className='text-center bg-[#f1ebeb74] py-8 rounded-lg'>
                    <h3 className='text-3xl font-semibold'>10</h3>
                    <p>Total friends</p>
                </div>
                <div className='text-center bg-[#f1ebeb74] py-8 rounded-lg'>
                    <h3 className='text-3xl font-semibold'>3</h3>
                    <p>On track</p>
                </div>
                <div className='text-center bg-[#f1ebeb74] py-8 rounded-lg'>
                    <h3 className='text-3xl font-semibold'>6</h3>
                    <p>Need Attention</p>
                </div>
                <div className='text-center bg-[#f1ebeb74] py-8 rounded-lg'>
                    <h3 className='text-3xl font-semibold'>12</h3>
                    <p>Interactions This Month</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;