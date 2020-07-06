import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import League from './pages/League';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Feed} />
      <Route path="/liga" component={League} />
    </BrowserRouter>
  );
}
