import React from 'react';
import './Team.css'
import TeamCard from '../components/TeamCard';

const krisha = "/krisha.jpg"
const stella = "/stella.jpeg"
const sofia = "/SofiaPic.png"
const samantha = "/SamanthaPic.png"
const jack = "/JackPic.png"
const group = "/group.jpg"

const Team = () => {
  return (
    <div>
      <div class="my-10 flex flex-col justify-center 
                items-center" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        <h1 class="w-full mb-10 mt-0 text-4xl font-bold leading-tight text-primary text-center">
          Team Members
        </h1>
        <p class="text-center w-full mb-2 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 px-10">
          The current members of our executive board. In our team, everyone wears multiple hats, working on anything from marketing and graphic design to the ideation process to our technology. If you're interested in working with us, shoot us an application!
        </p>
      </div>
      <div class="flex justify-center mb-20">
        <img class="object-contain h-96 w-9/12" src={group} />
      </div>
      <div class="flex justify-center my-5">
        <div class="w-9/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="flex justify-center">
            <TeamCard image={krisha} name="Krisha Jivani" description="Founder" />
          </div>
          <div class="flex justify-center">
            <TeamCard image={stella} name="Stella Dong" description="Former President" />
          </div>
          <div class="flex justify-center">
            <TeamCard image={sofia} name="Sofia Echániz" description="President" />
          </div>
          <div class="flex justify-center">
            <TeamCard image={samantha} name="Samantha Vaca" description="Technical Lead" />
          </div>
          <div class="flex justify-center">
            <TeamCard image={jack} name="Jack Bravo Kelly" description="Treasurer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
