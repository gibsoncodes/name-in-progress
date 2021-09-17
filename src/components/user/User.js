import Login from './Login'

const User = ({user, toLogout, toLogin, toSignup}) => {

    let display;

    if (user) {
        display = (
            <div>
                <h1>Welcome back {user.username}</h1>
                <button onClick={toLogout}>logout</button>
            </div>
        )
    } else {
        display = <Login toLogin={toLogin}/>
    }

    return (
        display
    )
}

export default User
