import axios from "axios";
import React, { useState } from "react";
import { MdOutlineCancel } from "react-icons/md";

function AddSubCategory({ setShowPopup }) {
  // State to handle inputs, loading state, and errors
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const token = localStorage.getItem("AuthToken"); // Fetch token from localStorage
    if (!token) {
      alert("Authentication token is missing. Please log in again.");
      return;
    }

    if (!name.trim()) {
      alert("Please enter a valid sub-category name.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name.trim()); // Append name to formData
    if (image) {
      formData.append("image", image); // Append image if it's selected
    }

    try {
      setLoading(true); // Start loading
      // Make an asynchronous request
      const response = await axios.post(
        "http://localhost:3002/api/subcategory",
        formData,
        {
          headers: {'Content-Type': 'multipart/form-data', Authorization: `Bearer ${token}` }, // Ensure token format matches backend
        }
      );

      // Handle the response
      if (response.status === 200 || response.status === 201) {
        console.log("Sub-category created successfully:", response.data);
        alert("Sub-category created successfully!");
        setName(""); // Reset name
        setImage(null); // Reset image
        if (setShowPopup) setShowPopup(false); // Close popup if function exists
      } else {
        alert("An error occurred while creating the sub-category.");
      }
    } catch (error) {
      console.error("Error creating sub-category:", error.response || error.message);
      alert(
        `An error occurred: ${
          error.response?.data?.message || "Please try again later."
        }`
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Function to handle image file selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="fixed z-50 inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
      <div className="absolute inset-0"></div>
      <div className="bg-white relative h-auto p-10 w-1/2 m-48 shadow-lg rounded-lg">
        <MdOutlineCancel
          className="absolute top-0 right-0 cursor-pointer"
          style={{ color: "black" }}
          size={32}
          onClick={() => (setShowPopup ? setShowPopup(false) : null)}
        />
        <div>
          <h2 className="text-2xl font-bold mb-4">Add Sub-Category</h2>
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
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
              className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Sub-Category"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddSubCategory;
