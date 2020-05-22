import React from "react";
import "./style.css";

export default function Junbotron() {
  return (
    <div>
      <div className="jumbotron">
        <div className="row">
          <div className="col-md-4">
              <img 
              src="https://via.placeholder.com/350" 
              alt="pic"/>
          </div>
          <div className="col-md-8">
            <h1 className="titleH1">Luis M Gómez</h1>
            <p className="bodyP">
              Fight Book is a web application to keep records of amateur boxers
              in a digital way. Giving these boxers a tool to follow their
              career progress and expose themselves to a boxing community, where
              they can find fans or boxing promoters looking for talent. For
              their trainer, it provides functions to help them manage the
              careers of their boxers. All this within a social environment
              where boxers can exchange messages with their trainers and fans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
