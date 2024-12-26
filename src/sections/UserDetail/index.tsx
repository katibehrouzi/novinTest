import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import userController from "../../controllers/userController";
import { errorHandle } from "../../api/errorHandle";
import PageTitle from "../../components/ui/PageTitle";
import { userTableDataI } from "../../types/users";
import UserInfoShow from "./userInfoShow";

const UserDetailView: FC = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [userData, setUserData] = useState<userTableDataI>()

    useEffect(() => {
        if (id) {
            getUser();
        }
    }, [id]);

    const getUser = async () => {
        setLoading(true);
        if (id) {
            try {
                const resp = await userController.getUser(id);
                setUserData(resp.data.data)
                setLoading(false);
            }
            catch (err: any) {
                errorHandle(err);
                setLoading(false);
            }
        }
    };

    return (
        <>
            <PageTitle title="User Info" />
            <div>
                {loading ?
                    <p>loading...</p> :
                    <>
                        {
                            userData &&
                            <div className="flex flex-col gap-8 items-center">
                                <img src={userData.avatar} alt="user image" width={180} height={180} />
                                <UserInfoShow text={userData.first_name} title="FirstName" />
                                <UserInfoShow text={userData.last_name} title="LastName" />
                                <UserInfoShow text={userData.email} title="Email" />
                            </div>
                        }
                    </>
                }
            </div>
        </>
    )
}

export default UserDetailView