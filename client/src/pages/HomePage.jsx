import React from "react";
import Slide from "../components/Slide";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Listings from "../components/Listings";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </div>
  );
};

export default HomePage;
