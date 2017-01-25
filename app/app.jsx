var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load Foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>,
  document.getElementById('app')
);
