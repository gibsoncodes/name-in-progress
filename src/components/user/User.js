import { useEffect } from 'react'

const User = ({user}) => {

    return (
        <div>
            <h1>{user ? user.username : "Login"}</h1>
        </div>
    )
}

export default User
