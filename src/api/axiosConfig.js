import axios from 'axios';

export default axios.create({
    baseURL:' https://a349-2401-4900-1c21-1871-6129-39b8-76de-8437.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});