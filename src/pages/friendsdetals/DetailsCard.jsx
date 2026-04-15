import React, { useContext } from 'react';
import { BiSolidAlarmSnooze } from 'react-icons/bi';
import { FaVideo } from 'react-icons/fa';
import { LuArchiveRestore } from 'react-icons/lu';
import { MdAddIcCall, MdTextsms } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { TimelineContext } from '../../context/Timelinecontext';

const DetailsCard = ({expectedFriend}) => {


    const {handleCall,handleText,handleVideo} = useContext(TimelineContext)
       
    return (
        <div className=' w-11/12 lg:w-9/12 mx-auto my-5 flex flex-col md:flex-row justify-between space-y-4'>
         <div className='w-full md:w-4/12 lg:w-3/12 space-y-3'>
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
            <div className='space-y-2'>
                <button className='btn w-full'><BiSolidAlarmSnooze/> Snooze 2 weeks </button>
                <button className='btn w-full'><LuArchiveRestore/> Archive</button>
                <button className='btn w-full text-red-600'><RiDeleteBin6Line/> Delete</button>
            </div>
            </div>

            <div className='md:w-7/12 lg:w-8/12 space-y-4'>
            
                <div className='grid grid-cols-1 gap-3 md:grid-cols-3'>
              <div className='text-center bg-[#f1ebeb74] py-8 rounded-lg'>
                    <h3 className='text-2xl font-semibold'>62</h3>
                    <p>Days Since Contact</p>
                </div>
                <div className='text-center bg-[#f1ebeb74] py-8 rounded-lg'>
                    <h3 className='text-2xl font-semibold'>30</h3>
                    <p>Goal (Days)</p>
                </div>
                <div className='text-center bg-[#f1ebeb74] py-8 rounded-lg'>
                    <h3 className='text-2xl font-semibold'>06 JUNE 2026</h3>
                    <p>Next Due</p>
                </div>
                </div>
                <div className='bg-[#f1ebeb74] w-full py-10 px-4 flex justify-between'>
                        <div className='space-y-2'>
                            <h2 className='text-xl'>Realtionship goal</h2>
                            <p>Connect every <span className='font-semibold'>30 days</span></p>
                        </div>
                        <div>
                            <button className='px-3 py-0.5 rounded-sm bg-[#244D3F] text-md text-white'>edit</button>
                        </div>
                </div>
                <div className='bg-[#f1ebeb74] w-full py-10 px-4 space-y-3 '>
                    <h2 className='text-xl'>Quick check in</h2>
                    <div className='grid grid-cols-3 gap-3'>

                        <div onClick={() => handleCall(expectedFriend)} className='bg-[#ffffff] p-6 flex flex-col items-center rounded-2xl'>
                            <MdAddIcCall />
                             Call
                        </div>
                        <div onClick={() => handleText(expectedFriend)} className='bg-[#ffffff] p-6 flex flex-col items-center rounded-2xl'>
                            <MdTextsms/>
                             Text
                        </div>
                        <div onClick={() => handleVideo(expectedFriend)} className='bg-[#ffffff] p-6 flex flex-col items-center rounded-2xl'>
                            <FaVideo/>
                             Video
                        </div>
                      
                        </div>
                </div>



            </div>
           
                
            </div>  

        
    );
};

export default DetailsCard;