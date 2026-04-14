import React from 'react';
import { BiSolidAlarmSnooze } from 'react-icons/bi';
import { LuArchiveRestore } from 'react-icons/lu';
import { RiDeleteBin6Line } from 'react-icons/ri';

const DetailsCard = ({expectedFriend}) => {
    return (
        <div className=' w-11/12 lg:w-9/12 mx-auto my-5'>
         <div className='w-full md:w-4/12 lg:w-3/12 space-y-3'>
            <div>
            <div className='bg-[#f1ebeb74] text-center space-y-2 py-6'>
                <img className='w-20 h-20 rounded-full mx-auto' src={expectedFriend.picture} alt={expectedFriend.name}/>
                <h2 className='text-xl font-semibold'> {expectedFriend.name} </h2>
                 <div  className={`badge ${
                     expectedFriend.status === "ontrack"
                      ? "bg-[#244D3F] text-white"
                     : expectedFriend.status === "overdue"
                     ? "bg-red-500 text-white"
                     : expectedFriend.status === "almost_due"
                     ? "bg-yellow-500 text-white"
                     : ""
                     }`} > {expectedFriend.status} </div>
                     <br />
                 <h3 className="badge  bg-[#CBFADB] text-black "> {expectedFriend.tags} </h3>
                 <h2> {expectedFriend.bio} </h2>
                 <h3>Prefferrd: {expectedFriend.email} </h3>

            </div>
            </div>

            <div className='space-y-2'>
                <button className='btn w-full'><BiSolidAlarmSnooze/> Snnoze 2 weeks </button>
                <button className='btn w-full'><LuArchiveRestore/> Archive</button>
                <button className='btn w-full text-red-600'><RiDeleteBin6Line/> Delete</button>
            </div>

            </div>


        </div>
    );
};

export default DetailsCard;