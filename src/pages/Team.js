import React from 'react';
import './Team.css'
import TeamCard from '../components/TeamCard';

const Team = () => {
  return (
    <div>
      <div class="my-10 flex flex-col justify-center 
                items-center">
        <h1 class="w-full mb-10 mt-0 text-4xl font-bold leading-tight text-primary text-center">
          Members
        </h1>
        <p class="text-center w-full mb-10 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48 py-10">
          The current members of our executive board. In our team, everyone wears multiple hats, working on anything from marketing and graphic design to the ideation process to our technology. If you're interested in working with us, shoot us an application!
        </p>
      </div>
      <div class="flex justify-center my-5">

        <div class="w-9/12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Krisha Jivani" description="President" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Coco Xu" description="Vice President" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Brandon Huynh" description="Treasurer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Stella Dong" description="Technology Lead" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Ziga Kovacic" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Jonathan Chen" description="Technology Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Katie Perlitz" description="Marketing and Outreach Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Haonan Gong" description="Marketing and Outreach Officer" />
          </div>
          <div class="flex justify-center">
            <TeamCard image="/default_person.jpg" name="Amy Chitnumsab" description="Marketing and Outreach Officer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;