
import React from "react";
import { TEChart } from "tw-elements-react";

export default function ChartBar() {
  return (
<TEChart
  type="bar"
  data={{
    labels: [
      "January", "February", "March", "April", "May", "June", "July", 
      "August", "September", "October", "November", "December",
    ],
    datasets: [
      {
        label: "Orders",
        data: [2112, 2343, 2545, 3423, 2365, 1985, 987, 2545, 3423, 2365, 1985, 987],
        backgroundColor: "rgba(66, 133, 244, 0.5)", // You can customize the bar color
      },
    ],
  }}
  options={{
    responsive: true, 
    maintainAspectRatio: false, 
    scales: {
      x: {
        
      },
      y: {
        beginAtZero: true, 
      },
    },
    plugins: {
      legend: {
        position: "top", 
      },
    },
  }}
 
/>

      
  );
}










// import React,{useState} from 'react'
// import Chart from "react-apexcharts";


//  const DashChart = () => {
//     const [state,setState]=useState(
//         {
//             chart: {
//               type: 'line'
//             },
//             series: [{
//               name: 'sales',
//               data: [30,40,35,50,49,60,70,91,125]
//             }],
//             xaxis: {
//               categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
//             }
//           }
//     )
//   return (
//     <>
//     <div className="row">
//           <div className="mixed-chart">
//             <h1>hhhh</h1>
//             <Chart
//               options={state.options}
//               series={state.series}
//               type="bar"
//               width="500"
//             />
//           </div>
//         </div>
//     </>
//   )
// }
// export default DashChart;

