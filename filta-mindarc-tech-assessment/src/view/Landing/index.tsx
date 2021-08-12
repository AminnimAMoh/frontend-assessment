import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Landing({}: Props): ReactElement {
  return (
    <div className="container text-center d-flex flex-column justify-content-around align-items-center h-100 pt-5 pb-5 pl-5 pr-5 w-50">
      <div className="row">
        <h1>Hi! This is Amin Mohammadi</h1>
        <h4>I appriciate your time to chacking my code.</h4>
        <div className="col d-flex justify-content-around mt-4 text-white">
          <div className="btn bg-dark text-whit ml-5">
            <Link
              to="/ExOne"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Exercise One
            </Link>
          </div>
          <div className="btn bg-dark text-whit">
            <Link
              to="/ExTwo"
              className="text-white"
              style={{ textDecoration: "none" }}
            >
              Exercise Two
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
