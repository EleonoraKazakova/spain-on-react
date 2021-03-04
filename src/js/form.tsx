import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/styles.scss'

type User = {
  username: string,
  email: string,
  password: string
}

export default function Form() {
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const [openSignIn, setOpenSignIn] = useState(false)
  const toggleSignIn = () => {
    setOpenSignIn(!openSignIn)
  }

  const handleUser = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleEmail = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(target.value)
  }

  const handlePassword = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(target.value)
  }

  const [users, setUsers] = useState<User[]>([])
  const register = () => {
    setUsers([...users, { username, email, password }])
  }



  /*const [openModal, setOpenModal] = useState(false)
  const toggleModal = () => setOpenModal(!openModal) */

  return (
    <div>
     
        <div> <h3 className='text'> Registration form</h3> </div>
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
        />

        <p className="text">
          Input email
      </p>
        <input
          type="text"
          name="username"
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
          <div className="text" onClick={register} >
            Create account
        </div>
        </div>
        </div>
        <div>{users.map(el => <div> <p>{el.username}</p> <p>{el.email}</p> <p>{el.password}</p> </div>)}</div>
      

      
    </div>
  )


}