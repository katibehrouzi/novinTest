import axios from "axios";

export const SERVER_URL = "https://reqres.in";

const server = axios.create({
    baseURL: SERVER_URL,
});
server.interceptors.request.use(
    (config) => {
        if (!config.headers["Content-Type"]) {
            config.headers["Content-Type"] = "application/json";
        }
        if (!config.headers["Authorization"]) {
            const token = localStorage.getItem("token");
            if (token) config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return error;
    }
);
export default server
