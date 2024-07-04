import { Appbar } from "../components/appbar"
import { BlogCard } from "../components/blogcard"
import { useBlogs } from "../hooks"
import { BlogSkeleton } from "../components/blogskeleton"
export const Blogs=()=>{
    const {loading,blogs}=useBlogs();
    if (loading) {
        return <div>
            <Appbar /> 
            <div  className="flex justify-center">
                <div>
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        </div>
    }
    return(
        <div>
            <div>
                <Appbar/>
            </div>
            <div className=" flex flex-col items-center ">
            <div>
            {blogs.map(blog => 
                
                    
                <BlogCard
            id={blog.id}
            authorName={blog.author.name || "Anonymous"}
            title={blog.title}
            content={blog.content}
            
        />
            
        )
    }
            </div>
            
            
            </div>
        </div>
    )
}
