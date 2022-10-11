import style from "../../../styles/Index.module.scss";
import Image from "next/image";
import Divider from "../../Generic/Divider";
import { ArrowRight } from "../../Generic/Icon";
import IconText from "../../Generic/IconText";
import FeatureTagsComponent from "./Tags";
import Feature from "./Feature";

const FeatureComponent = () => {
  return (
    <div className="feature_component">
      <div className="container is-fluid mt-5">
        <h1 className="is-title is-size-1 has-text-centered has-text-weight-bold mb-3">
          <ruby>My Features</ruby>
        </h1>
        <FeatureTagsComponent />
        <Feature
          isNormal
          title={"Birthday Announcement"}
          imageName={"announcement"}
          points={["Customizable Message", "Ping a Role"]}
          description={`Send out a nice Birthday Announcement Message on someones Birthday and congratulate them.`}
        />
        <Feature
          isNormal={false}
          title={"Register your Birthday"}
          imageName={"birthday-register-year-optional"}
          points={["Optional Year addable", "Register Birthday for others"]}
          description={`Easily register your Birthday in the Server. With or without Year. You're in control!`}
        />
        <Feature
          isNormal
          title={"Birthday List"}
          imageName={"birthday-list"}
          points={["Clean Overview", "Sort by Month"]}
          description={`Get an Overview over all Birthdays in your Server. All sorted by their Month and Day.`}
        />
        <Feature
          isNormal={false}
          title={"Server Configuration"}
          imageName={"config-status"}
          points={["Maximum Configurability", "Control over your Settings"]}
          description={`Customize the Bot's Settings to your Servers needs. `}
        />
      </div>
    </div>
  );
};

export default FeatureComponent;
