import axios from "axios";
import { Order } from "../types/orderInterface";

export const createOrder = async (data: Order) => {
    const response = await axios.post('http://localhost:5000/orders/create', data);
    return response.data;
}