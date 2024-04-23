"use client"
import React, { useEffect, useState } from 'react';
import { fetchData } from '@/app/service/apiService';

export default function Comments() {
    const [comments, setComments] = useState<any[]>([]);
    useEffect(() => {
        const fetchDataFromApi = async () => {
          const data = await fetchData('comments');
          setComments(data);
        };
        fetchDataFromApi();
      }, []);
  return (
    <div className='container pt-5'>
            {comments && comments.map(item => (
                <div className="card w-50 mb-2" key={item.id}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{item.name}</li>
                        <li className="list-group-item">{item.body}</li>
                    </ul>
                </div>
            ))}
    </div>
  )
}
