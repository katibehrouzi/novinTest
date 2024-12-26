import { FC } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import TextFiled from "../../ui/TextInput";
import Button from "../../ui/Button";
import { useNavigate } from "react-router-dom";
import authController from "../../../controllers/authController";
import { errorHandle } from "../../../api/errorHandle";


const validationSchema = yup.object({
    "email": yup.string().required('please enter email'),
    "password": yup.string().required('please enter password'),
})

const LoginForm: FC = () => {

    const navigate = useNavigate();

    const loginUser = async ({ email, password }: { email: string, password: string }) => {
        try {
            const resp = await authController.postLogin({ email: email, password: password })
            if (resp.data.token) {
                localStorage.setItem('token', JSON.stringify(resp.data?.token));
                navigate('/users');
            }
        }
        catch (err: any) {
            errorHandle(err);
            localStorage.removeItem('token');
        }
    }

    return (
        <Formik
            initialValues={{
                "email": '',
                "password": ''
            }}
            onSubmit={(values, actions) => {
                loginUser(values)
            }}

            validationSchema={validationSchema}
        >
            {({ isValid, handleSubmit }) => (
                <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-900">
                            email:
                        </label>
                        <TextFiled
                            name="email"
                            inputtype="text"
                            placeholder={'eve.holt@reqres.in'}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium text-gray-900">
                            password:
                        </label>
                        <TextFiled
                            name="password"
                            inputtype="password"
                            placeholder={'password'}
                        />
                    </div>
                    <Button type="submit" disabled={!isValid} text="Login" />

                </form>
            )}

        </Formik>

    )
}

export default LoginForm