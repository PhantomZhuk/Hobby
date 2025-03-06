import axios from "axios";

export const getSubscribes = async () => {
    const response = await axios.get('http://localhost:5000/subscribe/allSubscribers', { withCredentials: true });
    console.log(response);
    return response.data;
}