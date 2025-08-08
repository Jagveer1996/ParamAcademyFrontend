import queryClient from "../../global";

export const createHireFromusAPI = async (data)=>{
    const response = await queryClient.post('api/hireFromus', data, {
        headers : {
            "Content-type": "multipart/form-data", 
        }
    })

    return response.data;
};

export const getHireFromusAPIAll = async ()=>{
    const response = await queryClient.get('/api/hireFromus/all');

    return response.data.data
}

export const getHireFromusAPIid = async (id)=>{
    const response = await queryClient.get(`/api/hireFromus/${id}`);
    return response.data;
}

export const editHireFromusAPI = async (data)=>{
    const response = await queryClient.put(`/api/hireFromus/${data.id}`, data.formData,
        {headers : {
            "Content-type": "multipart/form-data", 
        }}
    );
    return response.data;
}

export const deleteHireFromusAPI = async (id)=>{
    const response = await queryClient.delete(`/api/hireFromus/${id}`);
    return response.data
}