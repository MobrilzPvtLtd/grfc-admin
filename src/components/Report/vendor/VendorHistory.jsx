import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import List from "../../ordersList/List";
const Heading = [
    "Vendor ID",
    "Vendor name",
    "Email Id",
    "Phone Number",
    "Area",
    "Total pickups",
];
function VendorHistory(props) {
    const { reportList } = props;
    return (
        <>
            <div className="">
                <div className="mx-10 pb-10">
                    <h2 className="text-2xl my-10 text-black font-bold text-start">Vendor Order History</h2>
                    <div className="flex relative my-10">
                        <AiOutlineSearch className=" search-icon absolute top-3 left-4 w-5 h-5" style={{ color: "black" }} />
                        <input
                            type="text"
                            className="px-16 py-3 rounded-xl w-10/12 bg-white text-black"
                            placeholder="Search By Order Id or name"
                            name="search"
                            id="search"
                        />
                    </div>
                    <table className="w-full text-sm text-left text-white-500 dark:text-white-400">
                        <thead className="text-base text-white-700 uppercase bg-white-100 bg-white-700 dark:text-white-400 border-2 ">
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
                        <tbody className="bg-white border-2 ">
                            {reportList.map((data, index) => {
                                return (
                                    <tr
                                        key={index}
                                        className={` border-2 ${index % 2 === 0 ? "bg-green-50" : ""}`}
                                    >
                                        <td className="px-6 py-4 text-[#000000a6] font-medium pl-14">
                                            #{index}
                                        </td>
                                        <td className="px-6 py-4 text-[#000000a6] font-medium">
                                            {data?.vendor_name}
                                        </td>
                                        <td className="px-6 py-4 text-[#000000a6] font-medium">
                                            {data?.vendor_email}
                                        </td>
                                        <td className="px-6 py-4 text-[#000000a6] font-medium">
                                            {data?.vendor_phone_number}
                                        </td>
                                        <td className="px-6 py-4 text-[#000000a6] font-medium">
                                            {data?.vendor_area}
                                        </td>
                                        <td className="px-6 py-4 text-[#000000a6] font-medium">
                                            {data?.order_count}
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default VendorHistory;
