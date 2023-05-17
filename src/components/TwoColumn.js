import React, { useState } from 'react'
import './TwoColumn.css'

function ImageColumn(props) {
  return (<div className="column">
    <div className="imgbox">
      <img className="drone-home" src={props.image} />
    </div >
  </div>)
}

function TextColumn(props) {
  return (<div className="column">
    <div className="textbox">
      <div className="heading">{props.heading}</div>
      <div> {props.text} </div>
    </div>
  </div>)
}

function rotate(props) {
  if (props.left) {
    return (<div className="row">
      <ImageColumn image={props.image} />
      <TextColumn heading={props.heading} text={props.text} />
    </div>)
  } else {
    return (<div className="row">
      <TextColumn heading={props.heading} text={props.text} />
      <ImageColumn image={props.image} />
    </div>)

  }
}
function TwoColumn(props) {
  return (
    <>
      {rotate(props)}
    </>
  )

}

export default TwoColumn;