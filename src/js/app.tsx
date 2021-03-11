import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import '../styles/app.scss'
import Menu from './menu'
import PhotoBlock from './photoblock'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./homepage";
import RegistrationForm from './registrationForm'
import LogInForm from './logInForm'
import Textarea from "./textarea";
import linkedin from "../photos/linkedin.png"
import {User} from './types'


function App() {
  const unRegistredUser = {userName: '', registered: false, email: '', password: ''}
  const [user, setUser] = useState<User>(unRegistredUser) //currentUser
  const history = useHistory()
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([])

  const registerUser = (newUser: User) => {
    setUser(newUser)
    setRegisteredUsers([...registeredUsers, newUser] )
  }

  const logOut = () => {
    setUser(unRegistredUser)
    history.push('/spain-on-react/')
  }
  
  return (
    <Router>
      <div className='content'>

        <div className='block'>
          <div className='blockMenu'>
            <Menu />
            <div className='blockSubmit'>
              { 
                user.registered 
                ? <div className='blockLog'>  
                    <div onClick={logOut}> Log out </div> 
                    {user.userName} 
                  </div> 
                : <div className='blockLog'> 
                    <Link to='/spain-on-react/login'> Log in </Link> 
                    <Link to='/spain-on-react/signin'> Sign in </Link>
                  </div>
              }
            </div>
          </div>
        </div>

        
        <div className='title text'>
          <p> Cities in Spain </p> <br/> <p>work in progress</p>
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

            <Route path='/spain-on-react/login'>
              <LogInForm registeredUsers={registeredUsers} setUser={setUser} />
            </Route>

            <Route path='/spain-on-react/signin'>
              <RegistrationForm registerUser={registerUser} /> {/*send to Form setUser; registerUser is property of FormProps in Form*/}
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