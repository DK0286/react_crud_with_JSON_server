import axios from 'axios'
const url ="http://localhost:3003/users"
export const getCricketer=async (id)=>{
    id=id || "";

return await axios.get(`${url}/${id}`)
}

 export const addCricketer=async(cricketer)=>{
    return await axios.post(url,cricketer)
}

export const editCricketer=async (id,cricketer)=>{
    return await axios.put(`${url}/${id}`,cricketer)
}


export const deleteCricketer=async(id)=>{
    return await axios.delete(`${url}/${id}`)
}                                                                                                                                     