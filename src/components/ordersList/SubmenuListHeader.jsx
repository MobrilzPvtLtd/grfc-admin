/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

const SubmenuListHeader = (props) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleClick= (ind) => {
  props.setActiveList(ind);
  };

  return (
    <div className="w-full h-full flex gap-6 pt-6 pl-6">
      {props.submenuHeading.map((HeaderItem, index) => (
        <div
          key={index}
          className={`m-2 text-xl items-center ${
            activeTab === index
              ? "active pb-4  border-b-2 border-green-500 text-green-500"
            
              : ""
          }`}
          onClick={()=>handleClick(index)}
        >
          
          
          <NavHashLink
            className={`text-gray-500 hover:text-green-500 ${
              activeTab === index ? "text-green-500" : ""
            }`}
            key={index}
            to=""
            onClick={() => handleTabClick(index)}
            smooth
          >
            {HeaderItem}
          </NavHashLink>
        </div>
      ))}
      
    </div>
  );
};

export default SubmenuListHeader;
