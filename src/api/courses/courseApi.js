import queryClient from "../../global";
import { AccessToken } from "../../global";


export const getCourseApi = async(AccessToken)=>{
    const response = await queryClient.get("/api/coursedetail/all",{
        headers : {
            Authorization: `Bearer ${AccessToken}`
        }
    })
    // console.log(response.data.data)
    return response.data.data
}

export const getCourseApiID = async (id)=>{
    const response = await queryClient.get(`/api/coursedetail/${id}`,{
        headers : {
            Authorization: `Bearer ${AccessToken}`
        }
    });
    return response.data

}

export const editCourseApiID = async (data)=>{
    const response = await queryClient.put(`/api/coursedetail/${data.id}`, data.formData,{
        headers : {
            Authorization: `Bearer ${AccessToken}`
        }
    });
    return response.data

}

export const deleteCourseApi = async (id)=>{
    const response = await queryClient.delete(`/api/coursedetail/${id}`);

    return response.data
}

export const createCourseApi = async(data)=>{
    const response = await queryClient.post('/api/coursedetail', data,{
        headers :{
        "Content-type": "multipart/form-data", 

      }
    });
    
    return response.data
}