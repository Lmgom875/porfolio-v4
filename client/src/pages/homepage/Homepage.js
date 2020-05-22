import React, { Component } from "react";
import "./style.css";
import Junbotron from "../../components/junbotron/Junbotron";

export default class Homepage extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 bio-jumbotron">
            <Junbotron />
          </div>
        </div>
        <div className="row">
          <div className="col-12 resume-img">
            <img src="https://via.placeholder.com/1100x1000" alt="resume" />
          </div>
        </div>
      </div>
    );
  }
}
