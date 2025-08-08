import axios from 'axios';
export const BASEURL = "http://localhost:8000"
export const AccessToken = localStorage.getItem('AccessToken');

const queryClient = axios.create({
    baseURL : BASEURL,  
    headers : {
        'Content-Type' : 'application/json'
    }
});

export default queryClient; 