import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function AddSubCategory(props) {
  // State to handle the input values for subcategory name and image
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      alert(`Sub-Category "${name}" has been added.`);

      // Log the name and image for demonstration (you can handle image uploading here)
      console.log("Sub-Category Name:", name);
      console.log("Selected Image:", image);

      setName(""); // Reset the input fields after submission
      setImage(null); // Reset the image input
    } else {
      alert("Please enter a valid sub-category name.");
    }
  };

  // Function to handle image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="fixed z-50 inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
      <div className="absolute inset-0"></div>
      <div className="bg-white relative h-auto p-10 w-1/2 m-48">
        <MdOutlineCancel
          className="absolute top-0 right-0 cursor-pointer"
          style={{ color: "black" }}
          size={32}
          onClick={() => props?.setShowPopup(false)}
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Add Sub-Category</h2>
          <form onSubmit={handleSubmit}>
            {/* Subcategory Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Sub-Category Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter sub-category name"
              />
            </div>

            {/* Image Upload Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Upload Image:
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add Sub-Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSubCategory;
