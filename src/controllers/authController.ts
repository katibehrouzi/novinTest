import server, { SERVER_URL } from "../api/server";
import { UserDataI } from "../types/login";

const authController = {
  postLogin: (userInfo: UserDataI) => {
    const url = `${SERVER_URL}/api/login`;
    return server.post(url, userInfo);
  }
}

export default authController