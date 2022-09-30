import CallToAction from "./CallToAction";
import FeatureComponent from "./Feature";
import TitleComponent from "./Title";
const IndexComponent = () => {
  return (
    <>
      <div className={`container`}>
        <TitleComponent />
        <CallToAction />
        <FeatureComponent />
      </div>
    </>
  );
};

export default IndexComponent;
