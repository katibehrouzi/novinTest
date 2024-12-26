import { FC } from "react";

const UserInfoShow: FC<{
    title: string,
    text: string
}> = ({ title, text }) => {
    return (
        <div className="flex gap-4">
            <h4 className="text-lg font-bold">{title}:</h4>
            <p className="text-xl font-light">{text}</p>
        </div>
    )
}

export default UserInfoShow