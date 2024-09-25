import React, { useState } from "react";

const CustomerListTable = ({
  customerList,
  handleWalletClick,
  disabledCustomers,
  idMap,
}) => {
  return (
    <div className="">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-base  text-gray-700 uppercase bg-gray-100 gray:bg-gray-700 dark:text-gray-400 border-2 ">
          <tr className="text-black ">
            <th scope="col" className=" py-6 text-black text-center">
              Customer Id
            </th>
            <th scope="col" className=" py-6 text-black text-center ">
              Customer name
            </th>
            <th scope="col" className=" py-6 text-black text-center ">
              Email Id
            </th>
            <th scope="col" className=" py-6 text-black text-center ">
              Phone Number
            </th>
            <th scope="col" className=" py-6 text-black text-center ">
              Balance Due
            </th>
            <th scope="col" className=" py-6 text-black text-center ">
              upi id
            </th>
            <th scope="col" className="py-6 text-black  text-center">
              Payment
            </th>
          </tr>
        </thead>
        <tbody className="text-center bg-white border-2 ">
          {customerList?.map((customer, index) => {
            return (
              <tr
                className={`text-black border-2 ${
                  index % 2 === 0 ? "bg-blue-50" : ""
                }`}
                key={index}
              >
                <td className="px-6 py-10 text-[#000000a6] font-medium ">
                  #{customer?.user.id}
                </td>
                <td className="px-6 py-10 text-[#000000a6] font-medium ">
                  {customer?.user.name}
                </td>
                <td className="px-6 py-10 text-[#000000a6] font-medium ">
                  {customer?.user.email}
                </td>
                <td className="px-6 py-10 text-[#000000a6] font-medium ">
                  {customer?.user.phone_number}
                </td>
                <td className="px-6 py-10 text-[rgba(0,0,0,0.65)] font-medium ">
                  {disabledCustomers[customer?.user.id]
                    ? ""
                    : (idMap.get(customer?.user.id) != null) == true
                    ? idMap.get(customer?.user.id).total_amount
                    : ""}
                </td>
                <td className="px-6 py-10 text-black">
                  {customer?.user.upiId}
                </td>
                <td className="px-6 py-10 text-black">
                  {disabledCustomers[customer?.user.id] ? (
                    ""
                  ) : idMap.get(customer?.user.id) != null ? (
                    <button
                      type="submit"
                      className="bg-green-200  "
                      onClick={() =>
                        handleWalletClick(
                          idMap.get(customer?.user.id).order_id,
                          customer?.user.id
                        )
                      }
                      disabled={disabledCustomers[customer?.user.id]}
                    >
                      {disabledCustomers[customer?.user.id]
                        ? "Adding to wallet..."
                        : "Add to wallet"}
                    </button>
                  ) : (
                    ""
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {customerList?.length === 0 && (
        <div className="w-full px-6 py-6 flex justify-center  bg-gray-100">
          <p className="text-xl w-full text-black text-center">
            No data Available
          </p>
        </div>
      )}
    </div>
  );
};

export default CustomerListTable;
