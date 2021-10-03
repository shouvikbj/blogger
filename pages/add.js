import React, { useState, useContext } from "react";

import Head from "next/head";
import Script from "next/script";
import Router from "next/router";

import { AuthContext } from "../components/AuthContext";
import { PostContext } from "../components/PostContext";

import { getDatabase, ref, set, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";

const Add = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [posts, setPosts] = useContext(PostContext);

  const [blogType, setBlogType] = useState("");
  const [story, setStory] = useState("");
  const [privacy, setPrivacy] = useState("");

  const handleBlogType = (e) => {
    setBlogType(e.target.value);
  };

  const handleStory = (e) => {
    setStory(e.target.value);
  };

  const handlePrivacy = (e) => {
    setPrivacy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (auth) {
      if (blogType !== "" && story !== "" && privacy !== "") {
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

        const db = getDatabase();

        var currentdate = new Date();
        var timestamp = `${currentdate.getDate()}/${
          currentdate.getMonth() + 1
        }/${currentdate.getFullYear()} at ${currentdate.getHours()}:${currentdate.getMinutes()}`;

        var allPosts = posts;

        allPosts.push({
          id: String(uuidv4()),
          blogType: blogType,
          story: story,
          privacy: privacy,
          creatorEmail: auth.name,
          creatorName: auth.email,
          creatorImage: auth.image,
          timestamp: timestamp,
        });
        set(ref(db, "blogs"), allPosts);

        document.getElementById("blog-post-form").reset();
        toast(`New ${privacy} blog created!`);
        Router.push("/my-posts");
      } else {
        toast("All fields are mendatory!", { type: "warning" });
      }
    } else {
      toast("Signin first!", { type: "error" });
    }
  };

  return (
    <div>
      <Head>
        <title>Create New | Blogger</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
          crossOrigin="anonymous"
        />
      </Head>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
        crossOrigin="anonymous"
      ></Script>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-0"></div>
          <div className="col-md-6 col-sm-12 text-center">
            <h4 className="text-white pt-2">Create New Blog</h4>
            <br />
            <form onSubmit={handleSubmit} id="blog-post-form">
              <div className="mb-3">
                <label className="text-white" style={{ float: "left" }}>
                  Select blog type
                </label>
                <select
                  className="form-select text-white"
                  aria-label="Default select example"
                  style={{ backgroundColor: "transparent" }}
                  name="blogType"
                  onChange={handleBlogType}
                >
                  <option className="text-black" selected value="">
                    Select
                  </option>
                  <option className="text-black" value="general">
                    General
                  </option>
                  <option className="text-black" value="technical">
                    Technical
                  </option>
                  <option className="text-black" value="non-technical">
                    Non-Technical
                  </option>
                  <option className="text-black" value="news">
                    News
                  </option>
                </select>
              </div>
              <div className="mb-3">
                <label
                  className="form-label text-white"
                  style={{ float: "left" }}
                >
                  Write here
                </label>
                <textarea
                  className="form-control text-white"
                  rows="10"
                  style={{ backgroundColor: "transparent" }}
                  placeholder="start typing..."
                  name="story"
                  onChange={handleStory}
                ></textarea>
              </div>
              <div className="mb-3">
                <label className="text-white" style={{ float: "left" }}>
                  Select blog privacy
                </label>
                <select
                  className="form-select text-white"
                  aria-label="Default select example"
                  style={{ backgroundColor: "transparent" }}
                  name="privacy"
                  onChange={handlePrivacy}
                >
                  <option className="text-black" selected value="">
                    Select
                  </option>
                  <option className="text-black" value="public">
                    Public
                  </option>
                  <option className="text-black" value="private">
                    Private
                  </option>
                </select>
              </div>
              <div>
                <button
                  type="submit"
                  className="btn btn-large btn-outline-light"
                  style={{ borderRadius: "50px", float: "right" }}
                >
                  Post Blog
                </button>
              </div>
            </form>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="col-md-3 col-sm-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Add;
