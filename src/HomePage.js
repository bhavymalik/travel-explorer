// HomePage.js
import React from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Articles from './Articles';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <Header title="Travel Explorer" />
      <Carousel />
      <Articles />
      <Footer />
    </div>
  );
};

export default HomePage;
