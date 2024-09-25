import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import SubmenuListHeader from "../ordersList/SubmenuListHeader";
import { CustomerSubmenu } from "./CustomerSubmenu";
import { useDispatch, useSelector } from "react-redux";
import { customerDetails } from "../../redux/features/customerSlice";
import Loader from "../Loader";
import Error from "../Error";
import PaymentDone from "../customers/PaymentDone";
import CustomerListTable from "./CustomerListTable";
import CustomerPopup from "./CustomerPopup";
import { fetchOrderList } from "../../redux/features/fetchOrdersSlice";
import { customerWallet } from "../../redux/features/walletSlice";
import { paySuccessful } from "../../redux/features/updatePickupSlice";
import { transWalletHistory } from "../../redux/features/walletHistorySlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CustomerList = () => {
  const [amount, setAmount] = useState("");
  const [orderId, setOrderId] = useState("");
  const [upi, setUpi] = useState("");
  const [data, setData] = useState({
    userId: "",
    total_amount: "",
    order: "",
    transactionId: "",
  });
  const [query, setQuery] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [toatalAmount, setTotalAmount] = useState();
  const [bit, setBit] = useState(false);
  const [disabledCustomers, setDisabledCustomers] = useState({});

  const dispatch = useDispatch();
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(customerWallet()).then((response) => {});
  }, [dispatch]);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    dispatch(fetchOrderList()).then((response) => {
      setOrderList(response.payload);
      setTotalAmount(response.payload);
    });
  }, [dispatch]);
  const {
    loading,
    data: customerData,
    error,
  } = useSelector((state) => state.walletDetails);
  const newOrderList = orderList
    ? Object.values(orderList).reduce((accumulator, data) => {
        if (accumulator[data.created_at]) {
          // If the id already exists in the accumulator, merge the data
          accumulator[data.created_at] = {
            ...accumulator[data.created_at],
            ...accumulator[data.created_at],
            pickuprequestitem__item_id__item_name: [
              ...accumulator[data.created_at]
                .pickuprequestitem__item_id__item_name,
              data.pickuprequestitem__item_id__item_name,
            ],
            pickuprequestitem__weight: [
              ...accumulator[data.created_at].pickuprequestitem__weight,
              data.pickuprequestitem__weight,
            ],
          };
        } else {
          // If the id doesn't exist in the accumulator, add a new entry
          accumulator[data.created_at] = { ...data };
          accumulator[data.created_at].pickuprequestitem__item_id__item_name = [
            data.pickuprequestitem__item_id__item_name,
          ];
          accumulator[data.created_at].pickuprequestitem__weight = [
            data.pickuprequestitem__weight,
          ];
        }
        return accumulator;
      }, [])
    : [];
  const filterOrderList = Object.values(newOrderList).filter((value) => {
    return value.order_status == "picked";
  });
  function getObjectsWithLatestDates(arrayOfObjects) {
    const sortedArray = arrayOfObjects.sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    const latestObjects = {};
    sortedArray.forEach((obj) => {
      const user_id = obj.user_id;
      if (!latestObjects[user_id]) {
        latestObjects[user_id] = obj;
      }
    });
    return Object.values(latestObjects);
  }
  const latestObjectsArray = getObjectsWithLatestDates(filterOrderList);
  const idMap = new Map();
  latestObjectsArray.forEach((obj) => {
    idMap.set(obj.user_id, obj);
  });
  const customersData = customerData?.data?.data;
  useEffect(() => {
    if (query !== "") {
      const words = query?.trim().toLowerCase().split(/\s+/);
      const updatedList = customerData?.data?.data?.filter((item) => {
        const itemName = item?.user?.name?.toLowerCase() || "";
        const itemId = item?.user?.id?.toString().toLowerCase() || "";
        return words?.every(
          (word) =>
            itemName?.indexOf(word) !== -1 || itemId?.indexOf(word) !== -1
        );
      });
      setCustomerList(updatedList);
    } else {
      setCustomerList(customersData);
    }
  }, [query, customerData?.data]);

  if (loading) {
    return <Loader />;
  } else if (error) {
    return <Error />;
  }
  const handleWalletClick = async (customerId, id) => {
    setDisabledCustomers((prevDisabledCustomers) => ({
      ...prevDisabledCustomers,
      [id]: true,
    }));
    const selectedCustomer = customerList.find((customer) => {
      return customer.user.id === id;
    });
    const totalAmount = idMap.get(id)?.total_amount || 0;
    const customerOrderId = idMap.get(id)?.order_id || "";
    const transactionData = {
      transaction_type: "cr",
      transaction_amount: totalAmount,
      description: "credited",
      wallet: selectedCustomer?.id,
      order_id: customerOrderId,
    };
    const transWalletHistoryResult = await dispatch(
      transWalletHistory(transactionData)
    );
    const paySuccessfulResult = await dispatch(
      paySuccessful({ data: { order_status: "completed" }, id: customerId })
    );
    if (
      transWalletHistoryResult.payload.status === 201 &&
      paySuccessfulResult.payload.status === 200
    ) {
      toast.success("Wallet successfully updated");
    }
  };
  return (
    <>
      <div className="List_container">
        <div className="bg-gray-100 w-screen h-full  p-10">
          <div className="heading">
            <h1 className="text-black mt-4 font-semibold">Customers</h1>
          </div>
          <SubmenuListHeader submenuHeading={CustomerSubmenu} />
          <hr />
          <div className="relative my-10">
            <AiOutlineSearch
              className="search-icon absolute top-2 left-3 w-5 h-5"
              style={{ color: "black", height: "30px", width: "30px" }}
            />
            <input
              type="text"
              className="px-16 py-3 rounded-xl w-10/12 bg-white text-black"
              placeholder="Search By Order Id or name"
              name="search"
              id="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-xl">
            <CustomerListTable
              customerList={customerList}
              handleWalletClick={handleWalletClick}
              disabledCustomers={disabledCustomers}
              idMap={idMap}
            />
          </div>
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
export default CustomerList;
