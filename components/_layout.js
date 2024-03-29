import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import SEO from "./SEO";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      {/* <SEO title={`Homepage`} /> */}
      <Navbar />
      <div className="min-height">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
