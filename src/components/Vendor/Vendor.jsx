import React, { useState } from "react";
import Navigation from "../Header/Navigation";
import OwnerList from "./OwnerList";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import SubmenuListHeader from "../ordersList/SubmenuListHeader";
import CreateVendor from "./CreateVendor";
const submenuHeading = [
  "All Owners",
  "Subscribed Owners",
  "Not Subscribed Owners",
];

function Vendor() {
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const handlePopupClick = () => {
    setShowPopup(true);
  };
  return (
    <>
      <div className="w-full h-full bg-gray-100">
        <div className="bg-gray-100 h-full w-full p-10">
          {showPopup && (
            <div className="">
              <CreateVendor setShowPopup={setShowPopup} />
            </div>
          )}
          <div className=" w-full h-full flex flex-col justify-between bg-gray-100 ">
            <div className="w-full h-full flex justify-between bg-gray-100">
              <div className="">
                <h1 className="text-black  font-semibold">Owner List</h1>
              </div>
              {/* <div
                className="flex justify-center font-semibold items-center px-6 text-white  bg-[#27AE76] rounded-xl cursor-pointer"
                onClick={handlePopupClick}
              >
                <div className="pl-2">
                  <BsPlus style={{ width: "30px", height: "30px" }} />
                </div>
                <div>
                  <div className="text-lg " type="submit">
                    Add Product
                  </div>
                </div>
              </div> */}
            </div>
            <SubmenuListHeader submenuHeading={submenuHeading} />
            <hr />
            <div className="relative my-10 ml-6">
              <AiOutlineSearch
                className="search-icon absolute top-2 left-3 w-5 h-5"
                style={{ color: "black", width: "30px", height: "30px" }}
              />
              <input
                type="text"
                className="px-16 py-3 rounded-xl w-10/12 bg-white text-black"
                placeholder="Search By Vendor Id or name"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                name="search"
                id="search"
              />
            </div>
          </div>
          <OwnerList query={query} setQuery={setQuery} />
        </div>
      </div>
    </>
  );
}

export default Vendor;
