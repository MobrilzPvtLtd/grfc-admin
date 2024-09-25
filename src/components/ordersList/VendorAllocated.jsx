import React, { useEffect } from "react";
import orderallocated from "../../assets/orderallocated.png";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { fetchOrderList } from "../../redux/features/fetchOrdersSlice";

function VendorAllocated(props) {
  const dispatch = useDispatch();
  const Details = props.selectedData;
  const handleRefreshed = () => {
    props.setshowVendorAllocated(false);
    dispatch(fetchOrderList())?.then((response) => {});
  };
  useEffect(() => {}, []);
  return (
    <>
      <div className="fixed z-50  inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
        <div className="absolute inset-0  "></div>
        <div className="bg-white relative h-auto p-10 w-full m-48">
          <MdOutlineCancel
            className="absolute top-0 right-0 cursor-pointer"
            style={{ color: "black" }}
            size={62}
            onClick={() => handleRefreshed()}
          />
          <div className=" p-10 m-10 flex">
            <div className="image">
              <img src={orderallocated} alt="" />
            </div>
            <div className="p-10">
              <h3 className="text-2xl pb-5 text-black">Vendor Allocated</h3>
              <p className="text-black">
                <label htmlFor="name">
                  <b>{props.vendorName}</b>
                </label>{" "}
                is allocated to pickup order ID:- <b>#{Details.id}</b> on{" "}
                <b>
                  {Details.pickup_date}, {Details.pickup_time}
                </b>
              </p>
              <p className="address font-extrabold text-black">
                {Details.area},{Details.pincode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VendorAllocated;
