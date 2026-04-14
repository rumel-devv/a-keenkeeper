import { createContext, useState } from "react";
import { toast } from "react-toastify";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (friend) => {
    setCall(prev => [...prev, { ...friend, time: new Date() }]);
    toast.success(`Called ${friend.name}  successfully`)
  };

  const handleText = (friend) => {
    setText(prev => [...prev, { ...friend, time: new Date() }]);
    toast.success(`Text ${friend.name}  successfully`)
  };

  const handleVideo = (friend) => {
    setVideo(prev => [...prev, { ...friend, time: new Date() }]);
    toast.success(`Video called ${friend.name}  successfully`)
  };

  const data = {
    call,
    text,
    video,
    handleCall,
    handleText,
    handleVideo
  };

  return (
    <TimelineContext.Provider value={data}>
      {children}
    </TimelineContext.Provider>
  );
};

export default TimelineProvider;