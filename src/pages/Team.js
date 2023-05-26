import React from 'react';
import './Team.css'
import TwoColumn from '../components/TwoColumn';
import TeamCard from '../components/TeamCard';

const Team = () => {
  return (
    <div>
      <div class="my-10 flex flex-col justify-center 
                items-center">
        <h1 class="w-full mb-10 mt-0 text-4xl font-bold leading-tight text-primary text-center">
          About
        </h1>
        <p class="w-full mb-10 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div class="flex justify-center">

        <div class="w-9/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;