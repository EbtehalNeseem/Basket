import React from "react";
import Hero from "../Components/home/Hero";
import SecureStrip from "../Components/home/SecureStrip";
import SpecialOffers from "../Components/home/SpecialOffers";
import PromoBanner from "../Components/home/PromoBanner";
import CategoryCarousel from "../Components/home/CategoryCarousel";
import BestSellers from "../Components/home/BestSellers";
import TriplePromo from "../Components/home/TriplePromo";
import FeaturedProducts from "../Components/home/FeaturedProducts";
import BottomRibbon from "../Components/home/BottomRibbon";
import BlogSection from "../Components/home/BlogSection";


const Home = () => {
  return (
    <div>
      <Hero />
      <SecureStrip />
      <SpecialOffers />
      <PromoBanner />
      <CategoryCarousel />
      <BestSellers />
      <TriplePromo />
      <FeaturedProducts />
      <BottomRibbon />
      <BlogSection/>

    </div>
  );
};

export default Home;
