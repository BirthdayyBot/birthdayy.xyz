import style from "../../styles/Index.module.scss";
import CallToAction from "./CallToAction";
import TitleComponent from "./Title";
const IndexComponent = () => {
  return (
    <>
      <div className={`container`}>
        <TitleComponent />
        <CallToAction />
      </div>
    </>
  );
};

export default IndexComponent;
