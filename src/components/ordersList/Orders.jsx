import React, { useEffect, useState } from "react";
import Navigation from "../Header/Navigation";
import List from "./List";
import { AiOutlineSearch } from "react-icons/ai";
import SubmenuListHeader from "./SubmenuListHeader";
// import { submenuHeading } from "./orderSubmenu";
import { useDispatch, useSelector } from "react-redux";
import Error from "../Error";
import Loader from "../Loader";
import { fetchOrderList } from "../../redux/features/fetchOrdersSlice";

const Heading = [
  "Id",
  "Name",
  "Ordered Date",
  "Picked Category",
  "Picked Quantity",
  "Status",
  "Allocate Vendor",
  "Show Details",
];

const Orders = () => {
  const [activeList, setActiveList] = useState(0);
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchOrderList())?.then((response) => {
    });
  }, [dispatch]);
  const {
    loading,
    data: orderData,
    error,
  } = useSelector((state) => state.orderDetails);
  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  }
  return (
    <>
      <div className="w-full h-full lg:h-full py-10 bg-gray-100 px-10">
        <div className="heading">
          <h1 className="text-black font-semibold pt-2">Order List</h1>
        </div>
        {/* <SubmenuListHeader
          submenuHeading={submenuHeading}
          setActiveList={setActiveList}
        /> */}
        <hr />
        <div className="relative my-10 ml-6">
          <AiOutlineSearch
            className="search-icon absolute top-2 left-3 w-5 h-5"
            style={{ color: "black", width: "30px", height: "30px" }}
          />
          {/* <input
            type="text"
            className="px-16 py-3 rounded-xl w-10/12 bg-white text-black"
            placeholder="Search By Order Id or name"
            name="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            id="search"
          /> */}
        </div>
        <List
          Heading={Heading}
          data={orderData}
          activeList={activeList}
          query={query}
          setQuery={setQuery}
        />
      </div>
    </>
  );
};

export default Orders;
