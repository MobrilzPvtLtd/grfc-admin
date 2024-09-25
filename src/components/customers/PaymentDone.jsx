import React from 'react'
import Check from '../../assets/checkRight.png'
import { MdOutlineCancel } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


const PaymentDone = (props) => {
  const navigate=useNavigate();
  const goToHome=()=>{
      navigate("/");
  }
  return (
    <>
    <div className="fixed z-50  inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center ">
        {/* <div className="absolute inset-0  "></div> */}
        
        <div className=" bg-white relative h-auto p-10 w-1/2 m-48 flex flex-col">
         
        <MdOutlineCancel
            className="absolute top-0 right-0 cursor-pointer"
            style={{ color: "black" }}
            size={32}
            onClick={() => props.setBit(false)}
          />
        <div className="flex justify-center">
            <img src={Check} alt="" className="w-52"/>
        </div>


        <div>
            <p className="font-bold text-center">Payment is Done</p>
        </div>

        <div className="flex justify-center">
            <p>payment for order id # <span>{props.orderId}</span> of <span>{props.amount}</span> INR  is completed</p>
        </div>
        <button onClick={goToHome}>go to home</button>
        </div>
        
      </div>
        
    </>
  )
}

export default PaymentDone