// src/components/layout/Header.jsx
import { Link, NavLink } from "react-router-dom";
import image1 from "../assets/Link - Bacola Store.png";
import user1 from "../assets/user.png";
import Vector from "../assets/Vector.png";
import MenuNav from "../assets/menu-burger (1).png";
import search from "../assets/search-interface-symbol.png";
import ShoppingBagIcon from "../assets/market.png";
import BEVERAGS from "../assets/BERE.png";
import MEAST from "../assets/Icon.png";
import Bakery from "../assets/bakery.png";
import { useState } from "react";
import SearchBox from "../Components/Search/SearchBox";
const Container = ({ children }) => (
  <div className="mx-auto w-full max-w-[1200px] px-4">{children}</div>
);

const GREEN = "#35AFA0";

const NAV_LINKS = [
  { to: "/", label: "HOME" },
  { to: "/shop", label: "SHOP" },
  { to: "/meats", label: "MEATS & SEAFOOD", icon: MEAST },
  { to: "/bakery", label: "BAKERY" , icon: Bakery},
  { to: "/beverages", label: "BEVERAGES", icon: BEVERAGS },
  { to: "/blog", label: "BLOG" },
  { to: "/contact", label: "CONTACT" },
];
export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      {/* 1) NOTICE BAR */}
      <div style={{ backgroundColor: GREEN }}>
        <Container>
          <div className="h-8 flex items-center justify-center text-white text-[11px] md:text-xs">
            Due to current circumstances, there may be slight delays in order
            processing
          </div>
        </Container>
      </div>

      {/* 2) UTILITY BAR */}
      <div className="border-b">
        <Container>
          <div className="h-10 grid grid-cols-3 items-center text-[11px] text-gray-600">
            <ul className="hidden md:flex items-center gap-4">
              <li>
                <a href="/aboutus" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/checkout" className="hover:underline">
                  Compare
                </a>
              </li>
              <li>
                <a href="/wishlist" className="hover:underline">
                  Wishlist
                </a>
              </li>
            </ul>

            <div className="hidden md:flex items-center justify-center gap-2 text-gray-500">
              <img src={Vector} alt="" />
              <span>100% Secure delivery without contacting the courier</span>
            </div>

            <div className="col-span-3 md:col-span-1 flex items-center justify-end gap-3">
              <span className="hidden sm:inline">
                Need help? Call us: <b>+0200 500</b>
              </span>
              <select className="border rounded px-2 py-1">
                <option>English</option>
                <option>Arabic</option>
              </select>
              <select className="border rounded px-2 py-1">
                <option>USD</option>
                <option>EGP</option>
              </select>
            </div>
          </div>
        </Container>
      </div>

      {/* 3) MAIN HEADER */}
      <Container>
        <div className="h-20 flex items-center gap-3">
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border text-gray-700"
            aria-label="Open menu"
          >
            <img src={MenuNav} alt="menu" className="w-6" />
          </button>

          {/* Logo */}
          <Link to="/" className="shrink-0 flex items-center gap-2">
            <img src={image1} alt="logo" className="w-28 md:w-32" />
          </Link>

          {/* Search */}
          {/* <form className="flex-1 hidden md:flex items-center relative">
            <input
              className="flex-1 border rounded-md h-10 px-4 py-6 text-sm outline-none"
              placeholder="Search for Products, fruit, meat, eggs…"
            />
            <button
              type="button"
              className="h-10 px-4 rounded-r-xl absolute right-0 text-sm text-white"
              
            >
              <img src={search} alt="search" className="w-6" />
            </button>
          </form> */}
          <SearchBox className="w-full flex-1 hidden md:flex items-center relative  md:w-[800px] py-8 " />

          {/* User + Cart */}
          <div className="ml-auto flex items-center gap-4 md:gap-6">
            <Link
              to="/login"
              title="LOGIN"
              className="flex items-center justify-center bg-white border rounded-full py-1 px-3 hover:bg-gray-50"
            >
              Login
            </Link>
            <Link
              to="/myaccount"
              title="My Account"
              className="flex items-center justify-center bg-white"
            >
              <img src={user1} alt="user" className="w-6 " />
            </Link>

            <Link to="/cart" className="flex items-center gap-2">
              <span className="text-sm text-gray-700">$0.00</span>
              <span className="relative">
                <img
                  src={ShoppingBagIcon}
                  alt=""
                  className=" w-8 h-8 bg-red-100 rounded-full p-1 flex items-center justify-center"
                />
                <span
                  className="absolute -top-2 -right-2 text-[10px] text-white w-4 h-4 rounded-full grid place-items-center"
                  style={{ backgroundColor: GREEN }}
                >
                  0
                </span>
              </span>
            </Link>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="h-12 border-t hidden md:block">
          <div className="mx-auto max-w-[1200px] px-4 h-full flex items-center justify-between gap-6">
            <button
              className="shrink-0 inline-flex items-center justify-center h-8 px-4 rounded-full text-white text-[12px] leading-none whitespace-nowrap"
              style={{ backgroundColor: GREEN }}
            >
              ALL CATEGORIES <span className="ml-1">▾</span>
            </button>

            <nav className="flex items-center gap-6 text-[13px] leading-none">
              {NAV_LINKS.map((link) => (
                <NavLink
                  to={link.to}
                  key={link.to}
                  className="flex items-center gap-1 text-gray-700  hover:bg-green-300 p-2 rounded-full hover:text-white transition"
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

        <div
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 border-t ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="px-4 py-3 space-y-3 bg-white">
            {/* Search  رSmall Mobile */}
            <form className="flex items-center">
              <input
                className="flex-1 border rounded-l-lg h-10 px-3 text-sm outline-none"
                placeholder="Search products…"
              />
              <button
                type="button"
                className="h-10 px-3 rounded-r-lg text-white text-sm"
                style={{ backgroundColor: GREEN }}
              >
                <img src={search} alt="search" className="w-6" />
              </button>
            </form>

            <button
              className="w-full inline-flex items-center justify-center h-9 rounded-full text-white text-[12px]"
              style={{ backgroundColor: GREEN }}
            >
              ALL CATEGORIES <span className="ml-1">▾</span>
            </button>

            <nav className="grid gap-2 text-[15px]">
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
