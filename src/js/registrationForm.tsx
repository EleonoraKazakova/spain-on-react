import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/styles.scss'
import { User } from './types'

type RegistrationFormProps = {
  registerUser: (user: User) => void  //void: setUser() return nothing
}

export default function RegistrationForm(props: RegistrationFormProps) {
  const history = useHistory()

  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleEmail = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const handlePassword = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value)
  }
  
  const register = () => {
    props.registerUser({ userName: username, email, password, registered: true })
    history.push('/spain-on-react/')
  }

  return (
    <div className='form'>
      <div className='titleForm'> <h3> Registration form</h3> </div>
      <div className='text'>
        <p className="text">
          Input Username
        </p>
        <input
          type="text"
          name="username"
          placeholder="Input Username here"
          value={username}
          onChange={handleUser}
          className='inputForm'
        />

        <p className="text">
          Input email
        </p>
        <input
          type="text"
          name="email"
          placeholder="Input email here"
          value={email}
          onChange={handleEmail}
          className='inputForm'
        />

        <p className="text">
          Input password
      </p>
        <input
          type="password"
          name="password"
          placeholder="Input password here"
          value={password}
          onChange={handlePassword}
          className='inputForm'
        />

        <div className="submit" >
          <div className="text" onClick={register} >
            Create account
          </div>
        </div>
      </div>
    </div>
  )
}