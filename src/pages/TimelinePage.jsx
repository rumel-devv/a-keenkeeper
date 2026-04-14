import { useContext } from "react";
import { TimelineContext } from "../context/Timelinecontext";
import videoImg from '../assets/video.png'
const TimelinePage = () => {
  const { call, text, video } = useContext(TimelineContext);

  return (
    <div className="p-5 w-9/12 mx-auto">
      <h1 className="text-xl font-bold">Timeline</h1>

      {/* CALL */}
       { call.map((item, i) => (
          <div key={i} className="p-3 bg-white my-2 rounded">
            📞 Call with {item.name}
          </div>
        ))}
      

      {/* TEXT */}
    {
        text.map((item, i) => (
          <div key={i} className="p-3 bg-white my-2 rounded">
            💬 Text with {item.name}
          </div>
        ))
   }

      {/* VIDEO */}
    
      {  video.map((item, i) => (
          <div key={i} className="p-3 bg-white my-2 rounded flex items-center gap-6">
            <div>
             <img src={videoImg} alt="" />
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