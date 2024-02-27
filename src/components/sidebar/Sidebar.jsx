import { useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";
import uploadAnalyticsIcon from "../../assets/icons/Analyticssymbol.png";
import calendarIcon from "../../assets/icons/Calendar.png";
import notificationIcon from "../../assets/icons/Notification.png";
import settingsIcon from "../../assets/icons/Setting.png";
import brandLogo from "../../assets/icons/Subtract.png";
import invoiceIcon from "../../assets/icons/Ticket.png";
import closeIcon from "../../assets/icons/closeIcon.png";
import dashboardIcon from "../../assets/icons/dashboardicon.png";
import scheduleIcon from "../../assets/icons/scheduleicon.png";

import "./Sidebar.scss";

const navs = [
  { label: "Dashboard", icon: dashboardIcon, width: 24, height: 24 },
  { label: "Upload", icon: uploadAnalyticsIcon, width: 24, height: 24 },
  { label: "Invoice", icon: invoiceIcon, width: 20, height: 17.62 },
  { label: "Schedule", icon: scheduleIcon, width: 18, height: 22.02 },
  { label: "Calendar", icon: calendarIcon, width: 24, height: 26.43 },
  { label: "Notification", icon: notificationIcon, width: 17, height: 22.02 },
  { label: "Settings", icon: settingsIcon, width: 19, height: 22.02 },
];

// const [isActive, setIsActive] = useState(0);

const Sidebar = ({ onSetIsSideBar }) => {
  const location = useLocation();

  const getCurrentRouteClassName = (label) => {
    const pathName = location.pathname.split("/")[1];

    return pathName === label.toLowerCase() ? "current-route" : "";
  };

  let menu_icon_box = document.querySelector(".menu_icon_box");

  // mobile-view-header.onclick = function(){
  //     mobile-view-header.classList.toggle("active");
  // }
  return (
    <aside>
      <div className="header">
        <img src={brandLogo} alt="baseicon" height="42" width="42" />
        <p>Base</p>
      </div>

      <div className="mobile-view-header">
        <div>
          <img src={brandLogo} alt="baseicon" height="42" width="42" />
          <p>Base</p>
        </div>
        <img
          src={closeIcon}
          alt="close Icon"
          className="closeicon"
          onClick={onSetIsSideBar}
        />
      </div>

      <div className="navs-container">
        {navs.map((nav, index) => {
          return (
            <section
              key={index}
              className={`nav-container ${
                location.pathname.split("/")[1] ===
                  nav.label.toLocaleLowerCase() && "current-route-gradient"
              }`}
            >
              <img
                alt={nav.label}
                height={nav.height}
                src={nav.icon}
                width={nav.width}
              />
              <p className={getCurrentRouteClassName(nav.label)}>{nav.label}</p>
            </section>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
