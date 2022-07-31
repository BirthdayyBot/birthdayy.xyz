import Link from "next/link";
import style from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className="footer_component mt-3">
      <div className="content has-text-centered">
        <p>Nikolai Schunk - 2022</p>
        <Link href="/disclosure">Legal Disclosure</Link>
      </div>
    </div>
  );
};

export default Footer;
