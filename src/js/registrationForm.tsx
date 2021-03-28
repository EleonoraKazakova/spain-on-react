import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import '../styles/styles.scss'
import { User } from './types'

type RegistrationFormProps = {
  registerUser: (user: User) => void  //void: setUser() return nothing
}


export const validateUserName = (username: string): null | string =>
  username.length > 0 ? null : 'You should enter Username'

export const validateUserEmail = (email: string): null | string =>
  /\S+@\S+\.\S+/.test(email)  ? null : 'You should enter valid email'

export const validateUserPassword = (password: string): null | string =>
  password.length > 5 ? null : 'Your password should have 6 or more symbols'


export default function RegistrationForm(props: RegistrationFormProps) {
  const history = useHistory()

  const [error, setError] = useState<null | string>(null)
  const [errorEmail, setErrorEmail] = useState<null | string>(null)
  const [errorPassword, setErrorPassword] = useState<null | string>(null)

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
    const errorMessage = validateUserName(username)
    const errorEmailMessage = validateUserEmail(email)
    const errorPasswordMessage = validateUserPassword(password)
    if (errorMessage !== null || errorEmailMessage !== null || errorPasswordMessage !== null) {
      setError(errorMessage)
      setErrorEmail(errorEmailMessage)
      setErrorPassword(errorPasswordMessage)
    } else {
      props.registerUser({ userName: username, email, password, registered: true, id: uuidv4() })
      history.push('/spain-on-react/')
    }
  }

  return (
    <div className='form'>
      <div className='titleForm'> <h3> Registration form</h3> </div>
      <div className='text'>
        <p className="text">
          Input Username
        </p>
        <p>{error}</p>
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
        <p>{errorEmail}</p>
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
        <p>{errorPassword}</p>
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