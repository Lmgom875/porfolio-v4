import React, { Component } from "react";
import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <div className='fixed-bottom footer-div'>
        <footer className=" mt-4 main-footer">
          <div className="container-fluid py-3">
            <div className="row">
              <div className="col-md-12 text-center">© 2020</div>
            </div>
            <div className="row"></div>
          </div>
        </footer>
      </div>
    );
  }
}
