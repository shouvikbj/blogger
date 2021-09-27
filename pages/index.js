import React, { useContext, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Link from "next/link";
import Head from "next/head";

import Avatar from "@mui/material/Avatar";

import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

import { PostContext } from "../components/PostContext";
import { AuthContext } from "../components/AuthContext";

import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";

var firebaseConfig = {
  apiKey: "AIzaSyC9vtOyHhZmP2rD2_SoAez0_m5qqGxi8mE",
  authDomain: "fir-8c9f5.firebaseapp.com",
  projectId: "fir-8c9f5",
  storageBucket: "fir-8c9f5.appspot.com",
  messagingSenderId: "507014862640",
  appId: "1:507014862640:web:9d8d43f1fd39ec942a5af5",
  measurementId: "G-9H4EBY5P2E",
};

const app = initializeApp(firebaseConfig);

const Home = () => {
  const [posts, setPosts] = useContext(PostContext);
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    const db = getDatabase();
    const blogsRef = ref(db, "blogs");
    onValue(blogsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        data.reverse();
        setPosts(data);
      } else {
        setPosts([]);
      }
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Home | Blogger</title>
      </Head>
      <VerticalTimeline>
        {posts.map((post) => (
          <VerticalTimelineElement
            key={post.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: "7px solid  rgb(33, 150, 243)",
            }}
            date={post.timestamp}
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Avatar
                alt=""
                src={post.creatorImage}
                sx={{ width: "100%", height: "100%" }}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">{post.blogType}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {post.creatorEmail}
            </h4>
            <p>{post.story}</p>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<CheckCircleOutlineOutlinedIcon />}
        />
      </VerticalTimeline>
      {auth ? (
        <Link href="/add">
          <a>
            <Fab
              aria-label="add"
              style={{
                backgroundColor: "white",
                color: "blue",
                position: "fixed",
                bottom: 10,
                right: 10,
              }}
            >
              <AddIcon fontSize="large" />
            </Fab>
          </a>
        </Link>
      ) : (
        () => {}
      )}
    </div>
  );
};

export default Home;
