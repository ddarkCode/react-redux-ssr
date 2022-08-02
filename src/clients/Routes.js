import React from 'react';
import { Route } from 'react-router-dom';

import Home from './components/Home';
import Another from './components/Another';

const Routes = () => {
  return (
    <div>
      <Route path="/" exact component={Home} />
      <Route path="/another" component={Another} />
    </div>
  );
};

export default Routes;
