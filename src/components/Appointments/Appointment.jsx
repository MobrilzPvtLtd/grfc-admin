import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import AddCategory from "./AddCategory"; // Assuming AddCategory component is in the same folder
import AddSubCategory from "./AddSubCategory";

const appointments = [
  {
    ownerName: "John Doe",
    petName: "Buddy",
    date: "2024-09-26",
    time: "10:00 AM",
    email: "john@example.com",
    mobileNumber: "1234567890",
    diseaseDescription: "Skin infection",
    status: "Completed",
  },
  {
    ownerName: "Jane Smith",
    petName: "Bella",
    date: "2024-09-27",
    time: "12:00 PM",
    email: "jane@example.com",
    mobileNumber: "0987654321",
    diseaseDescription: "Ear infection",
    status: "Pending",
  },
  // Add more appointments as needed
];

function Appointments() {
  // State to manage the visibility of the popups
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [showSubcategoryPopup, setShowSubcategoryPopup] = useState(false);

  return (
    <div className="overflow-x-auto m-20 text-black border-gray-300 shadow-xl md:border-none">
      <h2 className="text-4xl p-10">Appointments</h2>

      <div className="flex justify-end pb-10">
        <button
          onClick={() => setShowCategoryPopup(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Add Category
        </button>

        <button
          onClick={() => setShowSubcategoryPopup(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add Subcategory
        </button>
      </div>

      <hr />

      {/* Table for Appointments */}
      <table className="min-w-full border-collapse block md:table">
        <thead className="block md:table-header-group">
          <tr className="border border-gray-300 md:border-none block md:table-row">
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Owner Name
            </th>
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Pet Name
            </th>
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Date
            </th>
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Time
            </th>
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Email
            </th>
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Mobile Number
            </th>
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Status
            </th>
            <th className="text-left p-2 md:border md:border-gray-300 block md:table-cell">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="block md:table-row-group">
          {appointments.map((appointment, index) => (
            <tr
              key={index}
              className="border border-gray-300 md:border-none block md:table-row hover:bg-gray-100"
              title={`Disease Description: ${appointment.diseaseDescription}`}
            >
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {appointment.ownerName}
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {appointment.petName}
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {appointment.date}
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {appointment.time}
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {appointment.email}
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                {appointment.mobileNumber}
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                <span className="py-1 px-2 rounded-full text-black">
                  {appointment.status}
                </span>
              </td>
              <td className="p-2 md:border md:border-gray-300 block md:table-cell">
                <BsThreeDotsVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup for Add Category */}
      {showCategoryPopup && (
        <AddCategory setShowPopup={setShowCategoryPopup} type="Category" />
      )}

      {/* Popup for Add Subcategory */}
      {showSubcategoryPopup && (
        <AddSubCategory setShowPopup={setShowSubcategoryPopup} type="Subcategory" />
      )}
    </div>
  );
}

export default Appointments;
