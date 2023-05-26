import React, { useState } from 'react'
import './TeamCard.css'


function TeamCard(props) {
  return (
    <>
      <div style={{ maxWidth: "16rem" }} class="rounded overflow-hidden shadow-lg">
        <img class="max-h-64 w-full" src={props.image} />
        <div class="px-6 py-4">
          <div class="text-center font-bold text-xl mb-2">{props.name}</div>
          <p class="text-gray-700 text-base text-center">
            {props.description}
          </p>
        </div>
      </div>
    </>
  )

}

export default TeamCard;