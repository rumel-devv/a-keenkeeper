import React from 'react';
import { Link } from 'react-router';

const FriendsCard = ({friend}) => {

    return (
        <Link to={`/friendetails/${friend.id}`}>
            <div className='bg-[#f1ebeb74] text-center space-y-2 py-6'>
                <img className='w-20 h-20 rounded-full mx-auto' src={friend.picture} alt={friend.name}/>
                <h2 className='text-xl font-semibold'> {friend.name} </h2>
                <h3> {friend.days_since_contact}d ago </h3>
                 <h3 className="badge bg-[#CBFADB] text-black "> {friend.tags} </h3>
                 <br />
                 <div  className={`badge ${
                     friend.status === "ontrack"
                      ? "bg-[#244D3F] text-white"
                     : friend.status === "overdue"
                     ? "bg-red-500 text-white"
                     : friend.status === "almost_due"
                     ? "bg-yellow-500 text-white"
                     : ""
                     }`} > {friend.status} </div>
            </div>
        </Link>
    );
};

export default FriendsCard;