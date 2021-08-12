import React, { MouseEventHandler, ReactElement, createRef } from "react";

import data from "../../data/data.json";

import "bootstrap/dist/css/bootstrap.min.css";

interface Props {}

function ExTwo({}: Props): ReactElement {
  const accordionObjects = createRef<HTMLDivElement>();
  const headingColorList = ['bg-info text-white','bg-warning text-dark','bg-danger text-white','bg-success text-white'];
  const handleClick = (e: any): any => {
    const accordions = accordionObjects.current?.children;
    const targetElementName = e.target.id;

    if (accordions) {
      for (let i = 0; i < accordions.length; i++) {
        const accordianIdName =
          accordions[i].children[0].firstChild?.firstChild?.firstChild
            ?.textContent;
        const grabCollapseElement = accordions[i].children[0].children[1];
        console.log(grabCollapseElement);

        if (grabCollapseElement.classList.contains("accordion__collapse-open"))
          grabCollapseElement.classList.remove("accordion__collapse-open");
        grabCollapseElement.classList.add("accordion__collapse-close");
        if (accordianIdName === targetElementName) {
          console.log("hello");
          grabCollapseElement.classList.add("accordion__collapse-open");
          grabCollapseElement.classList.remove("accordion__collapse-close");
        }
      }
    }
  };
  return (
    <div className="container h-100">
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-md-12" ref={accordionObjects}>
          {data.map(({ content, title }, index) => {
            return (
              <div className="accordion mt-5" key={index}>
                <div className="card accordion__card">
                  <div
                    className='card-header bg-info text-white'
                    key={title}
                    onClick={(e) => handleClick(e)}
                  >
                    <h5 className="mb-0">
                      <button
                        className='btn btn-link bg-info text-white'
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        id={title}
                      >
                        {title}
                      </button>
                    </h5>
                  </div>
                  <div
                    className={`card-collapse ${
                      index === 0
                        ? "accordion__collapse-open"
                        : "accordion__collapse-close"
                    }`}
                  >
                    <div className="card-body accordion__collapse-body">
                      <div dangerouslySetInnerHTML={{ __html: content }} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ExTwo;
