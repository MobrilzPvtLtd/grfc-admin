import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Heading = [
  "Customer ID",
  "Customer name",
  "Email Id",
  "Address",
  "Phone Number",
  "Last Pickup date",
  "Paid amount",
  "Mode of payment",
];
function CustomerHistory() {
  return (
    <>
      <div className="mx-10">
        <h2 className="text-2xl my-10 text-black font-bold">Customer Order History</h2>
        <div className="relative flex my-10">
          <AiOutlineSearch className="search-icon absolute top-3 left-4 w-5 h-5" style={{ color: "black" }} />
          <input
            type="text"
            className="px-16 py-3 rounded-xl w-10/12 bg-white text-black"
            placeholder="Search By Order Id or name"
            name="search"
            id="search"
          />
        </div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-base   text-gray-700 uppercase bg-gray-100 gray:bg-gray-700 dark:text-gray-400 border-2 ">
            <tr className="">
              {Heading?.map((heading, index) => {
                return (
                  <th key={index} scope="col" className="px-6 py-6  text-black ">
                    {heading}
                  </th>
                );
              })}
            </tr>
          </thead>
          {/* <tbody className="bg-white border-2 ">
            {[...filterList]?.reverse().map((data, index) => {
              return (
                <tr
                  key={index}
                  className={` border-2 ${index % 2 === 0 ? "bg-green-50" : ""}`}
                >
                  <td className="px-6 py-4 text-[#000000a6] font-medium pl-14">
                    #{data?.id}
                  </td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    {data?.user__name}
                  </td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    <ul className="">
                      {data.pickuprequestitem__item_id__item_name.map(
                        (itemName, idx) => (
                          <li className=" text-[#000000a6] font-medium" key={idx}>
                            {itemName}
                          </li>
                        )
                      )}
                    </ul>
                  </td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    <ul>
                      {data.pickuprequestitem__weight.map((itemWeight, idx) => (
                        <li key={idx} className="pl-6">
                          {itemWeight}
                        </li>
                      ))}
                    </ul>
                  </td>

                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    {data.pickup_date}
                  </td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    {data.pickup_time}
                  </td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    {data.orderitems__item_id__item_name}
                  </td>
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    {data.orderitems__quantity}
                  </td>
                  <td className=" py-4 text-[#000000a6] font-medium ">
                    <p
                      className={`w-28 text-center ${data.order_status === "completed" ||
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
                  <td className="px-6 py-4 text-[#000000a6] font-medium">
                    {data.status !== "completed" ? (
                      <button
                        type="submit"
                        className="text-green-500 cursor-pointer border-green-500"
                        onClick={() => handlePopupClick(data)}
                      >
                        Allocate Vendor
                      </button>
                    ) : null}
                  </td>
                </tr>
              );
            })}
          </tbody> */}
        </table>
      </div>
    </>
  );
}

export default CustomerHistory;
