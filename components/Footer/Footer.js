import Link from "next/link";
import style from "../../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={style.footer_component}>
      <div className={`${style.footer_content} has-text-centered`}>
        <p>Birthdayy - {new Date().getFullYear()}</p>
        <Link href="/disclosure">
          <a className="is-text has-text-white">Legal Disclosure</a>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
