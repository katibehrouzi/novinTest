import { FC } from "react"
import { Link } from "react-router-dom"

const LinkButton: FC<{
    href: string,
    className?: string,
    text: string
}> = ({ href, className, text }) => {
    return (
        <Link to={href} className={`text-sm rounded-sm flex justify-center text-white px-1 py-0.5 ${className ? className : ''} `}>
            {text}
        </Link>
    )
}

export default LinkButton