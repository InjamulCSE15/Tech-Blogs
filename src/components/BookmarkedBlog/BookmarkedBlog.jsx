import React from 'react'

export default function BookmarkedBlog({bookmarkBlog}) {
    const {title, author} = bookmarkBlog;
  return (
    <div className='bg-white rounded-lg p-2 my-2'>
        <h5>{title}</h5>
        <small className='block text-end text-sm py-1 text-gray-400 me-2'>{author}</small>
    </div>
  )
}
