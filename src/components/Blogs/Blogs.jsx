import { useEffect, useState } from "react"
import { MdOutlineAccessTime } from "react-icons/md";

import Blog from "../Blog/Blog";
import toast from "react-hot-toast";
import BookmarkedBlog from "../BookmarkedBlog/BookmarkedBlog";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [totalReadTime, setTotalReadTime] = useState(0); 
    const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
   
    useEffect(()=>{
        fetch('../../../public/blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    const handleMarkAsRead = (readingTime) => {
        setTotalReadTime(totalReadTime + readingTime);
        toast.success(`Blog has been mark as read.`);        
        }
        
        const handleAddBookmark = blog => {
        const updatedBlogs = [...bookmarkedBlogs, blog];
        setBookmarkedBlogs(updatedBlogs);
        toast.success(`Blog has been bookmarked!`);        
    }

    return (
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="rounded-lg lg:col-span-2">
                    <h4 className="ps-4 py-2 text-xl text-gray-600">Latest blogs: {blogs.length}</h4>
                    {
                        blogs.map(blog=><Blog key={blog.id} blog={blog} handleMarkAsRead={handleMarkAsRead} handleAddBookmark={handleAddBookmark} ></Blog>)
                    }
                </div>
                <div>
                    <div className="border border-indigo-500 text-indigo-500 text-center rounded-lg p-4 flex justify-center items-center">
                        <MdOutlineAccessTime /> 
                        <span className="ps-1">Spent time on read : {totalReadTime} min</span>
                    </div>

                    <div className="bg-gray-100 rounded-lg p-2 mt-4">
                        <h3 className="p-2 text-2xl font-medium">Blog bookmarked: {bookmarkedBlogs.length}</h3>
                        {
                            bookmarkedBlogs.map( bookmarkBlog =><BookmarkedBlog key={bookmarkBlog.id} bookmarkBlog={bookmarkBlog}></BookmarkedBlog> )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
