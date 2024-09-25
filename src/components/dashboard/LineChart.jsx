// /* eslint-disable no-unused-vars */
// import React from "react";
// import {CanvasJSChart} from 'canvasjs-react-charts'


// const LineChart = () => {
//   const options = {
//     animationEnabled: true,
//     title: {
//       text: "Monthly Sales - 2017",
//     },
//     axisX: {
//       valueFormatString: "MMM",
//     },
//     axisY: {
//       title: "Sales (in Rupees)",
//       prefix: "₹",
//     },
//     data: [
//       {
//         yValueFormatString: "$#,###",
//         xValueFormatString: "MMMM",
//         type: "spline",
//         lineColor: "green",
//         dataPoints: [
//           { x: new Date(2017, 0), y: 25060 },
//           { x: new Date(2017, 1), y: 27980 },
//           { x: new Date(2017, 2), y: 42800 },
//           { x: new Date(2017, 3), y: 32400 },
//           { x: new Date(2017, 4), y: 35260 },
//           { x: new Date(2017, 5), y: 33900 },
//           { x: new Date(2017, 6), y: 40000 },
//           { x: new Date(2017, 7), y: 52500 },
//           { x: new Date(2017, 8), y: 32300 },
//           { x: new Date(2017, 9), y: 42000 },
//           { x: new Date(2017, 10), y: 37160 },
//           { x: new Date(2017, 11), y: 38400 },
//         ],
//       },
//     ],
//   };

//   return (
//     <>
//     <div className="px-10 py-4">
//       <div className="button flex justify-between pt-6">
//         <div className=' flex gap-4'>
//           <div>
//           <button
//             type="submit"
//             className="border-2 text-center shadow-lg px-6 bg-green-200 "
//           >
//             Buy
//           </button>
//           </div>

//           <div className=''>
//             <button
//               type="submit"
//               className="border-2 text-center  shadow-lg px-6 "
//             >
//               sell
//             </button>
//           </div>
//         </div>
//         <div className="flex justify-evenly mb-10">
         
//           <div className="radio flex  ">
//             <div className='mx-2'>
//             <input type="radio" className=" " name="Daily" id="daily" />
//            <span className='px-2'> Daily</span>
//             </div >
//             <div className='mx-2'>
//             <input type="radio" className=" " name="Monthly" id="daily" />
//            <span className='px-2'> Monthly</span>
//             </div>
//             <div className='mx-2'>
//             <input type="radio" className=" " name="Yearly" id="daily" />
//            <span className='px-2'> Yearly</span>
//             </div>
            
          
//           </div>
//         </div>
//       </div>
//       <div className='pt-10'>
//       <CanvasJSChart options={options} className="font-thin"  />
//       </div>
     
      
//       {/* You can get reference to the chart instance using onRef. This allows you to access all chart properties and methods */}
//     </div>
//     <div className='w-full flex justify-center mb-6'>
//     <p className=' font-semibold text-2xl'>April 2023 - March 2024</p>
//   </div>
//   </>
//   );
// };

// export default LineChart;
