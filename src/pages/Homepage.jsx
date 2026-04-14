import React, { Suspense } from 'react';
import Banner from '../Componetns/Homepage/Banner';
import Friends from '../Componetns/Homepage/Friends';


const Homepage = () => {
    return (
        <div className='w-9/12 mx-auto my-12'>
            <Banner/>
            <Suspense fallback={
                <div className="flex justify-center items-center min-h-screen">
             <span className="loading loading-bars loading-xl text-green-700"></span>
               </div>
                }>
                <Friends></Friends>
            </Suspense>
        </div>
    );
};

export default Homepage;