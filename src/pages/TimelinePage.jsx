import { useContext, useState } from "react";
import { TimelineContext } from "../context/Timelinecontext";

import videoImg from "../assets/video.png";
import callImg from "../assets/call.png";
import textImg from "../assets/text.png";

const TimelinePage = () => {
  const { call, text, video } = useContext(TimelineContext);

  const [filter, setFilter] = useState(""); 

  return (
    <div className="py-6 w-11/12 md:w-9/12 mx-auto">

      <div className="flex items-center gap-6 mb-4">
        <h1 className="text-xl font-bold">Timeline</h1>

        <div className="dropdown dropdown-center">
          <div tabIndex={0} role="button" className="btn m-1">
          Filter  {filter} ⬇️
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow"
          >
            <li onClick={() => setFilter("call")}><a>Call</a></li>
            <li onClick={() => setFilter("text")}><a>Text</a></li>
            <li onClick={() => setFilter("video")}><a>Video</a></li>
          </ul>
        </div>
      </div>

      {(filter === "" || filter === "call") &&
        call.map((item, i) => (
          <div
            key={"call-" + i}
            className="p-4 bg-[#f1ebeb74] my-2 rounded flex items-center gap-6"
          >
            <img src={callImg} alt="call" className="w-10 h-10" />
            <div>
              <h2>
                <b>Call with</b> {item.name}
              </h2>
              <p>{new Date().toLocaleDateString("en-GB")}</p>
            </div>
          </div>
        ))}

      {(filter === "" || filter === "text") &&
        text.map((item, i) => (
          <div
            key={"text-" + i}
            className="p-4 bg-[#f1ebeb74] my-2 rounded flex items-center gap-6"
          >
            <img src={textImg} alt="text" className="w-10 h-10" />
            <div>
              <h2>
                <b>Text with</b> {item.name}
              </h2>
              <p>{new Date().toLocaleDateString("en-GB")}</p>
            </div>
          </div>
        ))}
      {(filter === "" || filter === "video") &&
        video.map((item, i) => (
          <div
            key={"video-" + i}
            className="p-4 bg-[#f1ebeb74] my-2 rounded flex items-center gap-6"
          >
            <img src={videoImg} alt="video" className="w-10 h-10" />
            <div>
              <h2>
                <b>Video with</b> {item.name}
              </h2>
              <p>{new Date().toLocaleDateString("en-GB")}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TimelinePage;