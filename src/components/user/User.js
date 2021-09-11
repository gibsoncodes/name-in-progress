import Login from './Login'

const User = ({user, toLogout}) => {

    let display;

    if (user) {
        display = (
            <div>
                <h1>Welcome back {user.username}</h1>
                <button onClick={toLogout}>logout</button>
            </div>
        )
    } else {
        display = <Login />
    }

    return (
        display
    )
}

export default User
