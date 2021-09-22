import React, { useContext } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Link from "next/link";
import Head from "next/head";

import { PostContext } from "../components/PostContext";
import { AuthContext } from "../components/AuthContext";

import Fab from "@mui/material/Fab";
import HomeIcon from "@mui/icons-material/Home";
// import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  const [posts, setPosts] = useContext(PostContext);
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div>
      <Head>
        <title>Home | Blogger</title>
      </Head>
      <VerticalTimeline>
        {posts.map((post) => {
          return (
            <VerticalTimelineElement
              key={post.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(33, 150, 243)",
              }}
              date="2011 - present"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<HomeIcon />}
            >
              <h3 className="vertical-timeline-element-title">{post.name}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {post.price}
              </h4>
              <p>
                Creative Direction, User Experience, Visual Design, Project
                Management, Team Leading
              </p>
            </VerticalTimelineElement>
          );
        })}
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
