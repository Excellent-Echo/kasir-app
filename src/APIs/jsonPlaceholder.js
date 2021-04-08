import axios from "axios";

const Axios = axios.create({
    // baseURL: "https://pokeapi.co/api/v2",
}); 

Axios.interceptors.request.use (
    // function (config) {
    //     console.log(config);
    //     return config;
    // },
    // function (error) {
    //     return Promise.reject(error);
    // }
)

export default Axios;