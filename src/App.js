import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import Home from './layout'
const app = (props) => {
  return (
    <Route path="/" component={Home} />
  )
}
export default withRouter(app)