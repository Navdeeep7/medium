import { Link } from "react-router-dom";

interface BlogCardProps{
    authorName:string;
    title:string;
    content:string;
    publishedDate:string;
    id:number
}



export const BlogCard=({
    authorName,
    title,
    content,
    publishedDate,
    id
}:BlogCardProps)=>{
    return(
        <Link to={`/blog/${id}`}><div className="p-4 border-b-2 max-w-4xl flex flex-col">
        <div className="flex items-center"><Avatar name={authorName}/>
           <div className="pl-2 font-semibold">{authorName} . </div> 
           <div className="text-sm text-slate-600">{publishedDate}</div>
        </div>
        
        <div className="text-2xl font-bold mt-2 ">
            {title}
        </div>
        <div className="font-medium">
            {content.slice(0,150)+"..."}

        </div>
        <div className="text-sm text-slate-600 mt-6">
            {`${Math.ceil(content.length/500)} minute(s) read`}
        </div>
        

    </div></Link>

    )


}

export function Circle() {
    return <div className="h-1 w-1 rounded-full bg-slate-500">

    </div>
}


export function Avatar({ name, size = "small",loading }: { name: string , size?: "small" | "big",loading:boolean }) {
    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-200 rounded-full ${size === "small" ? "w-6 h-6" : "w-10 h-10"} m`}>
    <span className={`${size === "small" ? "text-xs" : "text-md"} font-extralight text-gray-600 dark:text-black `}>
       {loading ? "":name[0].toUpperCase()}

    </span>
</div>
}