import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import logohead from "../../assets/logohead.png";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { logoutAdmin } from "../../redux/features/authSlice";

const navigationItems = [
  {
    label: "Dashboard",
    path: "/",
  },
  {
    label: "Orders",
    path: "/orders",
  },
  {
    label: "Owners",
    path: "/users",
  },
  {
    label: "Pets",
    path: "/customer",
  },
  {
    label: "Products",
    path: "/products",
  },
  {
    label: "Appointments",
    path: "/appointments",
  }
];

function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const handleLogout = () => {
    const response = dispatch(logoutAdmin());
    if (response) {
      localStorage.removeItem("AuthToken");
      toast.success("You are successfully logged out");
      setIsMenuOpen(false);
      navigate("/login", { state: null });
    }
  };

  return (
    <div>
      <header className="  fixed z-10 drop-shadow-xl w-full mainBgCard">
        <div className="pt-4 flex justify-between">
          <NavLink to="/">
            <div className="flex justify-center  lg:pl-4 w-48">
              <img
                src={logohead}
                alt="companyLogo"
                className="w-16 md:w-1/2"
              />
            </div>
          </NavLink>
          <div className="flex justify-between ">
            {navigationItems.map((item, index) => (
              <ul key={index}
                className={` h-full md:flex md:items-center sm:transform origin-top transition-all duration-2000 ease-linear md:w-auto w-full ${
                  isMenuOpen ? "" : "hidden"
                }  ${
                  activeTab === index
                    ? "active border-b-2  border-blue-500 "
                    : ""
                }`}
              >
                <NavLink
                  to={{ pathname: item.path, hash: "", smooth: true }}
                  onClick={() => handleTabClick(index)}
                >
                  <li
                    key={index}
                    className={`m-2 xl:px-4 md:px-0 md:text-base xl:text-xl text-xl pl-4 items-center pb-2 text-[#00000080] hover:text-blue-600`}
                  >
                    {item.label}
                  </li>
                </NavLink>
              </ul>
            ))}
            <ul>
              <li className="button pb-2">
                <button
                  className="border-2 shadow-xl rounded-lg mx-6 px-8 outline-none "
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </li>
            </ul>
            {/* Hamburger menu start */}
            <div className="md:hidden flex justify-end">
              <button type="submit" onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes /> : <GiHamburgerMenu />}
              </button>
            </div>
            {/* Hamburger menu end */}
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navigation;
