import React, { useState } from "react";
import SideNav from "./SideNav";
import AddcomplaintsModal from "./AddcomplaintsModal";
import ComplaintHistory from "./ComplaintHistory";

function Dahboard() {
  const [name, setName] = useState("");
  // var name = "RANJEET SAW";
  fetch("http://localhost:8000/register", { method: "POST" })
    .then((res) => res.json())
    .then((data) => {
      setName(data.uname);
    });

  return (
    <div className="flex flex-col lg:flex-row justify-start  ">
      <SideNav username={name}></SideNav>
      <div className="w-screen lg:w-2/4 h-full flex justify-center bg-gray-100 ">
        <AddcomplaintsModal></AddcomplaintsModal>
      </div>

      <div className="w-full lg:w-2/4">
        <ComplaintHistory></ComplaintHistory>
      </div>
    </div>
  );
}

export default Dahboard;
