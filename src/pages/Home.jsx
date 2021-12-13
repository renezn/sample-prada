import React from "react";
import Categories from "../components/Categories";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from "../components/Products";
import styled from "styled-components";
import Footer from "../components/Footer";
const HomeHeading = styled.div`
  text-align: center;
  font-size: 1.4vmax;
  border-bottom: 1px solid rgba(21, 21, 21, 0.5);
  width: 20vmax;
  padding: 1vmax;
  margin: 5vmax auto;
`;

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <HomeHeading>FEATURED PRODUCTS</HomeHeading>
      <Categories />
      <HomeHeading>PRODUCTS</HomeHeading>

      <Products />
      <Footer />
    </div>
  );
};

export default Home;
