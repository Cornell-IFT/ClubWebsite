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
          <p class="w-full mb-4 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-800 px-10">
            Established in 2022, the Innovative Film & Technology Club at Cornell is a team focused on developing new experiences by combining traditional film techniques with modern technology. We have drones, VR sets, and studio equipment to use in a variety of creative endeavours. Have an idea for a cool project? We may be able to help!
          </p>
          <p class="w-full mb-10 text-lg font-normal text-gray-800 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-800 px-10">
            This organization is a registered student organization of Cornell University.
          </p>
          <a type="button" class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" href="https://docs.google.com/forms/d/e/1FAIpQLSdpKWzh4FvQ5V9dtojtDyQbZu5nmFAFbZfOiog9KVH6pBuzwQ/viewform">
            Apply to our team
          </a>
        </div>
      </div>
      <div class="bg-gray-200">
        <TwoColumn heading="Our Mission" text="Our mission is to explore ways to combine interests in film and technology. We want to bring stories alive through innovative filmmaking, including but not limited to the use of technologies such as virtual reality, augmented reality, 360 film, and drone usage." image="/drone.jpeg" left={true} />
        <TwoColumn heading="Our Tools" text="We use anything from drones, VR sets, to post-production software to build out our ideas. We are also open to explore all kinds of computer graphics engines, such as Blender and Unity, to create projects." image="/donut_blender.png" left={false} />
        <TwoColumn heading="Our Projects" text="As a project-oriented team, we seek to create new experiences every semester. For Spring 2024, our in-house project revolves around filming action scenes." image="/wonder_woman.png" left={true} />
      </div>
    </div>
  );
};

export default Home;
