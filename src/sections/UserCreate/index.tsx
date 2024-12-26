import UserForm from "../../components/forms/UserForm/UserForm"
import PageTitle from "../../components/ui/PageTitle"

const CreateUserView = () => {
    return (
        <>
            <PageTitle title="Create User" />
            <UserForm initialValue={{ name: '', job: '' }} />
        </>
    )
}

export default CreateUserView