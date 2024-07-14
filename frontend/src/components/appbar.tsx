import { useEffect, useState } from "react";
import { Avatar } from "./blogcard"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { AxiosResponse } from "axios";
import { LogoAvatar } from "./logoAvatar";
export const Appbar=()=>{
    const navigate=useNavigate();
    const[name,setName]=useState<string>("");
    const [loading,setloading]=useState(true);
    useEffect(()=>{
        axios.get<any>(`${BACKEND_URL}/api/v1/blog/name`,{
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then((res:AxiosResponse<any>)=>{
            setName(res.data.name)
            setloading(false);
        })

    },[])
    function goto(){
        navigate("/publish")


    }
    return(
        <div className="border-b flex justify-between items-center px-4 md:px-10 py-4 bg-gray-800 cursor-pointer ">
            <div onClick={()=>{
                navigate("/blogs");
            }} className="text-3xl font-thin md:text-4xl text-white">
                Blog.com
            </div>
            <div className="flex items-center">
            <div className="flex items-center justify-center">
            <button type="button" className="text-gray bg-white  r hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-700 dark:border-gray-700" onClick={goto}>Write a blog</button></div>
            <div>  
            <button type="button" className="text-gray bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2  dark:bg-white dark:hover:bg-gray-100 dark:focus:ring-gray-700 dark:border-gray-700 hidden sm:flex" onClick={()=>{
                localStorage.removeItem("token");
                navigate("/")
            }}>Log Out</button>
            </div>
            <div>
                
                <LogoAvatar name={name} size="big" loading={loading}/>
            </div>
            </div>
        </div>
    )
}