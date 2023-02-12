import React, { useState, useEffect } from "react";
import SideDash from "./SideDash";

function ResolverDashboard() {
  // Fetched Data
  const [userId, setUserId] = useState([]);
  // User ID
  const [userDataId, setUserDataId] = useState();
  // VIEW STATES
  const [viewModal, openViewModal] = useState(false);
  const [userComplaint, setUserComplaint] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/resolver")
      .then((res) => res.json())
      .then((data) => {
        setUserId(data.reverse());
      });
  }, []);

  return (
    <div className="flex w-full">
      {viewModal && (
        <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
          <div className=" bg-white px-16 py-14 rounded-md text-center border w-[50vw] ">
            <h2 className="text-sm mb-4 font-bold text-slate-500">
              Below is the Complaint Added by user with ID
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                {userDataId}
              </span>
            </h2>
            <div className="bg-green-50 p-2">
              <p className="test-sm text-gray-600 text-center ">
                {userComplaint}
              </p>
            </div>

            <button
              onClick={() => openViewModal(false)}
              className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold mt-2"
            >
              Ok
            </button>
          </div>
        </div>
      )}
      <SideDash head="Grievance Head" data={userId}></SideDash>
      <div className="h-[90vh] md:w-auto  overflow-scroll rounded-lg border border-gray-600 shadow-sm m-5">
        <table className="w-[70vw] h-24 border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                SrNo
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Complaint ID
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Incharge name
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900">
                Branch of Complaint
              </th>
              <th scope="col" className="px-6 py-4 font-medium text-gray-900" />
            </tr>
          </thead>
          {userId.map((itr, index) => {
            return (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-purple-100 border px-2 py-1 text-xs font-semibold text-gray-800">
                    {index + 1}
                  </span>
                </td>
                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                  <div className="text-sm">
                    <div className="font-medium text-gray-700">
                      {itr.username}
                    </div>
                    <div className="text-gray-400">UID : {itr.uid}</div>
                  </div>
                </th>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                    {itr._id}
                  </span>
                </td>
                <td className="px-6 py-4">{itr.incharge_name}</td>
                <td className="px-6 py-4">
                  <div className="flex gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                      {itr.branch}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button
                      onClick={() => {
                        setUserDataId(itr._id);
                        openViewModal(true);
                        setUserComplaint(itr.complaint);
                      }}
                      className="View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-green-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>

                    <button className="Forward">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6 text-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </button>

                    <button className="Delete">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-red-500 "
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                      </svg>
                    </button>
                  </div>
                </td>
              </tr>
            );
          })}
          <tbody className="divide-y divide-gray-100 border-t border-gray-100"></tbody>
        </table>
      </div>
    </div>
  );
}

export default ResolverDashboard;
