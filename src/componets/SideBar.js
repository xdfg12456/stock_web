import { BiMenu } from "react-icons/bi";
//import { useState } from "react";
//import { IconContext } from "react-icons/lib";

const SideBar = ({ click, handleClick }) => {
  return (
    <div className={click ? "sidebar active" : "sidebar"}>
      <div className="logo_content">
        <div className="logo_name">StockList</div>
        <BiMenu className="menu" onClick={handleClick} />
      </div>
    </div>
  );
};

export default SideBar;
