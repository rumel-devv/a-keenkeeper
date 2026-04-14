import { useContext } from "react";
import { TimelineContext } from "../context/Timelinecontext";
import videoImg from '../assets/video.png'
import callImg from '../assets/call.png'
import textImg from '../assets/text.png'


const TimelinePage = () => {
  const { call, text, video } = useContext(TimelineContext);

  return (
    <div className="py-6 w-11/12 md:w-9/12 mx-auto">
      <h1 className="text-xl font-bold">Timeline</h1>

       { call.map((item, i) => (
          <div key={i} className="p-4 bg-[#f1ebeb74] my-2 rounded flex items-center gap-6">
             <div>
             <img src={callImg} alt="call image" />
            </div>
              <div>
                <h2> <span className="text-xl font-semibold">Call with</span> {item.name}</h2>
                <p>{new Date().toLocaleDateString("en-GB")}</p>
            </div>
          </div>
        ))}
      
      { text.map((item, i) => (
          <div key={i} className="p-4 bg-[#f1ebeb74] my-2 rounded flex items-center gap-6">
            <div>
             <img src={textImg} alt="video image" />
            </div>
              <div>
                <h2> <span className="text-xl font-semibold">Text with</span> {item.name}</h2>
                <p>{new Date().toLocaleDateString("en-GB")}</p>
            </div>
          </div>
        ))
   }

      {  video.map((item, i) => (
          <div key={i} className="p-4 bg-[#f1ebeb74] my-2 rounded flex items-center gap-6">
            <div>
             <img src={videoImg} alt="video image" />
            </div>
            <div>
                <h2> <span className="text-xl font-semibold">Video with</span> {item.name}</h2>
                <p>{new Date().toLocaleDateString("en-GB")}</p>
            </div>
            
          </div>
         ))
       }
    </div>
  );
};

export default TimelinePage;