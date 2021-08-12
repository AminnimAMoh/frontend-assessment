import {IRoute} from './types'

import LandingPage from './view/Landing'
import ExOne from './view/ExerciseOne'
import ExTwo from './view/ExerciseTwo'
import Home from './view/Home'
const routes: IRoute[]=[
  {
    path: "/",
    name: 'Landing',
    exact: true,
    component: () => <LandingPage />
  },
  {
    path: "/ExOne",
    name: 'Exersize One',
    exact: true,
    component: () => [<ExOne />, <Home/>]
  },
  {
    path: "/ExTwo",
    name: 'Exersize Two',
    exact: true,
    component: () => [<ExTwo />,<Home/>]
  },
];

export default routes
