import Link from "next/link";

const _Link = ({ children, url, newTab }) => {
  return (
    <>
      <Link href={url}>
        <a
          target={newTab ? "_blank" : ""}
          style={{ textDecoration: "inherit", color: "inherit" }}
        >
          {children}
        </a>
      </Link>
    </>
  );
};

export default _Link;
