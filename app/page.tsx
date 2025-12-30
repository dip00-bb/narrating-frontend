import React from 'react';
import Navbar from './COMPONENT/LAYOUTS/Navbar';
import BannerHeader from './COMPONENT/BANNER/BannerHeader';

const Home = () => {
  return (
    <div>
      <header><Navbar/></header>
      
      {/* banner */}
      <div>
          <div><BannerHeader/></div>
      </div>
    </div>
  );
};

export default Home;