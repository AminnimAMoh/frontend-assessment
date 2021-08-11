import React, { ReactElement } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

interface Props {}

interface Data {
  text: string;
  margin: number;
}

export default function CardContainer({}: Props): ReactElement {
  const cardData: Data[] = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      margin: 0,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
      margin: 2,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
      margin: 0,
    },
  ];
  return (
    <div className="container cards mb-5">
      <div className="row justify-content-around pt-5">
        {cardData.map(({ text, margin }) => {
          return (
            <div className="card col-lg-4 col-md-12 box-shadow text-center p-2 cards__card">
              <img
                className="card-img-top"
                src="http://via.placeholder.com/400x300"
                alt="Card_Content"
              />
              <div className="card-body d-flex flex-column cards__body">
                <p className="card-text mt-3 mb-4 cards__body-pragraph">
                  {text}
                </p>
                <div className="mt-auto btn btn-lg btn-block text-uppercase cards__body-button">
                  Read more
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
