import React from 'react';
import { Route } from 'react-router-dom';
import { LayoutRouteInterface } from '../../interfaces/LayoutInterfaces';

const LayoutRoute = ({
  component: Component,
  layout: Layout,
  path: path,
}: LayoutRouteInterface) => {
  return (
    <Route
    path={path}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
};

export default LayoutRoute;
