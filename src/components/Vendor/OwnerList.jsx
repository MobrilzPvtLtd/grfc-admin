/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "../../redux/features/fetchUsersSlice"; // Fix import
import Error from "../Error";
import Loader from "../Loader";
import { toast } from "react-toastify";
import { pickupUpdate } from "../../redux/features/updatePickupSlice";
import { useNavigate } from "react-router-dom";

function OwnerList(props) {
  const navigate = useNavigate();
  const [vendorList, setVendorList] = useState([]);
  const pickupData = props.selectedData;
  const dispatch = useDispatch();

  const handleDetails = (value) => {
    navigate("/vendordetails", { state: value });
  };

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchUsersList()).then((response) => {});
  }, [dispatch]);
  const {
    loading,
    data: vendorData,
    error,
  } = useSelector((state) => state?.vendorDetails);

  useEffect(() => {
    if (!loading) {
      setVendorList(vendorData);
    }
  }, [loading, vendorData]);

  useEffect(() => {
    if (props.query !== "") {
      // Split the search query into individual words
      const words = props.query?.trim().toLowerCase().split(/\s+/);
      const updatedList = vendorData?.filter((item) => {
        const itemName = item.name?.toLowerCase() || "";
        const itemId = item.id?.toString().toLowerCase() || "";
        return words.every(
          (word) =>
            itemName.indexOf(word) !== -1 || itemId?.indexOf(word) !== -1
        );
      });
      setVendorList(updatedList);
    } else {
      setVendorList(vendorData);
    }
  }, [props.query, vendorData]);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  }
  const handleClick = () => {
    const id = pickupData?.id;
    const updateData = { status: "allocated" };
    dispatch(pickupUpdate({ id, updateData })).then((response) => {
      const updateResponse = response;
      if (updateResponse?.status === 201) {
        toast.success("Pickup Request Added Successfully");
      } else {
        toast.error("Something went wrong");
      }
    });
  };
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-base  text-gray-700 uppercase bg-gray-100 gray:bg-gray-700 dark:text-gray-400 border-2 ">
            <tr className="">
              <th scope="col" className=" py-6 text-black  text-center  ">
                Id
              </th>
              <th scope="col" className=" py-6 text-black text-center ">
                Owner Name
              </th>
              <th scope="col" className=" py-6 text-black text-center ">
                Email id
              </th>
              <th scope="col" className=" py-6 text-black text-center ">
                Phone Number
              </th>
              <th scope="col" className=" py-6 text-black text-center ">
                Address
              </th>
              <th scope="col" className=" py-6 text-black text-center ">
                Pets Count
              </th>
              <th scope="col" className=" py-6 text-black text-center ">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="text-center bg-white border-2">
            {vendorList?.map((vendor, index) => {
              return (
                <tr
                  className={` border-2 ${
                    index % 2 === 0 ? "bg-green-50" : ""
                  }  `}
                  key={index}
                >
                  <td className=" py-10 text-[#000000a6] font-medium text-center ">
                    #{vendor?.id}
                  </td>
                  <td className="py-10  text-[#000000a6] font-medium ">
                    <li
                      className="list-none cursor-pointer hover:text-blue-400"
                      onClick={() => handleDetails(vendor?.id)}
                    >
                      {vendor?.name}
                    </li>
                  </td>
                  <td className=" py-10 text-[#000000a6] font-medium">
                    {vendor?.email}
                  </td>
                  <td className=" py-10 text-[#000000a6] font-medium">
                    {vendor?.phone_number}
                  </td>
                  <td className=" py-10 text-[#000000a6] font-medium">
                    {vendor?.pincode}
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {vendorList?.length === 0 && (
          <div className="w-full px-6 py-6 flex justify-center  bg-gray-100">
            <p className="text-xl w-full text-black text-center">
              No data Available
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default OwnerList;
