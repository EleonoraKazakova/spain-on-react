import React, { useState } from "react"
import { Link, useHistory } from "react-router-dom"
import '../styles/app.scss'
import Menu from './menu'
import PhotoBlock from './photoblock'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from "./homepage"
import RegistrationForm from './registrationForm'
import LogInForm from './logInForm'
import Textarea from "./textarea"
import linkedin from "../photos/linkedin.png"
import {User} from './types'
import UsersList from './usersList'
import UserPage from "./userPage"
import users from './users'


function App() {
  const unRegistredUser = {userName: '', registered: false, email: '', password: '', id: ''}
  const [user, setUser] = useState<User>(unRegistredUser) //currentUser
  const history = useHistory()
  const [registeredUsers, setRegisteredUsers] = useState<User[]>(users)

  const registerUser = (newUser: User) => {
    setUser(newUser)
    setRegisteredUsers([...registeredUsers, newUser])
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
          <h3>Cities in Spain</h3>  <p>work in progress</p>
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
            
            <Route path='/spain-on-react/users/:id'>
              <UserPage registeredUsers={registeredUsers} />
            </Route>

            <Route path='/spain-on-react/users'>
              <UsersList registeredUsers={registeredUsers} />
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