import React, { useState } from "react";
import '../styles/styles.scss';
import '../styles/userlist.scss'
import { Link } from "react-router-dom";
import { User } from './types';


type UserListProps = {
  registeredUsers: User[]
}

export default function UsersList(props: UserListProps) {
  const [sortDirection, setSortDirection] = useState(true)

  return (
    <div className='UserList-table'>
      <h4 onClick={() => setSortDirection(!sortDirection)}>
        Name {sortDirection ? '↓' : '↑'}
      </h4>
      {[...props.registeredUsers]
        .sort((a, b) => {
          if (a.userName < b.userName) {
            return sortDirection ? -1 : 1
          } else if (a.userName > b.userName) {
            return sortDirection ? 1 : -1
          } else {
            return 0
          }
        })
        .map(
          user => (
            <div className='UserList-name'>
              <Link to={`/spain-on-react/users/${user.id}`}> {user.userName} </Link>
            </div>
          )
        )}

    </div>

  )
}