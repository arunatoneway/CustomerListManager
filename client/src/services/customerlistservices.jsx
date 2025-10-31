
import { data } from "react-router-dom"
import { axiosInstance } from "../axios/axiosInstance"


export const listCustomers =()=>{

    return axiosInstance.get("/customer/list")
}

export const userSignup =(data)=>{
    return axiosInstance.post("/user/signup", data)
}

export const userLogin =(data)=>{
    return axiosInstance.post("/user/login", data)
}
export const userLogout =()=>{
    return axiosInstance.post("/user/logout")
}

export const customerUpdate =(data,customerid)=>{
    return axiosInstance.put(`/customer/update/${customerid}`,data)
}
export const customerdelete =(customerid)=>{
    return axiosInstance.delete(`/customer/remove/${customerid}`)
}
export const customeradd =(data)=>{
    return axiosInstance.post("/customer/create",data)
}