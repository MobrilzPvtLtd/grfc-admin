import React, {useState} from "react";
import { Link } from "react-router-dom";

function Report() {

  const [activeButton, setActiveButton] = useState('customer');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <>
      <div className="w-full bg-gray-100">
        <div className=" py-3 mx-10">
          <h1 className="text-4xl py-10 text-black font-semibold text-start">Report</h1>
          <div className="flex mb-10">
            <div className="w-full flex justify-between">
            <div className="flex justify-center items-center">
              <Link
                to="/customer-report"
                onClick={() => handleButtonClick('customer')}
                className={`button w-[200px] p-4 flex justify-center text-center rounded-2xl hover:text-white ${activeButton === 'customer' ? 'bg-[#27AE76] text-white' : 'bg-gray-300 text-black hover:text-black'}`}
              >
                Customer Report
              </Link>
              <Link
                to="/vendor-report"
                onClick={() => handleButtonClick('vendor')}
                className={`button mx-5 p-4 w-[200px] rounded-2xl text-center ${activeButton === 'vendor' ? 'bg-[#27AE76] text-white hover:text-white' : 'bg-gray-300 text-black hover:text-black'}`}
              >
                Vendor Report
              </Link>
            </div>
              <div className="flex flex-wrap justify-end mr-20">
                <div className="flex px-4 justify-center items-center">
                  <p className="text-black px-4 text-lg">From</p>
                  <input
                    type="date"
                    className="w-60 h-10 bg-white text-black p-2 rounded-md mt-2"
                    name="fromdate"
                    id="fromdate"
                  />
                </div>
                <div className="flex px-4 justify-center items-center">
                  <p className="text-black px-4 text-lg">To</p>
                  <input
                    type="date"
                    className="w-60 h-10 bg-white text-black p-2 rounded-md mt-2"
                    name="fromdate"
                    id="fromdate"
                  />
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Report;
