import style from "../../../styles/Index.module.scss";
import Image from "next/image";
import Divider from "../../Generic/Divider";
import { ArrowRight } from "../../Generic/Icon";
import IconText from "../../Generic/IconText";
import FeatureTagsComponent from "./Tags";
import Feature from "./Feature";

const FeatureComponent = () => {
  return (
    <div className="feature_component container mt-5">
      <div className={`${style.spacer}`}></div>
      <h1 className="is-title is-size-1 has-text-centered">Features</h1>
      <FeatureTagsComponent />
      <Feature
        isNormal
        title={"Birthday Announcement"}
        imageName={"announcement"}
        points={["Maximum Configurability", "Control over your Settings"]}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        soluta voluptatibus autem molestias vel fuga voluptatem nostrum dicta
        ducimus quibusdam porro nam tenetur, dolore veritatis magni, illum
        quae quas harum.`}
      />{" "}
      <Feature
        isNormal={false}
        title={"Register your Birthday"}
        imageName={"birthday-register-year-optional"}
        points={["Maximum Configurability", "Control over your Settings"]}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        soluta voluptatibus autem molestias vel fuga voluptatem nostrum dicta
        ducimus quibusdam porro nam tenetur, dolore veritatis magni, illum
        quae quas harum.`}
      />{" "}
      <Feature
        isNormal
        title={"Birthday List"}
        imageName={"birthday-list"}
        points={["Maximum Configurability", "Control over your Settings"]}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        soluta voluptatibus autem molestias vel fuga voluptatem nostrum dicta
        ducimus quibusdam porro nam tenetur, dolore veritatis magni, illum
        quae quas harum.`}
      />
      <Feature
        isNormal={false}
        title={"Config Overview"}
        imageName={"config-status"}
        points={["Maximum Configurability", "Control over your Settings"]}
        description={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
        soluta voluptatibus autem molestias vel fuga voluptatem nostrum dicta
        ducimus quibusdam porro nam tenetur, dolore veritatis magni, illum
        quae quas harum.`}
      />
    </div>
  );
};

export default FeatureComponent;
