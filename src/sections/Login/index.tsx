import { FC } from "react"
import LoginForm from "../../components/forms/LoginForm/LoginForm";

const LoginView: FC = () => {

    return (
        <div className="flex flex-col items-center gap-14">
            <h1 className='text-7xl'>Login Page</h1>
            <LoginForm />
        </div>
    )
}

export default LoginView