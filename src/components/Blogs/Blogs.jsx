import { useEffect, useState } from "react"
import { MdOutlineAccessTime } from "react-icons/md";
import Blog from "../Blog/Blog";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [readTime, setReadTime] = useState(0);
    
    useEffect(()=>{
        fetch('../../../public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="rounded-lg lg:col-span-2">
                    <h4 className="ps-4 py-2 text-xl text-gray-600">Latest blogs: {blogs.length}</h4>
                    {
                        blogs.map(blog=><Blog key={blog.id} blog={blog}></Blog>)
                    }
                </div>
                <div>
                    <div className="border border-indigo-500 text-indigo-500 text-center rounded-lg p-4 flex justify-center items-center">
                        <MdOutlineAccessTime /> 
                        <span className="ps-1">Spent time on read : {readTime} min</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
