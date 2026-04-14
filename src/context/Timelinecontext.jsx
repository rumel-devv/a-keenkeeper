import { createContext, useState } from "react";

export const TimelineContext = createContext();

const TimelineProvider = ({ children }) => {
  const [call, setCall] = useState([]);
  const [text, setText] = useState([]);
  const [video, setVideo] = useState([]);

  const handleCall = (friend) => {
    setCall(prev => [...prev, { ...friend, time: new Date() }]);
  };

  const handleText = (friend) => {
    setText(prev => [...prev, { ...friend, time: new Date() }]);
  };

  const handleVideo = (friend) => {
    setVideo(prev => [...prev, { ...friend, time: new Date() }]);
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