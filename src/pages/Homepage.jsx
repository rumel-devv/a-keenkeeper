import React from 'react';
import Banner from '../Componetns/Homepage/Banner';
import Friends from '../Componetns/Homepage/Friends';

const Homepage = () => {
    return (
        <div className='w-9/12 mx-auto my-12'>
            <Banner></Banner>
            <Friends></Friends>
        </div>
    );
};

export default Homepage;