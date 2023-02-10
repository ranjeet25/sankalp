import React, { useEffect, useState } from "react";
import SideNav from "./SideNav";
import AddcomplaintsModal from "./AddcomplaintsModal";
import ComplaintHistory from "./ComplaintHistory";

function Dahboard() {
  const [username, setUserName] = useState();
  const [passwd, setPasswd] = useState();

  useEffect(() => {
    fetch("http://localhost:8000/register", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        // setUserName(data.uname);
        // setPasswd(data.pass);
        console.log(data);
      });
  }, []);

  // console.log(username);
  // console.log(passwd);

  return (
    <div className="flex flex-col lg:flex-row justify-start  ">
      <SideNav></SideNav>
      <div className="w-screen lg:w-2/4 h-full flex justify-center  ">
        <AddcomplaintsModal></AddcomplaintsModal>
      </div>

      <div className="w-full lg:w-2/4">
        <ComplaintHistory></ComplaintHistory>
      </div>
    </div>
  );
}

export default Dahboard;
