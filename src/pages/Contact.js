import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div class="pt-20 pb-64 flex flex-col justify-center 
                items-center" style={{ fontFamily: "'Courier New', Courier, monospace" }}>
        <h1 class="w-full mb-10 mt-0 text-3xl font-bold leading-tight text-primary text-center">
          Email
        </h1>
        <p class="text-center w-full mb-10 text-lg font-normal text-gray-600 lg:text-xl sm:px-16 xl:px-48">
          Reach us at cornell.innovativetechsociety@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Contact;
