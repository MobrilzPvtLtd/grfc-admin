import React, { useState } from "react";
import OrderDetail from "./OrdersDetail";

const OrderTable = ({ filterList, heading, setSelectedData, setShowPopup }) => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [Details, setDetails] = useState("");
  const handlePopupClick = (data) => {
    setSelectedData(data);
    setShowPopup(true);
  };
  const handleShowDetails = (data) => {
    setShowOrderDetails(true);
    setDetails(data);
  };
  return (
    <>
      {showOrderDetails && (
        <OrderDetail setShowOrderDetails={setShowOrderDetails} data={Details} />
      )}
      <div className="w-full">
        <table className=" table-fixed 2xl:table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
          <thead className="text-base px-6 text-gray-700 uppercase bg-gray-100 gray:bg-gray-700 dark:text-gray-400 border-2 ">
            <tr className="">
              {heading?.map((heading, index) => {
                return (
                  <th
                    key={index}
                    scope="col"
                    className="px-0 pl-6 py-4 pr-2  text-black sticky top-0 "
                  >
                    {heading}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="bg-white border-2 ">
            {[...filterList]?.map((data, index) => {
              return (
                <tr
                  key={index}
                  className={` border-2 ${
                    index % 2 === 0 ? "bg-green-50" : ""
                  }`}
                >
                  <td className="py-4 text-[#000000a6] font-medium pl-14">
                    #{data?.id}
                  </td>
                  <td className="py-6 px-0 text-[#000000a6] font-medium">
                    {data?.user__name}
                  </td>
                  <td className="py-4 pl-6 text-[#000000a6] font-medium">
                    {data.pickup_date}
                  </td>
                  <td className="py-4 pl-5 text-[#000000a6] font-medium">
                    {data.pickup_time}
                  </td>
                  <td className="py-4 text-[#000000a6] font-medium">
                    {data.orderitems__item_id__item_name}
                  </td>
                  <td className="py-4 text-[#000000a6] font-medium">
                    {data.orderitems__quantity}
                  </td>
                  <td className="py-4 px-2  text-[#000000a6] font-medium text-xs">
                    <p
                      className={`w-28 text-center ${
                        data.order_status === "completed" ||
                        data.order_status === "complete"
                          ? "bg-[#DEFFF2] py-3 text-[#0A945B]"
                          : data.status === "requested"
                          ? "bg-[#FFF9E9] py-3 text-[#AE7800]"
                          : data.order_status === "picked"
                          ? "bg-[#E7F0FF] py-3 text-[#003574]"
                          : data.order_status === "live"
                          ? "bg-[#ede7e6] py-3 text-red-600"
                          : data.order_status === "Allocated"
                          ? "bg-[#e8e6cc] py-3 text-yellow-600"
                          : data.order_status === "rejected"
                          ? "bg-orange-100 py-3 text-orange-400"
                          : ""
                      }`}
                    >
                      {data.status === "completed"
                        ? data.order_status
                        : data.status}
                    </p>
                  </td>
                  <td className="py-4 px-7 text-[#000000a6] font-medium">
                    {data.status !== "completed" ? (
                      <button
                        type="submit"
                        className="text-green-500 cursor-pointer border-green-500 hover:bg-green-600 hover:text-white"
                        onClick={() => handlePopupClick(data)}
                      >
                        Allocate Vendor
                      </button>
                    ) : null}
                  </td>
                  <td className="py-4 font-medium px-6">
                    <button
                      className="border-2 border-blue-700 bg-white text-blue-700 hover:bg-blue-700 hover:text-white"
                      onClick={() => handleShowDetails(data)}
                    >
                      Show Details
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {filterList.length === 0 && (
          <div className="w-full px-6 py-6 flex justify-center  bg-gray-100">
            <p className="text-xl w-full text-black text-center">
              No data Available
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default OrderTable;
