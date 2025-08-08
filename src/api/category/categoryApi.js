import queryClient from "../../global";
import { AccessToken } from "../../global";

export const createCategory = async (data)=>{
    const response = await queryClient.post('/api/category', data, {
        headers : {
            
            Authorization : `Bearer ${AccessToken}`
        }
    });
    console.log(response.data)
    return response.data;
}

export const getCategory = async ()=>{
    const response = await queryClient.get('/api/category/all', {
        headers : {
            Authorization : `Bearer ${AccessToken}`
        }
    });

    return response.data;
}

export const deleteCategory = async (id)=>{
    const response = await queryClient.delete(`/api/category/${id}`, {
        headers : {
            Authorization : `Bearer ${AccessToken}`
        }
    })

       return response.data; 
}