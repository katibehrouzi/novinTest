import { Dispatch, FC, SetStateAction, useState } from "react"
import { userTableDataI } from "../../types/users"
import Button from "../../components/ui/Button"
import LinkButton from "../../components/ui/LinkButton"
import { errorHandle } from "../../api/errorHandle"
import userController from "../../controllers/userController"

const UsersTable: FC<{
    tableData: userTableDataI[]
    onDataChange: Dispatch<SetStateAction<userTableDataI[] | undefined>>
}> = ({ tableData, onDataChange }) => {
    const [deleteLoading, setDeleteLoading] = useState<boolean>(false);

    const handleDelete = async (id: number) => {
        setDeleteLoading(true);
        try {
            const resp = await userController.deleteUser(id);
            onDataChange(tableData => tableData?.filter(user => user.id != id));
            alert('user delete success');
            setDeleteLoading(false);
        }
        catch (err: any) {
            errorHandle(err);
            setDeleteLoading(false);
        }
    }
    return (
        <>
            <table className="min-w-full text-left text-black text-base">
                <thead
                    className="border-b font-semibold bg-teal-200">
                    <tr>
                        <th scope="col" className="px-2 md:px-6 py-4">AVATAR</th>
                        <th scope="col" className="px-2 md:px-6 py-4">FirstName</th>
                        <th scope="col" className="px-2 md:px-6 py-4">LastName</th>
                        <th scope="col" className="px-2 md:px-6 py-4">email</th>
                        <th scope="col" className="px-2 md:px-6 py-4">action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((user) => (
                            <tr key={user.id} className="border-b odd:bg-teal-50 even:bg-teal-100">
                                <td className="px-2 md:px-6 py-4">
                                    <img src={user.avatar} alt={'photo:' + user.first_name} width={40} height={40} className="rounded-full" />
                                </td>
                                <td className="px-2 md:px-6 py-4">{user.first_name}</td>
                                <td className="px-2 md:px-6 py-4">{user.last_name}</td>
                                <td className="px-2 md:px-6 py-4">{user.email}</td>
                                <td className="px-2 md:px-6 py-4 flex flex-col gap-1">
                                    <LinkButton href={"/users/" + user.id} text="detail" className="bg-green-800" />
                                    <LinkButton href={"/users/edit/" + user.id} text="edit" className="bg-stone-600" />
                                    <Button onClick={() => handleDelete(user.id)} disabled={deleteLoading} text="delete" type="button" color="bg-red-700" className="text-sm px-1 py-0.5" />
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}

export default UsersTable