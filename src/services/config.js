import axios from 'axios';
import { urlBase } from "./ApiUrls";

export let defaultAxios = axios.create({
    baseURL: `${urlBase}`,
    headers: {
        'Content-Type': 'application/json'
    },
})