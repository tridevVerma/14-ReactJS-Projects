import React from "react";
import "./sidebarModal.css";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
function SidebarModal() {
  const toggleSidebar = () => {
    const sidebar = document.getElementsByClassName("sidebar-content");
    const sidebarToggle = document.getElementsByClassName("sidebar-toggle");
    const myModal = document.getElementsByClassName("sidebar-my-modal");
    sidebarToggle[0].classList.toggle("sidebar-hide");
    sidebar[0].classList.toggle("sidebar-hide-width");

    if (sidebar[0].classList.contains("sidebar-hide-width")) {
      myModal[0].classList.remove("sidebar-hide");
    } else {
      myModal[0].classList.add("sidebar-hide");
    }
  };
  return (
    <div className="sidebar-modal-bg">
      <Modal toggle={toggleSidebar} />
      <Sidebar toggle={toggleSidebar} />
    </div>
  );
}

export default SidebarModal;
