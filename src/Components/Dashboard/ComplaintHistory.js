import React from "react";

function ComplaintHistory() {
  return (
    <div>
      <>
        {/* component */}
        <section className="text-gray-600 body-font bg-gray-50 h-screen  ">
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
                    {/* <p className="text-sm font-semibold text-gray-400">
                      Last Transaction
                    </p> */}
                    <button className="text-sm mt-6 px-4 py-2 bg-violet-400  text-white rounded-lg  tracking-wider hover:bg-violet-500 outline-none">
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
                    {/* <p className="text-sm font-semibold text-gray-400">
                      Last Transaction
                    </p> */}
                    <button className="text-sm mt-6 px-4 py-2 bg-pink-400  text-white rounded-lg  tracking-wider hover:bg-pink-500 outline-none">
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
              <div className="p-2 sm:w-1/2 lg:w-3/4 w-full hover:scale-105 duration-500">
                {/* card 3 */}
                {/* <div className=" flex items-center  justify-between p-4  rounded-lg bg-white shadow-indigo-50 shadow-md border-2 border-gray-200">
                  <div>
                    <h2 className="text-gray-900 text-lg font-bold">
                      Total Ballance
                    </h2>
                    <h3 className="mt-2 text-xl font-bold text-indigo-500 text-left">
                      + 150.000 ₭
                    </h3>
                    <p className="text-sm font-semibold text-gray-400">
                      Last Transaction
                    </p>
                    <button className="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  tracking-wider hover:bg-indigo-500 outline-none">
                      Add to cart
                    </button>
                  </div>
                  <div className="bg-gradient-to-tr from-indigo-500 to-indigo-400 w-24 lg:w-32 h-24 lg:w-32  rounded-full shadow-2xl shadow-[#304FFE] border-white  border-dashed border-2  flex justify-center items-center ">
                    <div>
                      <h1 className="text-white text-2xl">Basic</h1>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default ComplaintHistory;
