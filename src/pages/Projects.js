import React from 'react';
import './Projects.css'
import ReactPlayer from 'react-player'

const Projects = () => {
  return (
    <div>
      <div class="py-40 flex flex-col justify-center 
                items-center bg-gray-200" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        <ReactPlayer url="https://youtu.be/JeT6IlrtLf8" />
        <h1 class="w-full mb-10 mt-20 text-4xl font-bold leading-tight text-primary text-center">
          Sit tight
        </h1>
        <p class="text-center w-full mb-10 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
          More coming soon!
        </p>
      </div>
    </div>
  );
};

export default Projects;
