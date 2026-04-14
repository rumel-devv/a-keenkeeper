import React, { use } from 'react';
import FriendsCard from './FriendsCard';

const friendPromise = fetch('/data.json').then(res => res.json()) 

const Friends = () => {

    const friends = use(friendPromise)

    return (
        <div className='my-6 space-y-4'>
            <h2 className='text-xl'>Your friends</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
             {friends.map(friend => <FriendsCard key={friend.id} friend={friend} ></FriendsCard>)}
            </div>
        </div>
    );
};

export default Friends;