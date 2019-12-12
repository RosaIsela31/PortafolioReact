// Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TotalView from './TotalView';


class App extends Component {
  render() {

      return (
        <Router basename={window.location.pathname || ''}>
            <Switch>
               <Route exact path='/' component={TotalView}/>
            </Switch>
        </Router> 
      );
  }
}

export default App;