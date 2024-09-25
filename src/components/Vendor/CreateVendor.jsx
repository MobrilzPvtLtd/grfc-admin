/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineCancel } from "react-icons/md";
import {
  createNewVendor,
  vendorInitialState,
} from "../../redux/features/createVendorslice";
import Loader from "../Loader";
import Error from "../Error";
import { toast } from "react-toastify";
function CreateVendor(props) {
  const dispatch = useDispatch();
  const [vendorForm, setVendorForm] = useState(vendorInitialState);
  const { name, email, phone_number, pincode, password } = vendorForm;
  const [validationErrors, setValidationErrors] = useState(vendorInitialState);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVendorForm({ ...vendorForm, [name]: value });
    setValidationErrors({ ...validationErrors, [name]: "" });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const newValidationErrors = {};
    if (!name.trim()) {
      newValidationErrors.name = "Please enter a valid name";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newValidationErrors.name =
        "Name can only contain alphabetical characters";
    }
    if (!name.trim()) {
      newValidationErrors.name = "Please enter a valid name";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newValidationErrors.name =
        "Name can only contain alphabetical characters";
    } else {
      const cleanedName = name.replace(/\s+/g, " ").trim();
      setVendorForm((prevdata) => ({
        ...prevdata,
        name: cleanedName,
      }));
    }
    if (!email) {
      newValidationErrors.email = "Please enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newValidationErrors.email = "Please enter a valid email address";
    }
    if (!phone_number) {
      newValidationErrors.phone_number = "Please enter a phone number";
    } else if (!/^\d{10}$/.test(phone_number)) {
      newValidationErrors.phone_number =
        "Please enter a valid 10-digit phone number";
    }
    if (!pincode) {
      newValidationErrors.pincode = "Please enter a pincode";
    } else if (!/^\d{6}$/.test(pincode)) {
      newValidationErrors.pincode = "Please enter a valid 6-digit pincode";
    }
    if (!password) {
      newValidationErrors.password = "Please enter a valid password";
    }

    if (Object.keys(newValidationErrors).length > 0) {
      setValidationErrors(newValidationErrors);
      return;
    }
    try {
      if (name && email && phone_number && pincode && password) {
        dispatch(createNewVendor({ FormData: vendorForm })).then((response) => {
          const { loading, payload, error } = response;
          if (loading) {
            return <Loader />;
          }
          if (error) {
            toast.error("Check credentials");
            return <Error />;
          }
          if (payload.status === 200 || payload.status === 201) {
            localStorage.setItem("AuthToken", payload.data.token);
            toast.success("Vendor Add successfully");
            props.setShowPopup(false);
          } else {
            toast.error("Check credentials", error);
          }
        });
      }
    } catch (e) {
      toast.error("Check credentials");
      return e;
    }
  };
  return (
    <>
      <div className="fixed z-50  inset-0 flex bg-opacity-50 bg-gray-300 justify-center items-center">
        <div className="absolute inset-0 "></div>
        <div className="bg-white relative h-auto p-10 w-[600px] m-96 ">
          <MdOutlineCancel
            className="absolute top-6 right-6 cursor-pointer"
            style={{ color: "black", height: "40px", width: "40px" }}
            size={32}
            onClick={() => props.setShowPopup(false)}
          />
          <h1 className="text-center text-black text-3xl">Add Vendor</h1>
          <div className="form ">
            <form action="" className="" onSubmit={handleSubmit}>
              <label
                htmlFor="username"
                className="formlabel py-10 text-start text-black"
              >
                Name
              </label>
              <br />
              <input
                type="text"
                name="name"
                value={vendorForm.name}
                onChange={handleInputChange}
                className={` inputCommonCss bg-white text-black ${
                  validationErrors.name ? "border-b border-red-600" : ""
                }`}
                placeholder="Enter Vendor Name"
              />
              <span className="text-red-600 ">{validationErrors.name}</span>
              <br />
              <br />
              <label htmlFor="email address" className=" text-black">
                Email Address
              </label>
              <br />
              <input
                type="text"
                name="email"
                value={vendorForm.email}
                onChange={handleInputChange}
                className={` inputCommonCss bg-white text-black ${
                  validationErrors.email ? "border-b border-red-600" : ""
                }`}
                placeholder="Enter Vendor Email Address"
              />
              <span className="text-red-600">{validationErrors.email}</span>
              <br />
              <br />
              <label htmlFor="phonenumber" className="text-black">
                Phone Number
              </label>
              <br />
              <input
                type="number"
                maxLength={10}
                name="phone_number"
                value={vendorForm.phone_number}
                onChange={handleInputChange}
                className={` inputCommonCss bg-white text-black ${
                  validationErrors.phone_number ? "border-b border-red-600" : ""
                }`}
                placeholder="Enter phone number"
              />
              <span className="text-red-600 mb-2">
                {validationErrors.phone_number}
              </span>
              <br />
              <br />
              <label htmlFor="Pincode" className=" text-black">
                Pincode
              </label>
              <br />
              <input
                type="number"
                name="pincode"
                value={vendorForm.pincode}
                onChange={handleInputChange}
                className={` inputCommonCss bg-white text-black ${
                  validationErrors.pincode ? "border-b border-red-600" : ""
                }`}
                placeholder="Enter Vendor Pincode"
              />
              <span className="text-red-600">{validationErrors.pincode}</span>
              <br />
              <br />
              <label htmlFor="password" className=" text-black">
                Password
              </label>
              <br />
              <input
                type="password"
                name="password"
                value={vendorForm.password}
                onChange={handleInputChange}
                className={` inputCommonCss bg-white text-black ${
                  validationErrors.password ? " border-b border-red-600" : ""
                }`}
                placeholder="Enter Vendor Password"
              />
              <span className="text-red-600">{validationErrors.password}</span>
              <div className="button">
                <button type="submit" className="primaryButton w-full text-lg">
                  Add Vendor
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateVendor;
