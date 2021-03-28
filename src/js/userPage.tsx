import React from "react";
import { useParams } from "react-router-dom";
import '../styles/styles.scss';
import { User } from './types';


type UserPageProps = {
  registeredUsers: User[]
}

export default function UserPage(props: UserPageProps) {
  let { id } = useParams<{id: string}>()
  const user = props.registeredUsers.find(user => user.id === id )
  
  return(
    <div> {user 
      ? <> <p>{user.userName}</p> <p>{user.email}</p> </>
      : 'User not found'}
      
    </div>
  )
}
