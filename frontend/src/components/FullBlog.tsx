import { Blog } from "../hooks"
import { Appbar } from "./appbar"
import { Avatar } from "./blogcard"

export const FullBlog = ({ blog }: {blog: Blog}) => {
    return <div>
        <Appbar />
        <div className="flex justify-center">
           <div className="max-w-6xl">
           <div className="text-6xl font-bold">
                {blog.title}
            </div>
            <div className="pt-4 ">
                Author: <Avatar name={blog.author.name} /> {blog.author.name}
            </div>
            <div className="pt-4 text-xl font-semibold">
                {blog.content}
            </div>
           </div>
        </div>
    </div>
}