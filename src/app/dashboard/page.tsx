"use client";
import React, { useEffect, useState } from "react";
import Comments from "./comments/page";
import Posts from "./post/page";
import { getUsers, getPostById } from "../service/apiService";

export default function Dashboard() {
  const [isPost, setIspost] = useState(true);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getUsersData = async () => {
      const data = await getUsers();
      setUserData(data);
    };
    getUsersData();
  }, []);

  const getPost = (id: string) => {
    const post = getPostById(id);
    // @ts-ignore
    setUserData(post);
  };

  return (
    <div>
      <div className="row">
        <div className="btn-group col-md-5" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => setIspost(true)}
            className={isPost ? "btn-primary btn mr-2" : "btn mr-2"}
          >
            Posts
          </button>
          <button
            type="button"
            onClick={() => setIspost(false)}
            className={!isPost ? "btn-primary btn" : "btn"}
          >
            Comments
          </button>
        </div>
        <div className="col-md-3">
          
        </div>
      </div>

      {isPost ? <Posts /> : <Comments />}
    </div>
  );
}
