import { FC, useEffect, useState } from "react"
import UsersTable from "./usersTable";
import userController from "../../controllers/userController";
import { errorHandle } from "../../api/errorHandle";
import Button from "../../components/ui/Button";
import { userTableDataI } from "../../types/users";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/ui/PageTitle";

const UsersView: FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [pageNum, setPageNum] = useState<number>(1);
    const [totalPage, setTotalPage] = useState<number>(1);
    const [users, setUsers] = useState<userTableDataI[]>();
    const navigate = useNavigate();

    useEffect(() => {
        if (pageNum) {
            getAllUser();
        }
    }, [pageNum])

    const getAllUser = async () => {
        setLoading(true);
        try {
            const resp = await userController.getAllUsers(pageNum);
            if (resp.data.total_pages) {
                setTotalPage(Number(resp.data.total_pages));
            }
            if (resp.data.data) {
                setUsers(resp.data.data);
            }
            setLoading(false);
        }
        catch (err: any) {
            errorHandle(err);
            setLoading(false);
        }
    };

    const handleNextPage = () => {
        if (pageNum < totalPage) {
            setPageNum(prev => prev + 1)
        }
    };

    const handlePrevPage = () => {
        if (pageNum > 1) {
            setPageNum(prev => prev - 1)
        }
    };

    return (
        <>
            <PageTitle title="Users" />
            <Button text="Create New User" type="button" onClick={() => navigate('/users/create')} />
            <div className="relative my-3">
                {loading ?
                    <h2>loading...</h2>
                    :
                    <>
                        {users ?
                            <UsersTable tableData={users} onDataChange={setUsers} />
                            :
                            <p>Not users to show</p>
                        }
                    </>
                }
            </div>
            <div className={`flex gap-4 ${users ? "" : "hidden"}`}>
                <Button text="prev page" disabled={pageNum === 1} type="button" onClick={handlePrevPage} />
                <Button text="next page" disabled={pageNum >= totalPage} type="button" onClick={handleNextPage} />
            </div>
        </>
    )
}

export default UsersView