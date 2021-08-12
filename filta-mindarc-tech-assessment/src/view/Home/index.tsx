import React, { ReactElement } from "react";
import { Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

interface Props {}

function Back({}: Props): ReactElement {
  return (
    <div>
      <div className="btn btn-link bg-dark text-white fixed-bottom">
        <Link to="/" style={{ textDecoration: "none" }}>
          Back
        </Link>
      </div>
    </div>
  );
}

export default Back;
