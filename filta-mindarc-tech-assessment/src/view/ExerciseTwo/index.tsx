import React, { ReactElement } from "react";

import data from "../../data/data.json";

import "bootstrap/dist/css/bootstrap.min.css";

interface Props {}

function ExTwo({}: Props): ReactElement {
  return (
    <div className="container">
      {data.map(({ content, title }) => {
        return (
          <div className="accordion">
            <div className="card">
              <div className="card-header">
                <h5 className="mb-0">
                  <button
                    className="btn btn-link"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    {title}
                  </button>
                </h5>
              </div>
              <div className="card-collapse">
                <div className="card-body">
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <p></p>
    </div>
  );
}

export default ExTwo;
