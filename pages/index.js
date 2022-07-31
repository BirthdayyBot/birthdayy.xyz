import Head from "next/head";
import Image from "next/image";
import IndexComponent from "../components/Homepage";

export default function Index() {
  return (
    <div className="index">
      <IndexComponent />
    </div>
  );
}
