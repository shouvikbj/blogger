import React from "react";
import Head from "next/head";

import Navbar from "./Navbar";

import { AuthProvider } from "./AuthContext";

import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <AuthProvider>
      <div>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#043f6e" />
        </Head>
        <Navbar />
        <ToastContainer />
        {children}
      </div>
    </AuthProvider>
  );
};

export default Layout;
