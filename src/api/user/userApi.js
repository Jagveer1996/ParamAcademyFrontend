import queryClient from "../../global";


export const createUserApi = async (data)=>{
  
    const response = await queryClient.post("/api/user/abc",data);
    console.log(response)
    // return response
}