import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function ProductType(props) {
  // State to handle the input value for product type
  const [productType, setProductType] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (productType.trim()) {
      alert(`Product Type "${productType}" has been added.`);
      // You can add additional logic here, like saving to a database or Redux state
      setProductType(""); // Reset the input field after submission
    } else {
      alert("Please enter a valid product type.");
    }
  };

  return (
    <div className="fixed z-50  inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
        <div className="absolute inset-0  "></div>
        <div className="bg-white relative h-auto p-10 w-1/2 m-48">
          <MdOutlineCancel
            className="absolute top-0 right-0 cursor-pointer"
            style={{ color: "black" }}
            size={32}
            onClick={() => props?.setShowPopup(false)}
          />
          <div>
      <h2 className="text-2xl font-bold mb-4">Add Product Type</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Product Type Name:
          </label>
          <input
            type="text"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter product type"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Type
        </button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default ProductType;
