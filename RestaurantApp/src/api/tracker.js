import axios from "axios";
//Axios Connects to Ngrok to validate User login/Registration
export default axios.create({
    baseURL: 'https://f64b-72-216-115-109.ngrok-free.app'
});
