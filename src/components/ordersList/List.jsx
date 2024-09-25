/* eslint-disable react/prop-types */
import React, { useState } from "react";
import VendorAllocated from "./VendorAllocated";
import AllocateVendorList from "./AllocateVendorList";
import { useEffect } from "react";
import OrderTable from "./OrderTable";

export default function List(props) {
  const [vendorName, setVendorName] = useState("");
  const [mainList, setMainList] = useState("");
  const [filterList, setFilterList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [showVendorAllocated, setshowVendorAllocated] = useState(false);
  const [selectedData, setSelectedData] = useState(null);
  const datafromapi = props.data;
  const reducedData = datafromapi
    ? Object.values(datafromapi).reduce((accumulator, data) => {
        if (accumulator[data.id]) {
          // If the id already exists in the accumulator, merge the data
          accumulator[data.id] = {
            ...accumulator[data.id],
            ...accumulator[data.id],
            pickuprequestitem__item_id__item_name: [
              ...accumulator[data.id].pickuprequestitem__item_id__item_name,
              data.pickuprequestitem__item_id__item_name,
            ],
            pickuprequestitem__weight: [
              ...accumulator[data.id].pickuprequestitem__weight,
              data.pickuprequestitem__weight,
            ],
          };
        } else {
          // If the id doesn't exist in the accumulator, add a new entry
          accumulator[data.id] = { ...data };
          accumulator[data.id].pickuprequestitem__item_id__item_name = [
            data.pickuprequestitem__item_id__item_name,
          ];
          accumulator[data.id].pickuprequestitem__weight = [
            data.pickuprequestitem__weight,
          ];
        }
        return accumulator;
      }, [])
    : [];
  // filter the list according to the ASelection
  const filterItem = () => {
    if (props.activeList == 0) {
      const updatedList = reducedData.filter((element) => {
        if (
          element.order_status === "on hold" ||
          element.order_status === "onhold"
        ) {
          element.order_status = "Allocated";
        }
        return element;
      });
      setFilterList(updatedList.reverse());
    } else if (props.activeList == 1) {
      const updatedList = reducedData.filter((element) => {
        return element.order_status === "live";
      });
      setFilterList(updatedList.reverse());
    } else if (props.activeList == 2) {
      let updatedList = reducedData.filter((element) => {
        return (
          element.order_status === "on hold" ||
          element.order_status === "onhold"
        );
      });
      updatedList = updatedList.filter((element) => {
        return (element.order_status = "Allocated");
      });
      setFilterList(updatedList.reverse());
    } else if (props.activeList == 3) {
      const updatedList = reducedData.filter((element) => {
        return element.order_status === "picked";
      });
      setFilterList(updatedList.reverse());
    } else if (props.activeList == 4) {
      const updatedList = reducedData.filter((element) => {
        return element.order_status === "rejected";
      });
      setFilterList(updatedList.reverse());
    }
  };
  useEffect(() => {
    if (props.query !== "") {
      let updatedList;
      const words = props.query?.trim().toLowerCase().split(/\s+/); // Split the search query into individual words
      if (props.activeList == 0) {
        updatedList = reducedData.filter((item) => {
          const itemName = item.user__name?.toLowerCase() || "";
          const itemId = item.id?.toString().toLowerCase() || "";
          return words.every(
            (word) =>
              itemName.indexOf(word) !== -1 || itemId.indexOf(word) !== -1
          );
        });
      } else {
        filterList.reverse();
        updatedList = filterList.filter((item) => {
          const itemName = item.user__name?.toLowerCase() || "";
          const itemId = item.id?.toString().toLowerCase() || "";
          return words.every(
            (word) =>
              itemName.indexOf(word) !== -1 || itemId.indexOf(word) !== -1
          );
        });
      }

      setFilterList(updatedList);
    } else {
      filterItem();
    }
  }, [props.query]);
  useEffect(() => {
    filterItem();
  }, [props.activeList]);
  const handlePopupClick = (data) => {
    setSelectedData(data);
    setShowPopup(true);
  };
  return (
    <>
      <div className="List_container">
        {showPopup && (
          <div className="">
            {/* <AllocateVendorList
              selectedData={selectedData}
              setShowPopup={setShowPopup}
              setshowVendorAllocated={setshowVendorAllocated}
              setVendorName={setVendorName}
            /> */}
          </div>
        )}
        {showVendorAllocated && (
          <VendorAllocated
            selectedData={selectedData}
            setshowVendorAllocated={setshowVendorAllocated}
            vendorName={vendorName}
          />
        )}
        <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
          <OrderTable
            filterList={filterList}
            heading={props?.Heading}
            setSelectedData={setSelectedData}
            setShowPopup={setShowPopup}
          />
        </div>
      </div>
    </>
  );
}
