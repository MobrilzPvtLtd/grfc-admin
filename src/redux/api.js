import axios from "axios";

const API = axios.create({
  // baseURL: 'http://208.109.33.187:8000/',

  // baseURL:"https://grfc.mobrilz.digital/",
  baseURL: "http://127.0.0.1:3002/api/",

  // baseURL: 'http://192.168.1.19:8000',
});
API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const login = (signInData) => {
  return API.put("login/1", signInData.FormData);
};

export const logout = (authToken) => {
  return API.post("logout/", authToken, {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  });
};

export const orderList = () => {
  return API.get("orders/");
};

export const ownerList = () => {
  return API.get("accounts/api/vendors/");
};

export const usersList = () => {
  return API.get("users/");
};

export const users= () => {
  // return API.get("users/");
  return "x"
};

export const wallet = () => {
  return API.get("transactions/wallet-details/");
}

export const pricelist = () => API.get("/orders/item-rates/");

export const updateItem = (id, formData) =>
  API.patch(`orders/item-rates/${id}/`, formData);

export const updatePickupRequest = (id, updateData, authToken) => {
  return API.patch(`orders/api/pickup-requests/${id}/`, updateData, {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  });
};

export const addvendor = (formdata) => {
  return API.post("accounts/vendors/", formdata, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createOrder = (formData) => {
  return API.post("orders/order/", formData);
};
export const paySuccess = (formData,id) => {
  return API.patch(`orders/order/${id}/`, formData);
};
export const payTransaction = (formData) => {
  return API.post(`orders/Transaction/`, formData);
};

export const vendorDetails =(id)=>{
  return API.get(`/orders/order/vendor-details/${id}/`);
}

export const walletHistory = (formData) => {
  return API.post("transactions/wallet-history/", formData);
};

export const vendorReport = () => {
  return API.get("accounts/vendor/");
};

export const totalCount = () => {
  return API.get("accounts/count/");
};