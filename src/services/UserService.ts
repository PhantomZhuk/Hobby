import axios from "axios";

export const getUsers = async () => {
    const response = await axios.get('http://localhost:5000/user/allUsers', { withCredentials: true });
    console.log(response);
    return response.data;
}