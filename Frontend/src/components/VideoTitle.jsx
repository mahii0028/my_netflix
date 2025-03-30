import React from "react";
import { FaPlay } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";

const VideoTitle = () => {
  return (
    <div className="w-screen aspect-video absolute text-white pt-[18%] p-12">
      <h1 className="text-3xl font-bold">Mahesh mern stack</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit,
        dignissimos aliquid.
      </p>
      <div className="mt-8 flex gap-2">
        <button className="flex gap-1.5 items-center px-6 py-2 bg-white text-black rounded-md hover:opacity-80 transition-opacity duration-300">
          <span>
            <FaPlay />
          </span>
          Play
        </button>
        <button className="flex gap-1.5 items-center px-6 py-2 opacity-50 bg-white text-black rounded-md hover:opacity-80 transition-opacity duration-300">
          <span>
            <CiCircleInfo size={"24px"} />
          </span>
          Watch more
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
