/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersList } from "../../redux/features/fetchUsersSlice";
import Error from "../Error";
import Loader from "../Loader";
import { toast } from "react-toastify";
import {
  addOrder,
  orderInitialData,
  pickupUpdate,
} from "../../redux/features/updatePickupSlice";

function AllocateVendorList(props) {
  const pickupData = props.selectedData;
  const [formData, setFormData] = useState(orderInitialData);
  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchUsersList()).then((response) => {});
  }, [dispatch]);
  const {
    loading,
    data: vendorData,
    error,
  } = useSelector((state) => state.vendorDetails);
  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  }
  const handleClick = (vendor) => {
    const vendorId = vendor.id;
    const vendorName = vendor?.name;
    const id = pickupData?.id;
    const updateData = { status: "completed" };
    dispatch(pickupUpdate({ id, updateData })).then((response) => {
      const updateResponse = response;
      const items = updateResponse?.payload.data.items || [];
      if (updateResponse?.payload.status === 200) {
        props.setShowPopup(false);
        props.setshowVendorAllocated(true);
        props.setVendorName(vendorName);
        const formData = {
          pickup_id: id,
          vendor_id: vendorId,
          category: items,
        };
        dispatch(addOrder({ formData })).then((response) => {
          const orderResponse = response;
          if (
            orderResponse?.payload?.status === 201 &&
            updateResponse?.payload.status === 200
          ) {
            toast.success("Pickup Request Added Successfully");
          } else {
            toast.error("something went wrong");
          }
        });
      } else {
        toast.error("Something went wrong");
      }
    });
  };

  return (
    <>
      <div className="fixed inset-0 z-50 bg-opacity-50 bg-gray-300 flex justify-center items-center overflow-y-auto ">
        <div className="bg-white w-11/12 max-w-full h-10/12 overflow-hidden p-6 sm:p-10 rounded-lg">
          <MdOutlineCancel
            className="relative ml-auto cursor-pointer"
            style={{ color: "black" }}
            size={42}
            onClick={() => props.setShowPopup(false)}
          />
          <h1 className="font-bold text-center text-black">Vendor Allocate</h1>
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="order">
              <p className="text-black font-medium">
                For order No. # {pickupData.id}
              </p>
              <p className=" text-black font-medium">
                Address: {pickupData.area},{pickupData.pincode}
              </p>
            </div>
            <div className="">
              <div className="h-60 overflow-hidden overflow-y-auto">
                <p className="text-black text-lg ">
                  <div className=" w-full flex ">
                    <span className="w-1/4 font-bold fixed text-center mb-6 bg-white text-xl">
                      Category
                    </span>
                  </div>

                  {pickupData.pickuprequestitem__item_id__item_name.map(
                    (itemName, idx) => (
                      <li key={idx}>{itemName}</li>
                    )
                  )}
                </p>
              </div>
              <p className=" text-black pb-5">
                <span className="text-xl font-semibold ">Date & Time :</span>{" "}
                {pickupData.pickup_date},{pickupData.pickup_time}
              </p>
            </div>
          </div>
          <div className="sm:max-h-[calc(100vh - 400px)] overflow-y-auto">
            <table className="min-w-full">
              <thead className="">
                <tr className=" text-black border-2 bg-gray-100">
                  <th className="px-12 pb-6 py-8">Vendor Id</th>
                  <th className="px-12 pb-6 py-8">Vendor Name</th>
                  <th className="px-12 pb-6 py-8">Email id</th>
                  <th className="px-12 pb-6 py-8">Phone Number</th>
                  <th className="px-12 pb-6 py-8">Pincode</th>
                  {/* <th className="px-12">Status</th> */}
                  <th className="px-12 pb-6 py-8">Allocate Vendor</th>
                </tr>
              </thead>
            </table>
          </div>
          <div className="max-h-[400px] overflow-y-auto h-full">
            <table className="min-w-full">
              <tbody className="text-center ">
                {vendorData?.map((vendor, index) => {
                  return (
                    <tr className="mt-3 text-black border-2" key={index}>
                      <td className="py-8">#{vendor?.id}</td>
                      <td className="py-8">{vendor?.name}</td>
                      <td className="py-8">{vendor?.email}</td>
                      <td className="py-8">{vendor?.phone_number}</td>
                      <td className="py-8">{vendor?.pincode}</td>
                      {/* <td></td> */}
                      <td>
                        {" "}
                        <div className="cursor-pointer">
                          <button
                            type="submit"
                            className="text-green-500 cursor-pointer border-green-500 hover:bg-green-600 hover:text-white"
                            onClick={() => handleClick(vendor)}
                          >
                            Allocate Vendor
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllocateVendorList;
