import React, { ReactElement } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";

interface Props {}

function CoverContainer({}: Props): ReactElement {
  return (
    <div className="container-fluid cover" style={{ padding: 0 }}>
      <div className="row">
        <div className="col-xs-12">
          <img
            src="http://via.placeholder.com/1920x650"
            className="img-fluid d-none d-md-block cover__image"
            alt="cover-content"
          />
          <img
            src="http://via.placeholder.com/600x600"
            className="img-fluid d-none d-sm-block d-md-none cover__image"
            alt="cover-contente"
          />
          <img
            src="http://via.placeholder.com/400x300"
            className="img-fluid d-xs-block d-sm-none cover__image"
            alt="cover-content"
          />
          <div className="card-img-overlay text-white d-flex justify-content-center align-items-end cover__overlay-dark"></div>
        </div>
      </div>
    </div>
  );
}

export default CoverContainer;
