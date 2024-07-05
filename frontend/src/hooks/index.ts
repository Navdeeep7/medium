import axios from "axios";
import { useState,useEffect } from "react"
import { BACKEND_URL } from "../config";
import { AxiosResponse } from "axios";
export interface Blog {
    "content": string;
    "title": string;
    "id": number
    "author": {
        "name": string
    }
}




export const useBlogs=()=>{
    const [loading,setloading]=useState(true);
    const [blogs,setBlogs]=useState<Blog[]>([]);
    useEffect(()=>{
        axios.get<any>(`${BACKEND_URL}/api/v1/blog/bulk`,{
            headers: {
                Authorization:localStorage.getItem("token")
            }
        }).then((response:AxiosResponse<any>)=>{
            setBlogs(response.data.posts.reverse());
            setloading(false);
        })

    },[]);
    return({loading,
        blogs}
        
    )
}

export const useBlog=({id}:{id:string})=>{
    const [loading,setloading]=useState(true);
    const [blog,setBlog]=useState<Blog>({content:"",
    title: "",
    id: 0,
    author: {
        name: ""
    }});
    useEffect(()=>{
        axios.get<any>(`${BACKEND_URL}/api/v1/blog/blog/${id}`,{
            headers: {
                Authorization:localStorage.getItem("token")
            }
        }).then((response:AxiosResponse<any>)=>{
            setBlog(response.data.post);
            setloading(false);
        })

    },[]);
    return({loading,
        blog}
        
    )
}

