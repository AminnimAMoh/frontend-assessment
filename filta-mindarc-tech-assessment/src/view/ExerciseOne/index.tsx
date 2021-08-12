import React, { ReactElement } from "react";

import CoverContainer from '../ExerciseOne/CaverContainer'
import CardContainer from '../ExerciseOne/CardContainer'

function ExOne(): ReactElement {
  return (
    <div style={{overflowX: 'hidden'}}>
      <CoverContainer />
      <CardContainer />
    </div>
  );
}

export default ExOne;
