import "../styles/globals.scss";
import Layout from "../components/_layout";

function BirthdayyXYZ({ Component, pageProps }) {
  return (
    <div className="app">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default BirthdayyXYZ;
