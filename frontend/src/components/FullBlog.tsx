import { Blog } from "../hooks"
import { Appbar } from "./appbar"
import { Avatar } from "./blogcard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        
        <div className="flex justify-center">
           <div className="max-w-6xl">
           <div className="text-4xl md:text-6xl  font-bold p-4">
                {blog.title}
            </div>
            <div className=" p-4">
                Author: <Avatar name={blog.author.name} loading={false}/> {blog.author.name} 
            </div>
            <div className="pt-10 p-4" dangerouslySetInnerHTML={{__html:blog.content}}>
               
            </div>
            
           </div>
        </div>
    </div>
}