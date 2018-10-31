import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Dummy from './containers/Dummy/Dummy';

const App = () =>  {
  return (
    <BrowserRouter>
      <div className="yoMan" >
        <Route path="/" component={Dummy} />
      </div>
    </BrowserRouter>
  );
}


export default App;
