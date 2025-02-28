import axios from "axios";

export const getDreamPlants = async () => {
    const response = await axios.get('http://localhost:5000/flowers/allFlowers')
    return response.data;
}