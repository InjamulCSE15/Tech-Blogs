import React from 'react'
import { FaRegBookmark } from "react-icons/fa";

export default function Blog({ blog, handleMarkAsRead }) {
    const { title, cover_img, blog_details, author, author_img, reading_time, hashtags, posted_date } = blog
    return (
        <article className="group mb-6">
            <img
                alt={title}
                src={cover_img}
                className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
            />
            <div className="flex items-center justify-between mt-4">
                <div className='flex'>
                    <img
                        className="inline-block h-12 w-12 rounded-full ring-2 ring-white"
                        src={author_img}
                        alt=""
                    />
                    <div>
                        <h3 className='px-4 text-dark font-bold text-xl'>{author}</h3>
                        <small className='px-4 text-sm text-gray-400'>{posted_date}</small>
                    </div>
                </div>
                <div className="flex items-center">
                    <h5 className='text-sm text-gray-400'>{reading_time} min read</h5>
                    <button className='ms-4'>
                        <FaRegBookmark />
                    </button>
                </div>
            </div>
            <div className="p-4 border-b-2">
                <h3 className="text-2xl font-medium text-gray-900">{title}</h3>
                <div className='flex'>
                {
                    hashtags.map( (ht, i) => <small key={i} className='inline-block px-2 text-gray-400'>#{ht}</small>)
                }
                </div>
                <button onClick={()=> handleMarkAsRead(reading_time)} className='text-indigo-600 bg-indigo-100 px-2 border border-indigo-200 rounded-md hover:bg-indigo-200 mt-1'>Mark as read</button>
                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-600">{blog_details}</p>
            </div>
        </article>
    )
}
