import React from 'react';
import './Home.css'
import TwoColumn from '../components/TwoColumn';

const Home = () => {
  return (
    <div className="bg-[rgb(50,50,50)] text-white py-16 pb-24" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
      <div className="max-w-7xl mx-auto px-8 pb-24">
        <h1 className="text-4xl font-bold mb-6 text-center">About</h1>
        <p className="text-lg leading-relaxed mb-4 text-center">
          Established in 2022, the Cornell Filmmaking Society is a team focused on developing new experiences by combining traditional film techniques with modern technology. We have drones, VR sets, and studio equipment to use in a variety of creative endeavors. Have an idea for a cool project? We may be able to help!
        </p>
        <p className="text-lg leading-relaxed mb-8 text-center">
          This organization is a registered student organization of Cornell University.
        </p>
        <div className="text-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdpKWzh4FvQ5V9dtojtDyQbZu5nmFAFbZfOiog9KVH6pBuzwQ/viewform" className="inline-block bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 shadow-md transition duration-300">
            Apply to our team
          </a>
        </div>
      </div>
      <div className="bg-[rgb(210,210,210)] text-black py-16 pb-24" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        <TwoColumn heading="Our Mission" text="Our mission is to facilitate student ambitions in film through educative workshops and  productions. As a project-oriented team, we seek to create new experiences every semester and explore a diversity of narratives. Using innovative technologies and techniques, we work to craft compelling stories across media formats." image="/camera_720.png" left={true} />
        <TwoColumn heading="Our Tools" text="We use anything from drones, VR sets, to post-production software to build out our ideas. We are also open to explore all kinds of computer graphics engines, such as Blender and Unity, to create projects." image="/lighting_720.png" left={false} />
        <TwoColumn heading="Our Projects" text="As a project-oriented team, we seek to create new experiences every semester." image="/interrogation_720.jpg" left={true} />
      </div>
    </div>
  );
};

export default Home;
