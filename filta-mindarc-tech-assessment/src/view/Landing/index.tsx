import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

interface Props {}

function Landing({}: Props): ReactElement {
  return (
    <div className="container text-center">
        <h1>Hi! This is Amin Mohammadi</h1>
        <div className="btn">
          <Link to="/ExOne" style={{ textDecoration: "none" }}>
            Exercise One
          </Link>
        </div>
        <div className="btn ">
          <Link to="/ExTwo" style={{ textDecoration: "none" }}>
            Exercise Two
          </Link>
        </div>
      </div>
  );
}

export default Landing;
