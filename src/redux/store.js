import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./features/authSlice";
import { orderListSlice } from "./features/fetchOrdersSlice";
import { UsersListSlice } from "./features/fetchUsersSlice";
import { customerListSlice } from "./features/customerSlice";
import { scrapSlice } from "./features/scrapRateSlice";
import { walletListSlice } from "./features/walletSlice";
import { walletHistorySlice } from "./features/walletHistorySlice";
import {UsersDetails} from './features/fetchUsersDetails'
import { VendorReportDetails } from "./features/vendorReportSlice";
import { VendorCountDetails } from "./features/vendorTotalCountSlice";
export default configureStore({
  reducer: {
    auth: AuthReducer.reducer,
    orderDetails: orderListSlice.reducer,
    usersDetails: UsersListSlice.reducer,
    customers: customerListSlice.reducer,
    scrapDetails: scrapSlice.reducer,
    walletDetails: walletListSlice.reducer,
    walletHistory: walletHistorySlice.reducer,
    VendorDetailsWithId:UsersDetails.reducer,
    vendorReports: VendorReportDetails.reducer,
    vendorCounts: VendorCountDetails.reducer,
  },
});
