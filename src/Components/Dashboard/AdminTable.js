import React, { useState } from "react";
import { useEffect } from "react";

function AdminTable() {
  const [userdata, usersetData] = useState([]);
  const [Id, setId] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/admin")
      .then((res) => res.json())
      .then((data) => {
        //   console.log(data);
        usersetData(data.reverse());
      });
  }, []);

  var userId;

  function postUserId() {
    var obj = { userId: userId };
    fetch(`http://localhost:8000/resolver/${userId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    }).then((res) => {
      // console.log(res);
    });
    console.log(userId);
  }

  console.log(userId);

  return (
    <div>
      <div className="h-[90vh] md:w-auto w-screen  overflow-scroll rounded-lg border border-gray-600 shadow-sm m-5">
        <table className="w-full h-24 border-collapse bg-white text-left text-sm text-gray-500">
          <thead className="bg-gray-50">
            <tr>
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
          {userdata.map((itr) => {
            return (
              <tr className="hover:bg-gray-50">
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
                    {/* <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                        Product
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-violet-50 px-2 py-1 text-xs font-semibold text-violet-600">
                        Develop
                      </span> */}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end gap-4">
                    <button className="View">
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

                    <button
                      onClick={() => {
                        // console.log(itr._id);
                        userId = itr._id;
                        postUserId();
                      }}
                      className="Forward"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-blue-500"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
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

export default AdminTable;
