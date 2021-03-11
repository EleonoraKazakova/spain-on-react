import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import '../styles/styles.scss'
import { User } from './types'

type LogInFormProps = {
  registeredUsers: User[]
  setUser: (user: User) => void 
}

export default function LogInForm(props: LogInFormProps) {
  const history = useHistory()
  
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [message, setMessage] = useState<string>('')
  
  const handleEmail = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const handlePassword = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value)
  }
  
  const login = () => {
    const registeredUser: User | undefined = props.registeredUsers.find(user => user.email === email && user.password === password)
    if (registeredUser ){
      props.setUser(registeredUser)
      history.push('/spain-on-react/')
    } else {
      setMessage('You need to register')
    }
  }

  return (
    <div>

      <div> <h3 className='text'> Log in form</h3> </div>
      <div className='text'>

        <p className="text">
          Input email
        </p>
        <input
          type="text"
          name="email"
          placeholder="Input email here"
          value={email}
          onChange={handleEmail}
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
        />

        <div className="submit" >
          <div className="text" onClick={login} >
            Enter
          </div>
          <div>{message}</div>
        </div>
      </div>

    </div>
  )
}