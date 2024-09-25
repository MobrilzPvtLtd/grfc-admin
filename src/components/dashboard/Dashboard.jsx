import AccordingToOrder from "./AccordingToOrder";
// import { Layout } from "../Layout/Layout";
// import LineChart from "./LineChart";
// import { Chart } from "chart.js";
import { Request } from "./Request";
import Header from "../Header/Navigation";
import TotalKabadInKgs from "./TotalKabadInKgs";
import VendorNumber from "./VendorNumber";
// import  Chart  from "./Chart";

export function Dashboard() {
  return (
    <>
      {/* <Chart/> */}

      <div className="main px-10 py-10 rounded-xl">
        <h2 className="text-4xl text-black pt-6 pb-10">Dashboard</h2>
        <div className="mx-8 flex">
          <div className="w-full gap-10 mx-10 flex flex-col">
            {/* <div className="bg-white text-black">
              <LineChart />
            </div> */}
            <div className="text-black">
              <TotalKabadInKgs />
            </div>
          </div>

          <div className="w-full  flex flex-col ">
            <div className="flex  flex-col">
              <Request />
              <VendorNumber />
            </div>
            <div className=" text-center gap-8 mt-6  md:text-sm xl:text-base  p-5 flex   rounded-2xl">
              <div className=" w-full text-black flex justify-between">
                <AccordingToOrder
                  name="customer"
                  icon="HiUsers"
                  amount={10000}
                  percentage={10}
                />
              </div>

              <div className="">
                <AccordingToOrder
                  name="customer"
                  icon="AiOutlineShoppingCart"
                  amount={10000}
                  percentage={10}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
