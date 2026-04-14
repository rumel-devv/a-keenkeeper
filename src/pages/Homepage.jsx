import React, { Suspense } from 'react';
import Banner from '../Componetns/Homepage/Banner';
import Friends from '../Componetns/Homepage/Friends';
import RippleLoader from '../components/nurui/ripple-loader';

const Homepage = () => {
    return (
        <div className='w-9/12 mx-auto my-12'>
            <Banner/>
            <Suspense fallback={RippleLoader}>
                <Friends></Friends>
            </Suspense>
        </div>
    );
};

export default Homepage;