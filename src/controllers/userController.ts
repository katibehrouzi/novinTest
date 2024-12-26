import server, { SERVER_URL } from "../api/server";
import { userPostDataI } from "../types/users";

const userController = {
  getAllUsers: (pageNum: number) => {
    const url = `${SERVER_URL}/api/users?page=${pageNum}`;
    return server.get(url);
  },
  getUser: (userId: string) => {
    const url = `${SERVER_URL}/api/users/${userId}`;
    return server.get(url);
  },

  postUser: (userInfo: userPostDataI) => {
    const url = `${SERVER_URL}/api/users`;
    return server.post(url, userInfo);
  },

  putUser: (userDataInfo: userPostDataI & { userId: string }) => {
    const url = `${SERVER_URL}/api/users/${userDataInfo.userId}`;
    return server.put(url, { name: userDataInfo.name, job: userDataInfo.job });
  },

  deleteUser: (userDeleteId: number) => {
    const url = `${SERVER_URL}/api/users/${userDeleteId}`;
    return server.delete(url);
  }
}

export default userController