import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";

import "./Layout.scss";

const Layout = () => {
  const [isSideBar, setIsSideBar] = useState(window.innerWidth > 400);

  const handleIsSideBar = () => setIsSideBar(!isSideBar);

  return (
    <main className="layout-container">
      <section className="header-outlet-container">
        <Header onSetIsSideBar={handleIsSideBar} />
        <div className="outlet-container">
          <Outlet />
        </div>
      </section>

      {isSideBar && <Sidebar onSetIsSideBar={handleIsSideBar} />}
    </main>
  );
};

export default Layout;
