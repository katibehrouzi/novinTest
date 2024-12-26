import { FC } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import TextFiled from "../../ui/TextInput";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import { errorHandle } from "../../../api/errorHandle";
import { userPostDataI } from "../../../types/users";
import userController from "../../../controllers/userController";


const validationSchema = yup.object({
    "name": yup.string().required('please enter name'),
    "job": yup.string().required('please enter job'),
})

const UserForm: FC<{
    initialValue: userPostDataI
    id?: string
}> = ({ initialValue, id }) => {

    const navigate = useNavigate();

    const handleSubmitUser = async ({ name, job }: { name: string, job: string }) => {
        if (id) {
            try {
                const resp = await userController.putUser({ name: name, job: job, userId: id })
                alert(`Edit ${resp.data.name} success`);
                console.log(resp.data)
                navigate('/users');
            }
            catch (err: any) {
                errorHandle(err);
            }
        }
        else {
            try {
                const resp = await userController.postUser({ name: name, job: job })
                alert(`Create ${resp.data.name} success`);
                navigate('/users');
            }
            catch (err: any) {
                errorHandle(err);
            }
        }
    }

    return (
        <Formik
            initialValues={initialValue}
            onSubmit={(values, actions) => {
                handleSubmitUser(values);
            }}

            validationSchema={validationSchema}
        >
            {({ isValid, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-900">
                            name:
                        </label>
                        <TextFiled
                            name="name"
                            inputtype="text"
                            placeholder={'morpheus'}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-900">
                            job:
                        </label>
                        <TextFiled
                            name="job"
                            inputtype="text"
                            placeholder={'leader'}
                        />
                    </div>
                    <Button type="submit" disabled={!isValid} text={id ? "Edit user" : "Create User"} />
                </form>
            )}

        </Formik>

    )
}

export default UserForm