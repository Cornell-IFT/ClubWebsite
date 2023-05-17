import React from 'react';
import './Home.css'
import TwoColumn from '../components/TwoColumn';

const Home = () => {
  return (
    <div className="home-container">
      <div className="text-width">
        <div style={{ textAlign: 'center', fontSize: '40px', margin: '40px 40px 40px 40px' }}>About</div>
        <div style={{ fontSize: '16px', margin: '40px 40px 40px 40px' }}>Cornell Innovative and Film Technology (CIFT) is an undergraduate </div>
      </div>
      <TwoColumn heading="Our Mission" text="Wow" image="/drone.jpeg" left={true} />
      <TwoColumn heading="Our Tools" text="Lorem ipsum" image="/logo_black.png" left={false} />
      <TwoColumn heading="Our Projects" text="So cool" image="/5183000.jpg" left={true} />
    </div>
  );
};

export default Home;