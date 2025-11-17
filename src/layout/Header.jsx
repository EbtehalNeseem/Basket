
// src/components/layout/Header.jsx
import { Link, NavLink } from "react-router-dom";
import image1 from "../assets/Link - Bacola Store.png";
import user1 from "../assets/profile.png";
import Vector from "../assets/Vector.png";
import MenuNav from "../assets/menu-burger (1).png";
import search from "../assets/search-interface-symbol.png";
import BEVERAGS from "../assets/BERE.png";
import MEAST from "../assets/Icon.png";
import Bakery from "../assets/bakery.png";
import { useEffect, useState } from "react";
import SearchBox from "../Components/Search/SearchBox";
import useCart from "@/hooks/useCart";
import CartIcon from "../components/home/CartIcon";
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-[1200px] px-3 sm:px-4">{children}</div>
);

const GREEN = "#35AFA0";

const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/meats", label: "MEATS & SEAFOOD", icon: MEAST },
  { to: "/bakery", label: "BAKERY", icon: Bakery },
  { to: "/beverages", label: "BEVERAGES", icon: BEVERAGS },
  { to: "/blog", label: "BLOG" },
  { to: "/contact", label: "CONTACT" },
];

export default function Header({ setIsCartOpen }) {
 const { totalPrice} = useCart();
  const [open, setOpen] = useState(false);

  const [isloggedin, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const token = localStorage.getItem("token")
    setIsLoggedIn(!!token)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };

  return (

    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* 1) NOTICE BAR */}
      <div style={{ backgroundColor: GREEN }}>
        <Container>
          <div className="h-8 flex items-center justify-center text-white text-[11px] md:text-xs text-center">
            Due to current circumstances, there may be slight delays in order
            processing
          </div>
        </Container>
      </div>

      {/* 2) UTILITY BAR – يختفي على الموبايل */}
      <div className="border-b hidden md:block">
        <Container>
          <div className="h-10 grid grid-cols-3 items-center text-[11px] text-gray-600">
            <ul className="flex items-center gap-4">
              <li>
                <a href="/aboutus" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Compare
                </a>
              </li>
              <li>
                <a href="/wishlist" className="hover:underline">
                  Wishlist
                </a>
              </li>
            </ul>

            <div className="flex items-center justify-center gap-2 text-gray-500">
              <img src={Vector} alt="" />
              <span>100% Secure delivery without contacting the courier</span>
            </div>

            <div className="col-span-1 flex items-center justify-end gap-3">
              <span className="hidden lg:inline border-l pl-5 py-1">
                Need help? Call us: <b className="text-primary">+0200 500</b>
              </span>
              <select className="border-l px-2 py-2 text-xs">
                <option>English</option>
                <option>Arabic</option>
              </select>
              <select className="px-2 py-1 text-xs">
                <option>USD</option>
                <option>EGP</option>
              </select>
            </div>
          </div>
        </Container>
      </div>

      {/* 3) MAIN HEADER */}
      <Container>
        <div className="py-3 md:py-4 flex items-center gap-3">
          {/* burger للموبايل */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border text-gray-700"
            aria-label="Open menu"
          >
            <img src={MenuNav} alt="menu" className="w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2">
            <img src={image1} alt="logo" className="w-24 sm:w-28 md:w-32" />
          </Link>

          {/* Search desktop / tablet */}
          <SearchBox className="hidden md:block flex-1 max-w-[690px] ml-3 bg-[#F3F4F7]" />

          {/* User + Cart */}
          <div className="ml-auto flex items-center gap-3 md:gap-5">
            {
              !isloggedin && (
                <Link
                  to="/login"
                  className="hidden sm:flex items-center justify-center bg-white border rounded-full py-1.5 px-3 text-xs md:text-sm hover:bg-gray-50"
                >
                  Login
                </Link>
              )
            }
            {
              isloggedin && (
                <button
                  onClick={handleLogout}
                  className="text-white bg-red-600 border rounded-full py-1.5 px-3 text-xs md:text-sm hover:bg-red-700"
                >
                  Logout
                </button>
              )
            }

            <Link
              to="/myaccount"
              title="My Account"
              className="flex items-center justify-center bg-white border rounded-full"
            >
              <img src={user1} alt="user" className="w-4 m-2" />
            </Link>


            <span className="hidden sm:inline text-sm text-gray-700">
             $ {totalPrice}
            </span>
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2"
            >
              <CartIcon />
            </button>
          </div>
        </div>

        {/* NAV DESKTOP */}
        <div className="h-12 border-t hidden md:block">
          <div className="mx-auto max-w-[1200px] h-full flex items-center justify-between gap-4">
            <button
              className="shrink-0 inline-flex items-center justify-center h-8 px-4 rounded-full text-white text-[12px] leading-none whitespace-nowrap"
              style={{ backgroundColor: GREEN }}
            >
              ALL CATEGORIES <span className="ml-1">▾</span>
            </button>

            <nav className="flex items-center gap-4 lg:gap-6 text-[12px] lg:text-[13px] leading-none">
              {NAV_LINKS.map((link) => (
                <NavLink
                  to={link.to}
                  key={link.to}
                  className="flex items-center gap-1 text-gray-700 hover:bg-green-300 px-3 py-2 rounded-full hover:text-white transition"
                >
                  {link.icon && (
                    <img
                      src={link.icon}
                      alt={link.label}
                      className="w-4 h-4 object-contain"
                    />
                  )}
                  <span>{link.label}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        </div>

        {/* MOBILE DROPDOWN NAV */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t ${open ? "max-h-96" : "max-h-0"
            }`}
        >
          <div className="px-3 py-3 space-y-3 bg-white">
            {/* Search للموبايل */}
            <form className="flex items-center">
              <input
                className="flex-1 border rounded-l-lg h-9 px-3 text-xs outline-none"
                placeholder="Search products…"
              />
              <button
                type="button"
                className="h-9 px-3 rounded-r-lg text-white "
                style={{ backgroundColor: GREEN }}
              >
                <img src={search} alt="search" className="w-4 bg-gray-50" />
              </button>
            </form>

            <button
              className="w-full inline-flex items-center justify-center h-9 rounded-full text-white text-[12px]"
              style={{ backgroundColor: GREEN }}
            >
              ALL CATEGORIES <span className="ml-1">▾</span>
            </button>

            <nav className="grid gap-1 text-[14px]">
              {NAV_LINKS.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={() => setOpen(false)}
                  className="py-2 px-2 rounded hover:bg-gray-50"
                  style={({ isActive }) =>
                    isActive ? { color: GREEN, fontWeight: 700 } : undefined
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </Container>

    </header>

  );
}