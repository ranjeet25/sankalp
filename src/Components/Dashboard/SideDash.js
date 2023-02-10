import React from "react";

function SideDash(props) {
  return (
    <div className="my-5 mx-2">
      <div className="h-full main-container w-72  flex flex-col  items-center justify-start">
        <div className="bg-white w-full shadow-sm border rounded-xl">
          <h2 className="text-purple-600 text-center ">{props.head}</h2>
        </div>
        {/* BOX 01 */}
        <div className="bg-white w-full shadow-sm border rounded-xl mt-6 flex flex-col justify-center items-center ">
          <p className=" bg-pink-50 text-pink-800 text-center mt-2 px-8 py-2 rounded-full ">
            Total number of complaints
          </p>
          <span className=" text-pink-600 text-[50px] ">20</span>
        </div>
        {/* BOX 02 */}

        <div className="bg-white w-full shadow-sm border rounded-xl mt-6 flex flex-col justify-center items-center ">
          <p className=" bg-green-50 text-green-800 text-center mt-2 px-8 py-2 rounded-full ">
            complaints Forwarded
          </p>
          <span className=" text-green-600 text-[50px] ">10</span>
        </div>
        {/* BOX 03 */}

        <div className="bg-white w-full shadow-sm border rounded-xl mt-6 flex flex-col justify-center items-center ">
          <p className=" bg-blue-50 text-blue-800 text-center mt-2 px-8 py-2 rounded-full ">
            Pending Complaints
          </p>
          <span className=" text-blue-600 text-[50px] ">05</span>
        </div>
        {/* <button
          onClick={() => alert(props.data)}
          className="bg-red-200 px-3 rounded-full mt-2"
        >
          Sort By Time
        </button> */}
      </div>
    </div>
  );
}

export default SideDash;
