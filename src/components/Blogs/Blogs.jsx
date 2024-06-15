import { useEffect, useState } from "react"
import { MdOutlineAccessTime } from "react-icons/md";

import Blog from "../Blog/Blog";
import toast from "react-hot-toast";
import BookmarkedBlog from "../BookmarkedBlog/BookmarkedBlog";
import { addToStorage, getMarkedBooked } from "../../localStorage";

export default function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const [totalReadTime, setTotalReadTime] = useState(0);
    const [bookmarkedBlogs, setBookmarkedBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('../../../public/blogs.json')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setIsLoading(false  );
            })
    }, [])

    useEffect(()=>{
        if (blogs.length){
          const bookmarkedFromStorage = getMarkedBooked();
          const tempBookedMarked = [];
          for (const id of bookmarkedFromStorage) {
            const blog = blogs.find(blog => blog.id === id);
            if(blog) {
                tempBookedMarked.push(blog);
            }
          }
          setBookmarkedBlogs(tempBookedMarked);
        }
      },[blogs])

    const handleMarkAsRead = id => {
        const updatedBlogs = blogs.map((blog) =>
            blog.id === id ? { ...blog, isRead: !blog.isRead } : blog
        );
        setBlogs(updatedBlogs);
        const newTotalReadTime = updatedBlogs.reduce((acc, blog) => {
            return acc + (blog.isRead ? blog.reading_time : 0);
        }, 0);
        setTotalReadTime(newTotalReadTime);
        if (updatedBlogs.find((blog) => blog.id === id).isRead) {
            toast.success(`Blog has been marked as read.`);
        } else {
            toast.success(`Blog marked as unread.`);
        }
    }

    const handleAddBookmark = blog => {
        const existingBookmark = bookmarkedBlogs.find((existingBlog) => existingBlog.id === blog.id);
        if (existingBookmark) {
            toast.error('This blog is already bookmarked.'); // Informative message
        } else {
            setBookmarkedBlogs([...bookmarkedBlogs, blog]);
            addToStorage(blog.id``)
            toast.success('Blog has been bookmarked!');
        }
    }   

    return (
        <div className="container mx-auto mt-5">
            {isLoading ?
                (<div className="flex flex-col w-1/2 gap-5 p-2 mx-auto bg-white shadow-lg select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row">
                    <div className="bg-gray-200 h-52 sm:h-full sm:w-72 rounded-xl animate-pulse" />
                    <div className="flex flex-col flex-1 gap-5 sm:p-2">
                        <div className="flex flex-col flex-1 gap-3">
                            <div className="w-full bg-gray-200 animate-pulse h-14 rounded-2xl" />
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl" />
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl" />
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl" />
                            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl" />
                        </div>
                        <div className="flex gap-3 mt-auto">
                            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse" />
                            <div className="w-20 h-8 bg-gray-200 rounded-full animate-pulse" />
                            <div className="w-20 h-8 ml-auto bg-gray-200 rounded-full animate-pulse" />
                        </div>
                    </div>
                </div>
                ) :
                (<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                    <div className="rounded-lg lg:col-span-2">
                        <h4 className="ps-4 py-2 text-xl text-gray-600">Latest blogs: {blogs.length}</h4>
                        {
                            blogs.map(blog => <Blog key={blog.id} blog={blog} handleMarkAsRead={handleMarkAsRead} handleAddBookmark={handleAddBookmark} ></Blog>)
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
                                bookmarkedBlogs.map(bookmarkBlog => <BookmarkedBlog key={bookmarkBlog.id} bookmarkBlog={bookmarkBlog}></BookmarkedBlog>)
                            }
                        </div>
                    </div>
                </div>
                )}
        </div>
    )
}
