import { Appbar } from "../components/appbar"
import { useState } from "react";
import { BACKEND_URL } from "../config";
import { useEffect } from "react";
import  axios  from "axios";
import { useNavigate } from "react-router-dom";
export const PublishPage=()=>{
    const [loading,setloading]=useState(false);
    const [blog,setBlog]=useState({
        title:"",
        content:""
    });
    const navigate=useNavigate();
    function onTitleChange(e:any){
        setBlog({...blog,title:e.target.value});
    }
    function onContentChange(e:any){
        setBlog({...blog,content:e.target.value});
    }
    function onPublish(){
        setloading(true);
    
        axios.post(`${BACKEND_URL}/api/v1/blog/blog`, blog, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then(response => {
            setloading(false);
            navigate(`/blog/${response.data.id}`);
        }).catch(error => {
            setloading(false);
            // Handle the error appropriately
            console.error("There was an error publishing the blog!", error);
        });
    }
    
    return(
        <div>
            <Appbar/>
            <div className="flex justify-center text-4xl font-bold mt-4">
                Publish your Blog
            </div>
            <div className="flex flex-col items-center ">
               <div className="max-w-4xl border-2 rounded-xl w-screen p-4 mt-4">
               <div className="flex justify-between">
               <div>
                <input type="text" placeholder="Title" className="border-2 mb-4 rounded-lg p-1" onChange={onTitleChange} />
                </div>
                <div><button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={onPublish}>
                    {loading ?  "Publishing...": "Publish"}


<svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button></div>
                
                
                </div>
                <div>
                <textarea className="border-2 rounded-lg p-1 w-full" placeholder="Enter content"  cols={40} rows={20} onChange={onContentChange}/>
               </div>
               </div>
                
            </div>
        </div>
    )
}