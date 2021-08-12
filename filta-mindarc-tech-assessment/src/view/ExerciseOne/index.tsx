import React, { ReactElement } from "react";
import {Link} from 'react-router-dom'

import CoverContainer from '../ExerciseOne/CaverContainer'
import CardContainer from '../ExerciseOne/CardContainer'

interface Props {}

function ExOne({}: Props): ReactElement {
  return (
    <div style={{overflowX: 'hidden'}}>
      <CoverContainer />
      <CardContainer />
    </div>
  );
}

export default ExOne;
