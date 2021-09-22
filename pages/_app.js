import "../styles/globals.css";

import { PostProvider } from "../components/PostContext";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <PostProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PostProvider>
  );
}

export default MyApp;
