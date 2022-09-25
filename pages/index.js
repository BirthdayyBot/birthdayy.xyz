import Head from "next/head";
import Image from "next/image";
import IndexComponent from "../components/Homepage";
import FeatureComponent from "../components/Homepage/Feature";

export default function Index() {
  return (
    <div className="index">
      <IndexComponent />
      <FeatureComponent />
    </div>
  );
}
