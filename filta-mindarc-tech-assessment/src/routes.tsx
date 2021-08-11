import React, { lazy } from "react";
import {IRoute} from './types'

import LandingPage from './view/Landing'
import ExOne from './view/ExerciseOne'
import ExTwo from './view/ExerciseTwo'

const routes: IRoute[]=[
  {
    path: "/",
    name: 'Landing',
    exact: true,
    component: () => <LandingPage />,
  },
  {
    path: "/ExOne",
    name: 'Exersize One',
    exact: true,
    component: () => <ExOne />,
  },
  {
    path: "/ExTwo",
    name: 'Exersize Two',
    exact: true,
    component: () => <ExTwo />,
  },
];

export default routes
