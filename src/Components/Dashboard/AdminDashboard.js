import React, { useEffect } from "react";
import AdminTable from "./AdminTable";
import SideNav from "./SideNav";

function AdminDashboard() {
  return (
    <div className="w-screen flex">
      <SideNav></SideNav>
      <div className="w-4/5">
        <AdminTable></AdminTable>
      </div>
    </div>
  );
}

export default AdminDashboard;
