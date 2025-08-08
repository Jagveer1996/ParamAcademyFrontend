import queryClient from "../../global"
import { AccessToken } from "../../global";

export const createWorkWithusAPI = async (data)=>{
    const response = await queryClient.post('api/workWithus', data,{
        headers :{
        "Content-type": "multipart/form-data", 
      }
    }) 
    return response.data;
}

export const getWorkWithusAPI = async ()=>{
  const response = await queryClient.get('api/workWithus/all', {
    headers : {
      Authorization : `Bearer ${AccessToken}` 
    }
  });
  return response.data.data;
};

export const getgetWorkWithusAPIID = async (id)=>{
  const response = await queryClient.get(`api/workWithus/${id}`, {
    headers : {
      Authorization : `Bearer ${AccessToken}`
    }
  });
  return response.data;
};

export const editWorkWithusAPI = async (data)=>{
  const response = await queryClient.put(`api/workWithus/${data.id}`, data.formData , {
    headers : {
      Authorization : `Bearer ${AccessToken}`
    }
  });
  return response.data;
}

export const deleteWorkWithusAPI = async (id)=>{
  const response = await queryClient.delete(`api/workWithus/${id}`, {
    headers : {
      "Content-type": "multipart/form-data",
      Authorization : `Bearer ${AccessToken}`
    }
  });
  return response.data
}