import React from "react";
import { useState } from "react";

function AddcomplaintsModal(props) {
  const [data, setData] = useState({
    username: "",
    uid: "",
    p_incharge: "",
    branch: "",
    complaint: "",
  });

  const addData = (e) => {
    setData(() => ({
      ...data,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
      [e.target.name]: e.target.value,
    }));
  };

  function sendData(e) {
    e.preventDefault();
    // console.log(formData);

    fetch("http://localhost:8000/complaints", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log(res);
      console.log(data);
    });

    alert("data submited");
  }

  return (
    <div className="w-full m-16">
      <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        <form
          id="contact-me"
          className="w-screen lg:w-full mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 "
        >
          <h2 className="w-full my-3 text-3xl font-bold leading-tight ">
            Add Complaints
          </h2>
          {/* name field */}
          <div className="flex flex-wrap mb-2">
            <div className="relative w-full appearance-none label-floating">
              <input
                className="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                name="username"
                type="text"
                placeholder="Your username"
                onChange={addData}
              />
            </div>
          </div>
          {/* UID field */}
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                className="tracking-wide py-2 px-4 mb-1 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                name="uid"
                type="text"
                placeholder="UID Number"
                onChange={addData}
              />
            </div>
          </div>
          {/* Person Incharge */}
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <input
                className="tracking-wide py-2 px-4 mb-1 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                name="p_incharge"
                type="text"
                placeholder="Name of the Person Incharge"
                onChange={addData}
              />
            </div>
          </div>
          {/* select */}
          <div className="  inline-block relative w-full">
            <select
              className="block mb-6 appearance-none w-full bg-gray-50 border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded  leading-tight focus:outline-none focus:shadow-outline "
              name="branch"
              onChange={addData}
            >
              <option className="text-gray-700">Select complaint Branch</option>
              <option>Academic</option>
              <option>Library</option>
              <option>Canteen</option>
              <option>Other</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
          {/* complaint field */}
          <div className="flex flex-wrap mb-6">
            <div className="relative w-full appearance-none label-floating">
              <textarea
                className="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-50 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                name="complaint"
                type="text"
                placeholder="Write your complaint here..."
                onChange={addData}
              />
            </div>
          </div>
          <div className="">
            <button
              className="w-full shadow bg-violet-400 hover:bg-violet-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="submit"
              onClick={sendData}
            >
              Submit
            </button>
          </div>
        </form>

        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
      </div>
    </div>
  );
}

export default AddcomplaintsModal;
