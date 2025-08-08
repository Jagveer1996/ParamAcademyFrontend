import queryClient from "../../global";
import { AccessToken } from "../../global";

// export const createAppointmentApi = async (data)=>{
//     const response = await queryClient.post('api/appointment', data,{
//         headers :{
//             "Content-type": "multipart/form-data",
//         }
//     });
//     console.log('appointment response', response);
// }

export const createAppointmentApi = async (data)=>{
  const response = await queryClient.post('api/appointment', data, {
    headers : {
      Authorization: `Bearer ${AccessToken}`

    }
  });
  return response.data;
}

export const getAppointmentApiAll = async()=>{
  const response = await queryClient.get('/api/appointment/all', {
    headers : {
      Authorization : `Bearer ${AccessToken}`
    }
  })

  // console.log("getAppointmentApiAll", response.data.data)

  return response.data;

}

export const getAppointmentApiID = async(id)=>{
  const response =  await queryClient.get(`api/appointment/${id}`, {
    headers : {
      Authorization: `Bearer ${AccessToken}`
    }
  })

  // console.log("response", id)
  return response.data;
}

export const editAppointmentApi = async (data)=>{
    const response =  await queryClient.put(`api/appointment/${data.id}`, data.formData, {
      headers : {
        Authorization: `Bearer ${AccessToken}`
      }
    });
    return response.data;
} 

export const deleteAppointmentApi = async (id)=>{
  const response = await queryClient.delete(`api/appointment/${id}`)

  return response.data
}