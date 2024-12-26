import { useParams } from "react-router-dom";
import UserForm from "../../components/forms/UserForm/UserForm"
import { useEffect, useState } from "react";
import userController from "../../controllers/userController";
import { errorHandle } from "../../api/errorHandle";
import PageTitle from "../../components/ui/PageTitle";

const EditUserView = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState<boolean>(false);
    const [userName, setUserName] = useState<string>('')

    useEffect(() => {
        if (id) {
            getUser();
        }
    }, [id])

    const getUser = async () => {
        setLoading(true);
        if (id) {
            try {
                const resp = await userController.getUser(id);
                setUserName(resp.data.data.first_name + '' + resp.data.data.last_name)
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
            <PageTitle title="Edit User" />
            {loading ?
                <p>loading ...</p> :
                <>
                    {
                        id &&
                        <UserForm initialValue={{ name: userName, job: '' }} id={id} />
                    }
                </>}

        </>
    )
}

export default EditUserView