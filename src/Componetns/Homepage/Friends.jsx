import React, { use } from 'react';

const friendPromise = fetch('/data.json').then(res => res.json()) 

const Friends = () => {

    const friends = use(friendPromise)
    console.log(friends);

    return (
        <div className='my-6 space-y-4'>
            <h2 className='text-xl'>Your friends</h2>
            <div>
             {friends.map(friend => <div> 
                       <h2> {friend.name} </h2>
                 </div>)}
            </div>
        </div>
    );
};

export default Friends;