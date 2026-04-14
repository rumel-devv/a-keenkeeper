import React, { Suspense } from 'react';
import Banner from '../Componetns/Homepage/Banner';
import Friends from '../Componetns/Homepage/Friends';

const Homepage = () => {
    return (
        <div className='w-9/12 mx-auto my-12'>
            <Banner/>
            <Suspense fallback={<span className="loading loading-spinner text-error"></span>}>
                <Friends></Friends>
            </Suspense>
        </div>
    );
};

export default Homepage;