import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ScrollToTop from "./layout/ScrollToTop";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Blog from "./Pages/Blog";
import Meats from "./Pages/Meats";
import Bakery from "./Pages/Bakery";
import Beverages from "./Pages/Beverages";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import MyAccount from "./Pages/MyAccount";
import AboutUs from "./Pages/AboutUs";
import Wishlist from "./Pages/Wishlist";
import Login from "./Pages/Login";
import SearchResults from "./Pages/SearchResults";
import "./App.css";
import Register from "./pages/Register";
import Checkout from "./pages/Checkout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ScrollToTop />
        <Header />
        <main className="min-h-[60vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/myaccount" element={<MyAccount />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/meats" element={<Meats />} />
            <Route path="/bakery" element={<Bakery />} />
            <Route path="/beverages" element={<Beverages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </QueryClientProvider>
    </BrowserRouter>
  );
}
