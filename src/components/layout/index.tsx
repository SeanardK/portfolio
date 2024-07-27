import React from "react";
import Sidebar from "../sidebar";
import "./style.css";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bs_layout">
      <Sidebar />

      <div>{children}</div>
    </div>
  );
}

export default Layout;
