import React, { useState, useEffect } from "react";

function ComplaintHistory() {
  const [HistoryModal, openHistoryModal] = useState(false);
  const [recordModal, openRecordModal] = useState(false);
  const [History, setHistory] = useState([]);

  function fetchFun() {
    fetch("http://localhost:8000/history")
      .then((res) => res.json())
      .then((data) => {
        setHistory(data.reverse());
      });
  }
  fetchFun();

  return (
    <div>
      <>
        {/* component */}
        <section className="text-gray-600 body-font  h-screen  ">
          {/* History component */}
          {HistoryModal && (
            <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
              <div className="bg-white py-4 w-3/5  rounded-md text-center">
                {/* TABLE */}
                <div className="h-[60vh]  overflow-scroll rounded-lg border border-gray-600 shadow-sm m-5">
                  <table className="w-full  border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Complaint ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Incharge name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Branch of Complaint
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        />
                      </tr>
                    </thead>
                    {History.map((itr) => {
                      return (
                        <tr className="hover:bg-gray-50">
                          <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                            <div className="text-sm">
                              <div className="font-medium text-gray-700">
                                {itr.username}
                              </div>
                              <div className="text-gray-400">
                                UID : {itr.uid}{" "}
                              </div>
                            </div>
                          </th>
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                              <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
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
                              <a x-data="{ tooltip: 'Delete' }" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                  x-tooltip="tooltip"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </a>
                              <a x-data="{ tooltip: 'Edite' }" href="#">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="h-6 w-6"
                                  x-tooltip="tooltip"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                                  />
                                </svg>
                              </a>
                            </div>
                          </td>
                        </tr>
                      );
                    })}

                    <tbody className="divide-y divide-gray-100 border-t border-gray-100"></tbody>
                  </table>
                </div>

                <button
                  onClick={() => {
                    fetchFun();
                    openHistoryModal(false);
                  }}
                  className="bg-pink-400 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          {recordModal && (
            <div className="z-10 bg-slate-800 bg-opacity-50 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
              <div className="bg-white py-4 w-3/5 rounded-md text-center">
                {/* TABLE */}
                <div className="h-4/5  overflow-scroll rounded-lg border border-gray-600 shadow-sm m-5">
                  <table className="w-full  border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Complaint ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          Status
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        />
                      </tr>
                    </thead>

                    <tr className="hover:bg-gray-50">
                      <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                        <div className="text-sm">
                          <div className="font-medium text-gray-700">
                            ranjeet
                          </div>
                          <div className="text-gray-400">UID : </div>
                        </div>
                      </th>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-green-600" />
                          id
                        </span>
                      </td>
                      <td className="px-6 py-4">Pending</td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end gap-4">
                          <a x-data="{ tooltip: 'Delete' }" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                              x-tooltip="tooltip"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                              />
                            </svg>
                          </a>
                          <a x-data="{ tooltip: 'Edite' }" href="#">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-6 w-6"
                              x-tooltip="tooltip"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                              />
                            </svg>
                          </a>
                        </div>
                      </td>
                    </tr>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100"></tbody>
                  </table>
                </div>

                <button
                  onClick={() => {
                    openRecordModal(false);
                  }}
                  className="bg-indigo-500 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          )}

          <div className="container  p-4 mx-auto">
            <div className="flex flex-wrap  text-center  h-screen">
              <div className="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500"></div>
              <div className="p-2 sm:w-1/2 lg:w-3/4 w-full hover:scale-105 duration-500 ">
                {/* card 1 */}
                <div className=" flex items-center  justify-between p-4 h-54 rounded-lg bg-white shadow-indigo-50 shadow-md border-2 border-gray-200">
                  <div>
                    <h2 className="text-gray-900 text-lg font-bold">Status</h2>
                    <h3 className="mt-2 text-xl font-bold text-violet-500 text-left">
                      No Record
                    </h3>

                    <button
                      onClick={() => {
                        openRecordModal(true);
                      }}
                      className="text-sm mt-6 px-4 py-2 bg-violet-400  text-white rounded-lg  tracking-wider hover:bg-violet-500 outline-none"
                    >
                      View Last
                    </button>
                  </div>
                  <div className="bg-gradient-to-tr from-violet-500 to-violet-500 w-24 lg:w-32 h-24 lg:h-32  rounded-full shadow-2xl shadow-violet-400 border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                      <h1 className="text-white text-2xl">Status</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 lg:w-3/4 w-full hover:scale-105 duration-500">
                {/* card 2 */}
                <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md border-2 border-gray-200">
                  <div>
                    <h2 className="text-gray-900 text-lg font-bold">
                      Track History
                    </h2>
                    <h3 className="mt-2 text-xl font-bold text-pink-500 text-centre">
                      No History
                    </h3>

                    <button
                      onClick={() => {
                        openHistoryModal(true);
                      }}
                      className="text-sm mt-6 px-4 py-2 bg-pink-400  text-white rounded-lg  tracking-wider hover:bg-pink-500 outline-none"
                    >
                      View Last
                    </button>
                  </div>
                  <div className="bg-gradient-to-tr from-pink-500 to-pink-400 w-24 lg:w-32 h-24 lg:h-32  rounded-full shadow-2xl shadow-pink-400 border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                      <h1 className="text-white text-2xl">History</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-2 sm:w-1/2 lg:w-3/4 w-full hover:scale-105 duration-500"></div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default ComplaintHistory;
