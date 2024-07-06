"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

/* async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });

  return response.json();
} */

const page = () => {
  const params = useParams();
  const [posts, setPosts] = useState();

  console.log(params);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          cache: "force-cache",
        }
      );

      return response.json();
    }

    fetchData().then((data) => setPosts(data));
  }, []);

  setTimeout(() => {
    setPosts([
      {
        id: 1,
        title: "Hello World",
        body: "This is a test post",
      },
      {
        id: 2,
        title: "Hello World 2",
        body: "This is a test post 2",
      },
    ]);
  }, 9000);

  return (
    <ul>
      {posts
        ? posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        : null}
    </ul>
  );
};

export default page;
