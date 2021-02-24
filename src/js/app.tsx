import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.scss'
import Menu from './menu'
import PhotoBlock from './photoblock'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./homepage";
import Form from './form'

function App() {
  return (
    <Router>
      <div className='content'>

        <div className='block'>
          <div className='blockMenu'>
            <Menu />
            <div><Link to='/signin'>Sign in</Link></div>
          </div>
        </div>

        <div className='header'>
          <h1 className='text'>Spain</h1>
        </div>
        <div className='title'><p className='text'>Cities in Spain</p>

        </div>
        <div className='main'>
          <Switch>

            <Route path='/photoblock' >
              <PhotoBlock />
            </Route>

            <Route path='/' exact={true}>
              <HomePage />
            </Route>

            <Route path='/signin'>
              <Form />
            </Route>

          </Switch>

        </div>

                
        <div className='footer'><p>Eleonora Kazakova</p><a href="https://www.linkedin.com/in/eleonora-kazakova-0841b07a/" rel="stylesheet">LinkedIn</a></div>
      </div>
    </Router>
  )
}

export default App;