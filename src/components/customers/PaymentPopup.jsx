import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

function PaymentPopup() {
  return (
    <div>
        <div className="fixed z-50  inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
        <div className="absolute inset-0 "></div>
        <div className="bg-white relative h-auto p-10 w-1/2 m-48">
          <MdOutlineCancel
            className="absolute top-0 right-0 cursor-pointer"
            style={{ color: "black" }}
            size={32}
            
          />
          <h1>payment success</h1>
        </div>
      </div>
    </div>
  )
}

export default PaymentPopup