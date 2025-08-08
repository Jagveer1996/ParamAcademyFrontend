import queryClient from "../../global";

export const createRegistration = async (data)=>{
    const response = await queryClient.post('/api/registration', data);

    return response.data;
}

export const Login = async (data)=>{
    const response = await queryClient.post('/api/registration/login', data);

    return response.data;
}


export const getRegistration = async ()=>{
    const response = await queryClient.get('/api/registration/all');

    return response.data;
}