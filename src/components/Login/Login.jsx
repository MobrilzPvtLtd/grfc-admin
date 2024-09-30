import grfcLogo from "../../assets/grfc_logo.png";
import login from "../../assets/grfcLogin.jpeg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAdmin } from "../../redux/features/authSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";
import Error from "../Error";
import "./Login.css";

const initialSigninState = {
  email: "",
  password: "",
};
function Login() {
  const navigate = useNavigate();
  const [signInData, setSignIndata] = useState(initialSigninState);
  const { email, password } = signInData;
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSignIndata({ ...signInData, [name]: value });
  };

  const handleSubmit = async (event, FormData) => {
    event.preventDefault();
    try {
      if (email && password) {
        dispatch(loginAdmin({ FormData })).then((response) => {
          const { loading, payload, error } = response;
          if (loading) {
            <Loader />;
          }
          if (error) {
            <Error />;
          }
          if (payload.status === 200) {
            toast.success(`${payload?.data?.message}`);
            console.log(payload.data.token)

            localStorage.setItem("AuthToken", payload.data.token);
            navigate("/", { state: null });
          } else {
            toast.error("Check credentials");
          }
        });
      }
    } catch (e) {
      toast.error("Check Credientials");
    }
  };
  return (
    <>
      <div className="flex w-full">
        <div className="w-4/6">
          <img src={login} alt="img" className="h-screen" />
        </div>
        <div className="my-auto mx-auto w-1/4">
          <div className="">
            <img src={grfcLogo} alt="GRFC Logo" height={80} width={80}  className="mx-auto" />
            <h1 className="text-black text-4xl mt-4 font-bold text-center">Welcome Back!</h1>
            <p className="text-black font-medium text-center mt-4 mb-5">
              Enter your correct information to login your account
            </p>
          </div>

          <div className="">
            <form
              action=""
              className=""
              onSubmit={(e) => handleSubmit(e, signInData)}
            >
              <label htmlFor="username" className="text-black font-medium">
                Email Address/Username
              </label>
              <br />
              <input
                type="text"
                name="email"
                id="email"
                value={signInData.email}
                onChange={handleInputChange}
                className=" border-b-2 w-full bg-white text-black mt-2 mb-5 rounded-md pl-2 outline-none"
                placeholder="Enter Email address here"
              />
              <br />
              <label htmlFor="password" className="text-black font-medium">Password</label>
              <br />
              <input
                type="password"
                name="password"
                id="password"
                value={signInData.password}
                onChange={handleInputChange}
                className=" border-b-2 w-full bg-white text-black mt-2 rounded-md pl-2 outline-none"
                placeholder="Enter Your Password here"
              />
              <div className="w-full mt-8">
                <button type="submit" className="text-white font-bold bg-[#27AE76] w-full outline-none">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
