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
              <div className="bg-white py-4 w-4/5  rounded-md text-center">
                {/* TABLE */}
                <div className="h-[60vh]  overflow-scroll rounded-lg border border-gray-600 shadow-sm m-5">
                  <table className="w-full  border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-4 font-medium text-gray-900"
                        >
                          SrNo
                        </th>
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
                    {History.map((itr, index) => {
                      return (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-6 py-4">
                            <span className="inline-flex items-center gap-1 rounded-full bg-green-100 border px-2 py-1 text-xs font-semibold text-gray-800">
                              {index + 1}
                            </span>
                          </td>
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
                          id
                        </span>
                      </td>
                      <td className="px-6 py-4">Pending</td>
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
