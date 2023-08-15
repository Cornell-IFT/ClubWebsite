import React from 'react';
import './Home.css'
import TwoColumn from '../components/TwoColumn';

const Home = () => {
  return (
    <div>
      <div class="bg-gray-300">
        <div class="py-10 flex flex-col justify-center 
                items-center">
          <h1 class="w-full mb-10 mt-0 text-4xl font-bold leading-tight text-primary text-center">
            About
          </h1>
          <p class="w-full mb-10 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-800 px-10">
            Established in 2022, Cornell Innovative Film and Tech is a team focused on developing new experiences by combining traditional film techniques with modern technology. We have drones, VR sets, and studio equipment to use in a variety of creative endeavours. Have an idea for a cool project? We may be able to help!
          </p>
          <a type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="https://www.google.com/">
            Apply to our team
          </a>
        </div>
      </div>
      <div class="bg-gray-200">
        <TwoColumn heading="Our Mission" text="Our mission is to explore ways to combine interests in film and technology." image="/drone.jpeg" left={true} />
        <TwoColumn heading="Our Tools" text="We use anything from drones, VR sets, to post-production software to build out our ideas." image="/logo_black.png" left={false} />
        <TwoColumn heading="Our Projects" text="As a project-oriented team, we seek to create new experiences every semester." image="/5183000.jpg" left={true} />
      </div>
    </div>
  );
};

export default Home;