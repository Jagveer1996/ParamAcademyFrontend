import queryClient from "../../global";
import { AccessToken } from "../../global";

export const createInqueryApi = async (data)=>{
    const response = await queryClient.post('api/inqueryform', data, {
        headers : {
            Authorization : `Bearer ${AccessToken}`
        }
    });
    return response.data;
}

export const getInqueryApi = async()=>{
    const response = await queryClient.get('/api/inqueryform/all');
    console.log("Get Inquery Data", response.data.data);
     return response.data.data
}

export const getInqueryApiID = async(id)=>{
    const response = await queryClient.get(`/api/inqueryform/${id}`);
    return response.data
}

export const deleteInqueryApi = async(id)=>{
    const response = await queryClient.delete(`api/inqueryform/${id}`);
    return response.data
}

export const editInqueryApi = async (data)=>{
    const response = await queryClient.put(`api/inqueryform/${data.id}`, data.formData);
    return response.data
}