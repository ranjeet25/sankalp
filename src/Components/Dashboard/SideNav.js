import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SideNav(props) {
  const navigate = useNavigate();
  const [toggle, changetoggle] = useState(true);
  const [profileModal, openProfileModal] = useState(false);
  const [oldUsername, setOldUserName] = useState();
  const [newUserName, setNewUserName] = useState();
  const [newPass, setNewPass] = useState();

  const currUsername = sessionStorage.getItem("username");

  var newUserData = {
    oldUsername: oldUsername,
    newUsername: newUserName,
    newpassword: newPass,
  };

  var sendData = (e) => {
    e.preventDefault();
    // console.log(formData);

    fetch("http://localhost:8000/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUserData),
    }).then((res) => {
      // console.log(res);
    });

    alert("Profile Updated");

    navigate("/login");
  };

  return (
    <div>
      {profileModal && (
        <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
          <div className="bg-white py-4 w-96  rounded-md text-center flex flex-col justify-center items-center">
            <div className="mb-4">Update Your Profile</div>

            <div className="flex flex-wrap px-4 py-1">
              <div className="relative w-42 appearance-none label-floating">
                <input
                  onChange={(e) => {
                    setOldUserName(e.target.value);
                  }}
                  className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  name="username"
                  type="text"
                  placeholder="Enter Old username"
                />
              </div>
            </div>
            <div className="flex flex-wrap px-4 py-1">
              <div className="relative w-42 appearance-none label-floating">
                <input
                  onChange={(e) => {
                    setNewUserName(e.target.value);
                  }}
                  className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  name="username"
                  type="text"
                  placeholder="Enter New username"
                />
              </div>
            </div>

            <div className="flex flex-wrap px-4 py-1">
              <div className="relative w-42 appearance-none label-floating">
                <input
                  onChange={(e) => {
                    setNewPass(e.target.value);
                  }}
                  className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                  name="username"
                  type="text"
                  placeholder="New Password"
                />
              </div>
            </div>

            <div className="flex justify-center items-center ">
              <button
                type="submit"
                onClick={sendData}
                className="bg-purple-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
              >
                Update
              </button>

              <button
                onClick={() => {
                  openProfileModal(false);
                }}
                className="bg-red-400 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
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
                Username : <span className=" font-medium">{currUsername}</span>
                <button
                  onClick={() => openProfileModal(true)}
                  className="m-2 p-2 bg-gray-50 border rounded-full hover:border-purple-500 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-4 h-4 text-purple-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                    />
                  </svg>
                </button>
              </p>

              <p className=" text-sm  p-3 bg-purple-500 text-center text-white">
                Role : <span className=" font-medium">Student</span>
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
