"use client";

import React, { useState } from "react";
import "./style.css";
import BigStyleUtilsClassName from "../utils/className";
import Link from "next/link";

const data = [
  // { name: "HOME", url: "/", icon: "bi-ic-home2" },
  // { name: "ABOUT", url: "/", icon: "bi-ic-user" },
  { name: "PROJECT", url: "/projects", icon: "bi-ic-code" },
];

function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openClass = BigStyleUtilsClassName.conditionalClassName(
    isOpen ? "bs_sidebar--open" : ""
  );

  return (
    <nav className={`bs_sidebar${openClass}`}>
      <div className="bs_sidebar--menu">
        {data.map((v, i) => (
          <Link href={v.url} key={v.name} onClick={() => setActiveMenu(i)}>
            <div
              className={`bs_sidebar--menu_item${BigStyleUtilsClassName.conditionalClassName(
                activeMenu === i ? "bs_sidebar--menu_item--active" : ""
              )}`}
            >
              <span className={`bs_sidebar--menu_icon ${v.icon}`} />
              {v.name}
            </div>
          </Link>
        ))}
      </div>

      <button className="bs_sidebar--toggle_bottom" onClick={toggleSidebar}>
        <div>
          <i className="bi-ic-doublechevron-right" />
        </div>
      </button>
    </nav>
  );
}

export default Sidebar;
