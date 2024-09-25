export const useAuth = async () => {
  const authToken = localStorage.getItem("AuthToken");
  if (!authToken) {
    // navigate("/login"); // Redirect to login page if no authToken is found
    return false;
  } else {
    return true;
  }
};
