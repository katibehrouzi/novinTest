
export const errorHandle = (err: any) => {
    if (err?.status === 401) {
        localStorage.removeItem('token');
    }
    else {
        alert(err?.response?.data?.error);
    }
}