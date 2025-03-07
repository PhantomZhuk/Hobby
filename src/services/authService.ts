import axios from "axios";

export function Login({ email, password }: { email: string, password: string }) {
    const response = axios.post('http://localhost:5000/user/login', { email, password }, { withCredentials: true });
    return response;
}

export function Register({ name, email, phone, password }: { name: string, email: string, phone: string, password: string }) {
    const response = axios.post('http://localhost:5000/user/create', { name, email, phone, password }, { withCredentials: true });
    return response;
} 