import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';
import { TimelineContext } from '../context/Timelinecontext';

const Stats = () => {

     const {call, text,video} = useContext(TimelineContext )

        const data = [
  { name: 'Call', value: call.length, fill: '#264C3F' },
  { name: 'Text',value: text.length, fill: '#7F37F5' },
  { name: 'Video',value:video.length, fill: '#36A062' },
]

    return (
         <div className='w-full md:w-10/12 mx-auto flex flex-col justify-center my-8 px-2'>
        <h2 className=' text-3xl font-semibold mb-3'>Frinedship Analytics</h2>
       <div className='bg-[#e0d4d4aa]  py-10 px-4 rounded-xl'>
        <p className='text-xl font-semibold'>By interaction</p>
      <PieChart style={{ width: '100%', maxWidth: '300px',margin:'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
      <Pie 
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        fill="#8884d8"
        // padding angle is the gap between each pie slice
        paddingAngle={4}
        dataKey="value"
        isAnimationActive={true}
      />
        <Legend ></Legend>
        <Tooltip></Tooltip>
    </PieChart>
        </div>
        </div>
    );
};

export default Stats;