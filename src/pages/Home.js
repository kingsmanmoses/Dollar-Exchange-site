import React from 'react';
import Hero from '../components/herosect/Hero';
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from '../components/infosect/Data';
import Info from '../components/infosect/Info';
import Service from '../components/service/Service';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Service />
      <Info {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
