import { FC } from "react"
import Button from "./Button"
import { useNavigate } from "react-router-dom"

const PageTitle: FC<{
    title: string,
    className?: string
}> = ({ title, className }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="flex py-1 px-4 items-center justify-between bg-green-950 text-white mb-4 ">
            <h1 className={`text-6xl mb-2 font-medium ${className}`}>{title}</h1>
            <Button text="logout" type="button" className="bg-transparent" onClick={handleLogout} />
        </div>
    )
}

export default PageTitle