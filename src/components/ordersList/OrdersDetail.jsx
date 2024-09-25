/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function OrderDetails({ setShowOrderDetails, data }) {
  return (
    <>
      <div className=" fixed inset-0 z-50 bg-opacity-50 bg-gray-300 flex justify-center items-center px-40 py-10 ">
        <div className="bg-white w-full max-w-full  h-full overflow-hidden p-6 sm:p-10 rounded-lg py-40 overflow-y-auto">
          <MdOutlineCancel
            className="relative ml-auto cursor-pointer"
            style={{ color: "black" }}
            size={42}
            onClick={() => setShowOrderDetails(false)}
          />
          <h1 className="font-semibold text-center mt-2 text-black text-2xl my-6 ">
            Order Details
          </h1>
          <div className=" flex-col sm:flex-row justify-between items-center ">
            <div className=" w-full flex justify-between mx-8">
              <div>
                <p className="text-black font-medium">
                  PICKUP ID # : <span>{data?.id}</span>
                </p>
                <p className=" text-black font-medium">
                  CUSTOMER NAME : <span> {data?.user__name}</span>
                </p>
                <p className=" text-black font-medium">
                  PICKUP DATE : <span> {data.pickup_date}</span>
                </p>
                <p className=" text-black font-medium ">
                  TIME : <span>{data.pickup_time}</span>
                </p>
              </div>

              <div className="">
                <div className="my-4 flex justify-center align-middle mr-10 ">
                  <span className="text-black font-semibold mt-2 mx-2">
                    STATUS :
                  </span>
                  <span
                    className={`w-28 text-center ${
                      data.order_status === "completed" ||
                      data.order_status === "complete"
                        ? "bg-[#DEFFF2] py-2 text-[#0A945B]"
                        : data.status === "requested"
                        ? "bg-[#FFF9E9] py-2 text-[#AE7800]"
                        : data.order_status === "picked"
                        ? "bg-[#E7F0FF] py-2 text-[#003574]"
                        : data.order_status === "live"
                        ? "bg-[#ede7e6] py-2 text-red-600"
                        : data.order_status === "Allocated"
                        ? "bg-[#e8e6cc] py-2 text-yellow-600"
                        : data.order_status === "rejected"
                        ? "bg-orange-100 py-2 text-orange-400"
                        : ""
                    }`}
                  >
                    {data.status === "completed"
                      ? data.order_status
                      : data.status}
                  </span>
                </div>
              </div>
            </div>
            {/* </div> */}
            <div className="flex justify-between items-center max-w-full text-center container h-full ">
              <div className="w-full inline-block  bg-white mx-10 my-6 rounded-md overflow-hidden ">
                <div className="">
                  <div className="">
                    <div className="flex justify-between bg-gray-100 border-2 w-full px-8">
                      <div className="bg-gray-100 p-2 sticky top-0">
                        <h2 className="text-xl font-semibold text-black">
                          Item Name
                        </h2>
                      </div>
                      <div className="bg-gray-100 p-2 sticky top-0">
                        <h2 className="text-xl font-semibold text-black">
                          Item Quantity
                        </h2>
                      </div>
                    </div>

                    <div className=" h-[500px] px-10">
                      {data.pickuprequestitem__item_id__item_name?.map(
                        (itemName, idx) => (
                          <div
                            key={idx}
                            className="flex justify-between w-full mt-4 p-2 h-20 "
                          >
                            <div className="bg-white p-4  rounded-md mb-2 text-black">
                              {itemName}
                            </div>
                            <div className="bg-white p-4  rounded-md mb-2 text-black">
                              {data.pickuprequestitem__weight?.[idx]}
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderDetails;
