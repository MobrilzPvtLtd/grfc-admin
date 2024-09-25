import React, { useState, useEffect } from "react";

const VendorDetailsList = ({ vendorDetails, query }) => {
  const [vendorList, setVendorList] = useState(vendorDetails);

  useEffect(() => {
    setVendorList(vendorDetails);
  }, [vendorDetails]);

  useEffect(() => {
    if (query !== "") {
      const words = query?.trim().toLowerCase().split(/\s+/); // Split the search query into individual words
      const updatedList = vendorDetails?.filter((item) => {
        const itemName = item?.pickup_id__user__name?.toLowerCase() || "";
        const itemId = item.id?.toString().toLowerCase() || "";
        return words?.every(
          (word) =>
            itemName?.indexOf(word) !== -1 || itemId?.indexOf(word) !== -1
        );
      });

      setVendorList(updatedList);
    } else {
      setVendorList(vendorDetails);
    }
  }, [query]);

  return (
    <div className="overflow-x-auto">
      <table className=" w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className=" text-base  text-gray-700 uppercase bg-gray-100 gray:bg-gray-700 dark:text-gray-400 border-2 ">
          <tr className="">
            <th scope="col" className="px-20 py-3 text-center  text-black  ">
              Order Id
            </th>
            <th scope="col" className="px-20 py-3 text-center   text-black">
              Customer
            </th>
            <th scope="col" className="px-20 py-3 text-center  text-black">
              Address
            </th>
            <th scope="col" className="px-20 py-3 text-center  text-black">
              Pickup date
            </th>
            <th scope="col" className="px-20 py-3 text-center  text-black">
              Time
            </th>
            <th scope="col" className="px-20 py-3 text-center  text-black">
              Picked Category
            </th>
            <th scope="col" className="px-20 py-3 text-center  text-black">
              Picked Rate
            </th>
          </tr>
        </thead>
        <tbody className="text-center bg-white border-2"></tbody>
        {vendorList?.map((vendor, index) => {
          return (
            <tr className={`  border-2 `} key={index}>
              <td className=" text-center py-6   text-[#000000a6] font-medium  ">
                #{vendor?.id}
              </td>
              <td className=" py-6  text-center text-[#000000a6] font-medium ">
                {vendor.pickup_id__user__name}
              </td>
              <td className="py-6 text-center  text-[#000000a6] font-medium">
                {vendor.pickup_id__flat_number},{vendor.pickup_id__area},
                {vendor.pickup_id__city},{vendor.pickup_id__state}
              </td>
              <td className="py-6 text-center text-[#000000a6] font-medium">
                {vendor.pickup_id__pickup_date}
              </td>
              <td className="py-6 text-center text-[#000000a6] font-medium">
                {vendor.pickup_id__pickup_time}
              </td>
              <td className="py-6 text-center text-[#000000a6] font-medium">
                <ul>
                  {vendor.pickup_id__pickuprequestitem__item_id__item_name.map(
                    (itemName, idx) => (
                      <li
                        className="px-2  text-[#000000a6] font-medium"
                        key={idx}
                      >
                        {itemName}
                      </li>
                    )
                  )}
                </ul>
              </td>
              <td className="py-6 text-center text-[#000000a6] font-medium">
                <ul>
                  {vendor.pickup_id__pickuprequestitem__item_id__rate.map(
                    (itemWeight, idx) => (
                      <li key={idx}>{itemWeight}</li>
                    )
                  )}
                </ul>
              </td>
            </tr>
          );
        })}
        {vendorList.length === 0 && (
          <tr className="border-2">
            <td
              className="text-center text-black py-6 px-6 text-xl"
              colSpan="7"
            >
              No data Available
            </td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default VendorDetailsList;
