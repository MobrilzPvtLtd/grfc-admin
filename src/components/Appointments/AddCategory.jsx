import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { createNewCategory } from "../../redux/features/categorySlice";

function AddCategory() {
  // State for category name and image
  let token = localStorage.getItem("AuthToken")
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const dispatch = useDispatch();
  
  

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Log the category name and image before submission
    console.log("Category Name:", categoryName);
    console.log("Selected Image:", image);
    // Create FormData object
    const formData = new FormData();
    formData.append("name", categoryName);
    formData.append("productImages", image); // Only appending a single image
    alert("form data add category" , formData)
    
    if (!categoryName.trim() || !image) {
      alert("Please enter a valid category name and select an image.");
      return;

    }

    
    
    // Log FormData contents
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value); // Log each entry in FormData
    }
   
    // Dispatching action with formData and token
    dispatch(createNewCategory({ formData, token }));

    // Reset input fields after submission
    // setCategoryName("");
    // setImage(null);
   
  };

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the first file
    console.log("Selected file:", file); // Log the selected file
    setImage(file);
  };

  return (
    <div className="fixed z-50 inset-0 text-white flex bg-opacity-50 bg-gray-300 justify-center items-center">
      <div className="absolute inset-0"></div>
      <div className="bg-white relative h-auto p-10 w-1/2 m-48">
        <div>
          <h2 className="text-2xl font-bold mb-4">Add Category</h2>
          <form onSubmit={handleSubmit}>
            {/* Category Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Category Name:
              </label>
              <input
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter category name"
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
              Add Category
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddCategory;
