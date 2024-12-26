import { FC, useLayoutEffect } from "react"
import LoginView from "../../sections/Login";

const Login: FC = () => {
    useLayoutEffect(() => {
        localStorage.removeItem('token');
    }, [])
    return (
        <LoginView />
    )
}

export default Login