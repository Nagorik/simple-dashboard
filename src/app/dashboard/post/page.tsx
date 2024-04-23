"use client"
import { fetchData } from '@/app/service/apiService';
import React, { useEffect, useState } from 'react'

export default function Posts() {
    const [post, setPosts] = useState<any[]>([]);
    useEffect(() => {
        const fetchDataFromApi = async () => {
          const data = await fetchData('posts');
          setPosts(data);

        };
        fetchDataFromApi();
      }, []);
  return (
    <div className='container pt-5'>
            {post && post.map(item => (
                <div className="card w-50 mb-2" key={item.id}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{item.title}</li>
                        <li className="list-group-item">{item.body}</li>
                    </ul>
                </div>
            ))}
    </div>
  )
}
