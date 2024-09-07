import React from 'react';
import './TwoColumn.css';

function ImageColumn(props) {
  return (
    <div className={props.justify === "left" ? "column" : "column-right"}>
      <div className={props.justify === "left" ? "imgbox" : "imgbox-right"}>
        <img className="drone-home" src={props.image} alt={props.heading} />
      </div>
    </div>
  );
}

function TextColumn(props) {
  return (
    <div className="column">
      <div className="textbox">
        <h1 className="heading text-4xl font-bold">{props.heading}</h1>
        <div style={{ marginTop: '10px', fontSize: '16pt' }}> {props.text} </div>
      </div>
    </div>
  );
}

function rotate(props) {
  if (props.left) {
    return (
      <div className="row light-gray-box">
        <ImageColumn image={props.image} justify="left" />
        <TextColumn heading={props.heading} text={props.text} />
      </div>
    );
  } else {
    return (
      <div className="row light-gray-box" >
        <TextColumn heading={props.heading} text={props.text} />
        <ImageColumn image={props.image} justify="right" />
      </div>
    );
  }
}

function TwoColumn(props) {
  return (
    <>
      {rotate(props)}
    </>
  );
}

export default TwoColumn;
