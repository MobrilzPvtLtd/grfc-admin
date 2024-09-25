import React, { useState, useEffect } from "react";
import Report from "./Report";
import CustomerHistory from "./CustomerHistory";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendorCount } from "../../redux/features/vendorTotalCountSlice";

function ReportCount() {

  const [customer_count, setCustomer_count] = useState('');
  const [orders_count, setOrders_count] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchVendorCount()).then((response) => {
        setCustomer_count(response.payload.customer_count);
        setOrders_count(response.payload.orders_count)
    })
}, [dispatch])

  return (
    <>
    <div className=" bg-gray-100 h-screen">
        <Report />
        <div className="mx-10">
      <div className="grid grid-cols-4 gap-4">
        <div className="text-center bg-green-50 p-5  border-l-4 border-green-500">
          <h3 className="text-black font-bold">Total Customers</h3>
          <p className="text-black">{customer_count}</p>
        </div>
        <div className="text-center bg-green-50 p-5 border-l-4  border-blue-500">
          <h3 className="text-black font-bold">Total Orders</h3>
          <p className="text-black">{orders_count}</p>
        </div>
        <div className="text-center bg-green-50 p-5 border-l-4  border-blue-800">
          <h3 className="text-black font-bold">Expenses</h3>
          <p className="text-black">4200 INR</p>
        </div>
        <div className="text-center bg-yellow-50 p-5 border-l-4  border-yellow-500">
          <h3 className="text-black font-bold">Profit</h3>
          <p className="text-black">42000 INR</p>
        </div>
      </div>
      </div>
      <CustomerHistory />
      </div>
    </>
  );
}

export default ReportCount;
