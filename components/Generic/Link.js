import Link from "next/link";

const _Link = ({ children, url, newTab }) => {
  console.log("url", url);
  return (
    <>
      <Link href={url}>
        <a
          target={newTab ? "_blank" : ""}
          style={{ textDecoration: "inherit" }}
        >
          {children}
        </a>
      </Link>
    </>
  );
};

export default _Link;
