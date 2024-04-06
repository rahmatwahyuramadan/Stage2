import axios from "axios";

const API = axios.create({
    baseURL: "https://my-json-server.typicode.com/rahmatwahyuramadan/stage2",
});

export default API;