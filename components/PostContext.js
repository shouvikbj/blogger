import React, { useState, createContext } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 23124,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 2566124,
    },
    {
      name: "Inception",
      price: "$10",
      id: 23524,
    },
    {
      name: "Harry Potter",
      price: "$10",
      id: 2312,
    },
    {
      name: "Game of Thrones",
      price: "$10",
      id: 256612,
    },
    {
      name: "Inception",
      price: "$10",
      id: 2352,
    },
  ]);
  return (
    <PostContext.Provider value={[posts, setPosts]}>
      {children}
    </PostContext.Provider>
  );
};
