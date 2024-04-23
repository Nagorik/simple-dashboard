"use client";
import React, { useEffect, useState } from 'react'
import { useUserContext } from '@/app/context/UserContent';

export default function User() {
    const { setUserData, userData } = useUserContext();
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    
    useEffect(() => {
        setUsername(userData.username);
        setUserEmail(userData.userEmail);
    }, [])
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setUserData({ username, userEmail });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    );
}
