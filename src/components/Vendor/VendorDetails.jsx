import React, { useState } from "react";
import { AiOutlineFileSearch } from "react-icons/ai";
import { UsersListSlice } from "../../redux/features/fetchUsersSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersDetails } from "../../redux/features/fetchUsersDetails";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import VendorDetailsList from "./VendorDetailsList";

const VendorDetails = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [vendorData, setVendorData] = useState([]);
  const [query, setquery] = useState();
  const location = useLocation();
  const dispatch = useDispatch();
  const receivedData = location?.state;
  useEffect(() => {
    dispatch(fetchUsersDetails(receivedData)).then((response) => {
      setVendorData(response?.payload?.data);
    });
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(UsersListSlice()).then((response) => {});
  }, [dispatch]);
  const {
    loading,
    data: vendorList,
    error,
  } = useSelector((state) => state.vendorDetails);
  const reducedData = vendorData
    ? Object.values(vendorData)?.reduce((accumulator, data) => {
        if (accumulator[data.id]) {
          // If the id already exists in the accumulator, merge the data
          accumulator[data.id] = {
            ...accumulator[data.id],
            ...accumulator[data.id],
            pickup_id__pickuprequestitem__item_id__item_name: [
              ...accumulator[data.id]
                .pickup_id__pickuprequestitem__item_id__item_name,
              data.pickup_id__pickuprequestitem__item_id__item_name,
            ],
            pickup_id__pickuprequestitem__item_id__rate: [
              ...accumulator[data.id]
                .pickup_id__pickuprequestitem__item_id__rate,
              data.pickup_id__pickuprequestitem__item_id__rate,
            ],
          };
        } else {
          // If the id doesn't exist in the accumulator, add a new entry
          accumulator[data.id] = { ...data };
          accumulator[
            data.id
          ].pickup_id__pickuprequestitem__item_id__item_name = [
            data.pickup_id__pickuprequestitem__item_id__item_name,
          ];
          accumulator[data.id].pickup_id__pickuprequestitem__item_id__rate = [
            data.pickup_id__pickuprequestitem__item_id__rate,
          ];
        }

        return accumulator;
      }, [])
    : [];
  const selectedVendor = vendorList?.filter((item) => {
    return item?.id === receivedData;
  });
  const handleInputClick = () => {
    setIsFocused(true);
  };

  return (
    <>
      <div className="p-10 w-full bg-gray-100">
        <div className="px-2 py-4">
          <p className="text-5xl font-semibold text-black">
            {selectedVendor[0]?.name}
          </p>
        </div>

        <div className="flex w-full justify-between py-6">
          <div className="flex flex-col justify-center">
            <p className="py-2 text-black">
              <span className="font-medium text-black">Vendor ID :</span> #
              {selectedVendor[0].id}
            </p>
            <p className="text-black">
              <span className="font-medium text-black">Vendor Name:</span>
              {selectedVendor[0]?.name}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-black">
              <span className="font-medium text-black">Pincode :</span>
              {selectedVendor[0]?.pincode}
            </p>
          </div>
          <div className="flex flex-col justify-center">
            <p className="py-2 text-black">
              {" "}
              <span className="font-medium">Phone Number : </span>
              {selectedVendor[0]?.phone_number}
            </p>
            <p className="text-black">
              {" "}
              <span className="font-medium text-black">Email Id :</span>{" "}
              {selectedVendor[0]?.email}
            </p>
          </div>
        </div>

        <div className=" w-full flex justify-between py-6">
          <div className=" w-[20%] text-center bg-green-50 p-5  border-l-4 border-green-500 rounded-md ">
            <h3 className="text-black font-bold ">Total Pickup</h3>
            <p className="text-black">990</p>
          </div>
          <div className="w-[20%] text-center bg-[#F2F8FF] p-5  border-l-4 border-blue-500 rounded-md ">
            <h3 className="text-black font-bold">Total Buy</h3>
            <p className="text-black">990</p>
          </div>
          <div className="w-[20%] text-center bg-[#FFF4F4] p-5  border-l-4 border-red-500 rounded-md ">
            <h3 className="text-black font-bold">Total Sell</h3>
            <p className="text-black">990</p>
          </div>
        </div>

        <div className="py-6">
          <p className="text-3xl text-black">All Pickup History</p>
        </div>

        <div
          className={`lg:w-[80%] bg-white flex gap-2 py-2 px-4 my-6 border-2   rounded-2xl ${
            isFocused ? "border-2 border-black " : ""
          }`}
          tabIndex={0}
        >
          <div className=" flex justify-center items-baseline pt-1 text-black">
            <AiOutlineFileSearch
              className=""
              style={{ width: "30px", height: "30px" }}
            />
          </div>

          <input
            type="text"
            className="w-full bg-white outline-none text-black"
            placeholder="Search By Order Id or name"
            name="search"
            id="search"
            value={query}
            onChange={(e) => setquery(e.target.value)}
            onClick={handleInputClick}
            onBlur={() => setIsFocused(false)}
          />
        </div>

        <div>
          <VendorDetailsList query={query} vendorDetails={reducedData} />
        </div>
      </div>
    </>
  );
};

export default VendorDetails;
