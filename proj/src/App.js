import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Dashboard  from './components/dashboard/Dashboard'
import ProjectDetails from './components/projects/ProjectDetails'


// continue https://www.youtube.com/watch?v=f4Lg-nzE0u8&list=PL4cUxeGkcC9iWstfXntcj8f-dFZ4UtlN3&index=8
class App extends Component {
  render (){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/project/:id' component={ProjectDetails} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App;
