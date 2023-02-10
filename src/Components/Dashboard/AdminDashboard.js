import React, { useEffect } from "react";
import AdminTable from "./AdminTable";
import SideDash from "./SideDash";

function AdminDashboard() {
  return (
    <div className="w-full flex ">
      <SideDash head="Admin Dash"></SideDash>
      <div className="w-4/5">
        <AdminTable></AdminTable>
      </div>
    </div>
  );
}

export default AdminDashboard;
