import React from "react";
import { Link } from "react-router-dom";
import '../styles/styles.scss'
import Menu from './menu'
import PhotoBlock from './photoblock'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./homepage";
import Form from './form'
import Textarea from "./textarea";
import linkedin from "../photos/linkedin.png"

function App() {
  return (
    <Router>
      <div className='content'>

        <div className='block'>
          <div className='blockMenu'>
            <Menu />
            <div className='blockSubmit'><Link to='/spain-on-react/signin'>Sign in</Link></div>
          </div>
        </div>

        
        <div className='title text'>
          <p >Cities in Spain  </p> <br/> <p>work in progress</p>
        </div>
        <div className='main'>
          <Switch>

            <Route path='/spain-on-react/photoblock' >
              <PhotoBlock />
            </Route>

            <Route path='/spain-on-react/addtext' >
              <Textarea />
            </Route>

            <Route path={['/spain-on-react/', '/']} exact={true}>
              <HomePage />
            </Route>

            <Route path='/spain-on-react/signin'>
              <Form />
            </Route>

          </Switch>

        </div>


        <div className='footer'>
          <p>Eleonora Kazakova</p>
          <a href="https://www.linkedin.com/in/eleonora-kazakova-0841b07a/" rel="stylesheet">
            <img src={linkedin} className='linkedin' />
          </a>
          
        </div>
      </div>
    </Router>
  )
}

export default App;