import React, { useState, useContext } from "react";

import Head from "next/head";

const add = () => {
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
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
          crossorigin="anonymous"
        ></script>
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-0"></div>
          <div className="col-md-6 col-sm-12 text-center">
            <h4 className="text-white pt-2">Create New Blog</h4>
            <br />
            <form>
              <div className="mb-3">
                <label className="text-white" style={{ float: "left" }}>
                  Select blog type
                </label>
                <select
                  className="form-select text-white"
                  aria-label="Default select example"
                  style={{ backgroundColor: "transparent" }}
                >
                  <option className="text-black" selected value="general">
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
                >
                  <option className="text-black" selected value="public">
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

export default add;
