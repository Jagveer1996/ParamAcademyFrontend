import queryClient from "../../global";


export const createFaq = async (data)=>{
    const response = await queryClient.post('/api/faq', data)

    return response.data;
} 


export const getFaq = async ()=>{
    const response = await queryClient.get('/api/faq/all');
    // console.log("getFaq", response.data)
    return response.data
}

export const getFaqID = async (id)=>{
    const response = await queryClient.get(`/api/faq/${id}`);

    return response.data;
}

export const editFaq = async (data)=>{
    const response = await queryClient.put(`/api/faq/${data.id}`, data.formData);
    console.log("responce", data)
    return response.data;

}

export const deleteFaq = async (id)=>{
    const response = await queryClient.delete(`/api/faq/${id}`);

    return response.data;
}