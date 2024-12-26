import { FC } from "react"

const Button: FC<{
    text: string;
    disabled?: boolean
    onClick?: () => void;
    className?: string;
    color?: string;
    type: "submit" | "reset" | "button" | undefined
}> = ({ text, onClick, disabled, type, className, color }) => {
    return (
        <button
            className={`flex justify-center rounded-sm ${disabled ? 'bg-gray-600' : `${color ? color : 'bg-green-800'}`} text-white ${className ? className : 'py-2 px-8'}`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    )
}

export default Button