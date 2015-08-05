'use strict';

var ReactTilesApp = require('./ReactTilesApp');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;

var content = document.getElementById('content');

var Routes = (
  <Route handler={ReactTilesApp}>
    <Route name="/" handler={ReactTilesApp}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
