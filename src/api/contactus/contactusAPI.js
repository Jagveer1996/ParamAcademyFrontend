import queryClient from "../../global";

export const createContactusAPI = async (data)=>{
    const response = await queryClient.post('api/contactus', data)

    return response.data;
}