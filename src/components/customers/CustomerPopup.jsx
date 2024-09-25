import React, { useState, useEffect } from "react";
import { MdOutlineCancel } from "react-icons/md";
import { users } from "../../redux/api";
import { useDispatch } from "react-redux";
import {paySuccessful } from '../../redux/features/updatePickupSlice'
import {payTransact} from '../../redux/features/updatePickupSlice'

function CustomerPopup(props) {
  const dispatch = useDispatch();
  const [status,setStatus]=useState({ order_status: "completed" })
  const [transaction,setTransaction]=useState("");
  const data = props.data;
  // data.transactionId=transaction
  const id=props.data.userId
  useEffect(()=>{
    data.transactionId=transaction
  },[transaction])
  const handleClick = async() => {
    props.setShowPopup(false);
    let status;
    let status2;
    // data.transaction_id=transaction;
    await dispatch(paySuccessful({data:status,id})).then((response) => {
      status2=response.payload.status;
    }); await dispatch(payTransact({data:data})).then((response) => { 
    status= response.payload.status;
    });

    if(status==201 &&status2==200){
      props.setBit(true);
    }

  };
  return (
    <>
      <div className="fixed z-50  inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
        <div className="absolute inset-0  "></div>
        <div className="bg-white relative h-auto p-10 w-1/2 m-48">
          <MdOutlineCancel
            className="absolute top-0 right-0 cursor-pointer"
            style={{ color: "black" }}
            size={32}
            onClick={() => props.setShowPopup(false)}
          />
          <div>
            <h1 className="text-2xl text-center font-bold mb-10 text-black">
              Payment
            </h1>
            <label htmlFor="email address" className="text-black font-semibold">
              Method of Payment
            </label>
            <br />
            <input
              type="text"
              name="payment"
              value="UPI"
              className="inputCommonCss bg-white text-black"
              placeholder=""
              required
            />
            <label htmlFor="email address" className="text-black font-semibold">
              UPI Id
            </label>
            <br />
            <input
              type="email"
              name="upi"
              className="inputCommonCss bg-white text-black"
              placeholder="Enter UPI Id"
              value={props.upi}
              required
              readOnly
            />
            <label htmlFor="email address" className="text-black font-semibold">
              Amount
            </label>
            <br />
            <input
              type="text"
              name="payment"
              value={data.total_amount}
              className="inputCommonCss bg-white text-black"
              placeholder="Enter amount"
              required
            />

            <label htmlFor="email address" className="text-black font-semibold">
              Transaction Id
            </label>
            <br />
            <input
              type="text"
              name="payment"
              value={transaction}
              onChange={(e)=>setTransaction(e.target.value)}
              className="inputCommonCss bg-white text-black"
              placeholder="Enter Transaction Id"
              required
            />

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 bg-[#27AE76] text-white"
                onClick={() => handleClick()}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerPopup;
