import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Dashboard } from "./components/dashboard/Dashboard";
import Login from "./components/Login/Login";
import Orders from "./components/ordersList/Orders";
import CustomerList from "./components/customers/CustomerList";
import ProtectedRoutes from "./components/Login/ProtectedRoutes";
import VendorDetails from './components/Vendor/VendorDetails'
import "react-toastify/dist/ReactToastify.css";
import Error from "./components/Error";
import Vendor from "./components/Vendor/Vendor";
import Navigation from './components/Header/Navigation'
import VendorCount from "./components/Report/vendor/VendorCount";
import ReportCount from "./components/Report/ReportCount";
import Products from "./components/Products/Products";
import Appointments from "./components/Appointments/Appointment";

// import AllocateVendorList from "./components/ordersList/AllocateVendorList";
function App() {
  return (
    <Routes>
      {/* <Route path="/" element={<ProtectedRoutes />}/> */}
      {/* <Route path="/" element={<Layout />}/> */}
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoutes>
              {/* <Layout/> */}
              <Dashboard />
            </ProtectedRoutes>
          }
        ></Route>
        <Route
          path="/orders"
          element={
            <ProtectedRoutes>
              <Orders />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/vendors"
          element={
            <ProtectedRoutes>
              <Vendor />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/appointments"
          element={
            <ProtectedRoutes>
              <Appointments />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/customer"
          element={
            <ProtectedRoutes>
              <CustomerList />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/customer-report"
          element={
            <ProtectedRoutes>
              <ReportCount />
            </ProtectedRoutes>
          }
        />
         <Route
          path="/vendordetails"
          element={
            <ProtectedRoutes>
              <VendorDetails />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/vendor-report"
          element={
            <ProtectedRoutes>
              <VendorCount />
            </ProtectedRoutes>
          }
          />
        <Route
          path="*"
          element={
            <ProtectedRoutes>
              <Error />
            </ProtectedRoutes>
          }
        />
        
      {/* </Route> */}
      {/* </Route> */}
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
