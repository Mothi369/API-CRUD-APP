import axios from "axios"

export const getData= async ()=>{
    return await axios.get(`${process.env.REACT_APP_API}`)

}

export const createName=async (name,email,phone,website)=>{
    return await axios.post(`${process.env.REACT_APP_API}`,name,email,phone,website)
}

export const removeName = async (id)=>{
    return await axios.delete(`${process.env.REACT_APP_API}/${id}`)

}

export const updateName = async (id,name,email,phone,website)=>{
    return await axios.put(`${process.env.REACT_APP_API}/${id}`,name,email,phone,website)

} 

export const getName = async (id)=>{
    return await axios.get(`${process.env.REACT_APP_API}/${id}`)

}
export const getEmail = async (id)=>{
    return await axios.get(`${process.env.REACT_APP_API}/${id}`)

}
export const getPhone = async (id)=>{
    return await axios.get(`${process.env.REACT_APP_API}/${id}`)

}
export const getWebsite = async (id)=>{
    return await axios.get(`${process.env.REACT_APP_API}/${id}`)

}