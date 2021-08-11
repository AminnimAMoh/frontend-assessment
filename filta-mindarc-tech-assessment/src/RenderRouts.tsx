import {
  RouteComponentProps,
  Route,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import routes from './routes'

import React, { ReactElement } from "react";
import { IRoute } from "./types";

interface Props {
}

function RenderRouts({}: Props): ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route: IRoute, index: number) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              render={(props: RouteComponentProps<any>) => {
                return <route.component name={route.name} {...props} {...route.props} {...route.path} />;
              }}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default RenderRouts;
