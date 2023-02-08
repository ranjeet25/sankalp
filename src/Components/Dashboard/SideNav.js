import React from "react";
import { useState } from "react";
import AddcomplaintsModal from "./AddcomplaintsModal";

function SideNav(props) {
  const [toggle, changetoggle] = useState(true);
  const [modal, setmodal] = useState(false);

  return (
    <div>
      <div className="absolute  w-full shadow-sm p-2 z-10 bg-white">
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
              <p className=" text-sm  p-3 bg-purple-500 text-center text-white">
                Role : <span className=" font-medium">Student</span>
              </p>
              <p className="text-sm  p-3 bg-purple-500 text-center text-white">
                Username : <span className=" font-medium">ranjeet25</span>
              </p>
            </div>

            <div className="hover:bg-gray-200 w-full mx-4 bg-gray-100">
              <button className=" text-sm  py-3  w-full h-full ">
                Add Complaints
              </button>
            </div>
            <div className="hover:bg-gray-200 w-full mx-4 bg-gray-100 mt-2">
              <button className=" text-sm  py-3  w-full h-full ">
                Check Status
              </button>
            </div>
            <div className="hover:bg-gray-200 w-full mx-4 bg-gray-100 mt-2">
              <button className=" text-sm  py-3  w-full h-full ">
                History
              </button>
            </div>
            <div className="hover:bg-gray-200 w-full mx-4 bg-gray-100 mt-2">
              <button className=" text-sm  py-3  w-full h-full ">
                Support
              </button>
            </div>
            <div className="w-full mx-4 bg-gray-100 mt-2">
              <button className=" text-white text-sm w-full  py-3  mt-3  bg-red-400 border border-gray-400  focus:ring focus:ring-red-500">
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
