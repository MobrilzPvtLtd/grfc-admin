import React, { useEffect, useState } from "react";
import VendorHistory from "./VendorHistory";
import { useDispatch, useSelector } from "react-redux";
import { fetchVendorReport } from "../../../redux/features/vendorReportSlice";
import Report from "../Report";
import { fetchVendorCount } from "../../../redux/features/vendorTotalCountSlice";

function VendorCount() {

    const [tableData, setTableData] = useState([]);
    const [vendorCount, setVendorCount] = useState('');
    const [pickupCount, setPickupCount] = useState('')
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchVendorReport()).then((response) => {
            setTableData(response.payload.vendor_orders_count);
        })
    }, [dispatch])


    useEffect(() => {
        dispatch(fetchVendorCount()).then((response) => {
            setVendorCount(response.payload.vendor_count);
            setPickupCount(response.payload.pickup_count)
        })
    }, [dispatch])
    
    return (
        <>
            <div className=" bg-gray-100 h-screen">
                <Report />
                <div className="mx-10">
                    <div className="grid grid-cols-4 gap-4">
                        <div className="text-center bg-green-50 p-5  border-l-4 border-green-500">
                            <h3 className="text-black font-bold">Total Vendor</h3>
                            <p className="text-black">{vendorCount}</p>
                        </div>
                        <div className="text-center bg-green-50 p-5 border-l-4  border-blue-500">
                            <h3 className="text-black font-bold">Total Pickup</h3>
                            <p className="text-black">{pickupCount}</p>
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
                <VendorHistory reportList= {tableData} />
            </div>
        </>
    );
}

export default VendorCount;
