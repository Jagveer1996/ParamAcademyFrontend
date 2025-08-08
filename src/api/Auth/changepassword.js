import queryClient from "../../global";
import { AccessToken } from "../../global";


export const changePassword = async (data)=>{
    const response = await queryClient.post("/api/registration/change-password", data,{
        headers : {
            Authorization : `Bearer ${AccessToken}`
        }
    });
    console.log("changepassword",response.data)
    return response.data
}


export const forgotPasswordAPI = async (data)=>{
    const response = await queryClient.post("api/registration/forgot-password", data);
    console.log("changepassword",response.data)
    return response.data
}


export const resetPasswordAPI = async (data)=>{
    const response = await queryClient.post("/api/registration/reset-password", data);
    console.log("changepassword",response.data)
    return response.data
}

