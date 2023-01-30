import React from "react";
import { useState } from "react";
import AddcomplaintsModal from "./AddcomplaintsModal";

function SideNav(props) {
  const [toggle, changetoggle] = useState(true);
  const [modal, setmodal] = useState(false);

  return (
    <div>
      <div className="absolute w-full shadow-sm p-2 z-10 bg-white">
        <button
          onClick={() => {
            changetoggle(!toggle);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      {toggle && (
        <div className="w-80 lg:h-screen  shadow-sm bg-white border-2 border-gray-200 ">
          <div className="container py-16 flex flex-col justify-center items-center">
            <div className="h-60 w-full flex flex-col justify-start  ">
              <p className="p-2  m-2 text-center    ">
                Name : <span className=" font-medium">{props.username}</span>
              </p>
              <p className="py-2 text-sm  m-2 text-gray-50 bg-pink-400 text-center rounded-full">
                Role : <span className=" font-medium">Student</span>
              </p>
              <p className="py-2 m-2 text-sm  text-gray-50 bg-violet-400 text-center rounded-full">
                Username : <span className=" font-medium">ranjeet25</span>
              </p>
            </div>

            <div>
              <button className=" text-sm w-60 py-3 px-16 mt-3  bg-white border border-gray-400 rounded-full focus:ring focus:ring-violet-500">
                Add Complaints
              </button>
            </div>
            <div>
              <button className=" text-sm  w-60 py-3 px-16 mt-3  bg-white border border-gray-400 rounded-full focus:ring focus:ring-violet-500">
                Check Status
              </button>
            </div>
            <div>
              <button className=" text-sm w-60 py-3 px-16 mt-3  bg-white border border-gray-400 rounded-full focus:ring focus:ring-violet-500">
                History
              </button>
            </div>
            <div>
              <button className=" text-sm w-60 py-3 px-16 mt-3  bg-white border border-gray-400 rounded-full focus:ring focus:ring-violet-500">
                Support
              </button>
            </div>
            <div>
              <button className=" text-white text-sm w-60  py-3 px-16 mt-3  bg-red-400 border border-gray-400 rounded-full focus:ring focus:ring-red-500">
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SideNav;
