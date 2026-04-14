import React, { use } from 'react';
import { useParams } from 'react-router';
import DetailsCard from './DetailsCard';

const friendPromise = fetch('/data.json').then(res => res.json()) 


const FriendsDtls = () => {

    const friends = use(friendPromise)
     const {id} = useParams()
     
     const expectedFriend = friends.find(frnd => frnd.id  === Number(id))
    

    return (
        <div>
            <DetailsCard expectedFriend={expectedFriend} ></DetailsCard>
        </div>
    );
};

export default FriendsDtls;