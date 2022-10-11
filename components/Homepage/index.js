import CallToAction from "./CallToAction";
import FeatureComponent from "./Feature";
import TitleComponent from "./Title";
import style from "../../styles/Index.module.scss";
const IndexComponent = () => {
  return (
    <>
      <div className={`index-component`}>
        <TitleComponent />
        <div className={`${style.spacer}`}></div>
        <FeatureComponent />
      </div>
    </>
  );
};

export default IndexComponent;
