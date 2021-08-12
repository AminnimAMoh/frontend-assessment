import React, { MouseEventHandler, ReactElement, createRef, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

//Type initialization for arguments deconstruction.
interface Data {
  title: string;
  content: string;
}

// Type initialization for arguments.
interface Props {
  data: Data[];
}

function ExTwo({ data }: Props): ReactElement {
  //Referencing to the accordions parent.
  const accordionObjects = createRef<HTMLDivElement>();
  
  //A visited state variable to reserve the open accordion.
  const [openAccordian, setOpenAccordian]=useState<string>('Section 1')

  //Function to handle click on the accordion button.
  const handleClick = (e: any): any => {
    //Making an array of all child elements in the accordion parent.
    const accordions = accordionObjects.current?.children;
    const targetElementName = e.target.id;

    //cheking for null | undefined
    if (accordions) {
      //looping through the array to close all accordions and open the selected one.
      for (let i = 0; i < accordions.length; i++) {
        const accordianIdName =
          accordions[i].children[0].firstChild?.firstChild?.firstChild
            ?.textContent;

        const grabCollapseElement = accordions[i].children[0].children[1];

        //Using add/remove class to set each accordion state.
        if (
          grabCollapseElement.classList.contains("accordion__collapse-open")
        ) {
          grabCollapseElement.classList.remove("accordion__collapse-open");
          grabCollapseElement.classList.add("accordion__collapse-close");
        }

        //Just keep the selected one open by chacking id with the target.
        if (accordianIdName === targetElementName && openAccordian!==targetElementName) {
          //A visited state variable to reserve the open accordion.
          setOpenAccordian(targetElementName)
          grabCollapseElement.classList.add("accordion__collapse-open");
          grabCollapseElement.classList.remove("accordion__collapse-close");
        }
      }
    }
  };
  return (
    <div className="container h-100 d-md-none d-sm-block">
      <div className="row h-100 d-flex justify-content-center align-items-center">
        <div className="col-md-12" ref={accordionObjects}>
          {data.map(({ content, title }, index) => {
            return (
              <div className="accordion mt-5" key={index}>
                <div className="card accordion__card">
                  <div
                    className="card-header bg-info text-white"
                    key={title}
                    onClick={(e) => handleClick(e)}
                  >
                    <h5 className="mb-0">
                      <button
                        className="btn btn-link bg-info text-white"
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
                    //Seting the first accordion active using the index.
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
