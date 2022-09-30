import style from "../../../styles/Index.module.scss";
import Image from "next/image";
import Divider from "../../Generic/Divider";
import { ArrowRight } from "../../Generic/Icon";
import IconText from "../../Generic/IconText";

const Feature = ({ isNormal, imageName, title, description, points }) => {
  /* <Divider text={""} color="dark" isVertical /> */
  /* <IconText text={"Hello World"} icon={<ArrowRight />} /> */

  const imageComponent = (imageName, isHiddenMobile) => {
    let className;
    switch (isHiddenMobile) {
      case undefined:
        className = "";
        break;
      case true:
        className = "is-hidden-mobile";
        break;
      case false:
        className = "is-hidden-tablet";
        break;
    }
    return (
      <div className={`column is-5 ${className}`}>
        <div>
          <Image
            src={`/media/images/features/${imageName}.webp`}
            width={1920}
            height={1680}
            alt={`Image of ${imageName} Feature`}
            className={`${style.showcase_image}`}
          />
        </div>
      </div>
    );
  };

  const textComponent = (title, description, points) => {
    const generatedPoints = points
      ? points.map((point) => {
          {
            return generatePoint(point);
          }
        })
      : "";
    return (
      <div className="column is-3">
        <h3 className="block is-title is-size-3 mt-5">{title}</h3>
        <p className="block is-sub-title">
          {description}
        </p>
        <p className="block is-sub-title">{generatedPoints}</p>
      </div>
    );
  };
  function generatePoint(point) {
    return <IconText text={point} icon={<ArrowRight />} />;
  }

  if (isNormal) {
    return (
      <div className="feature columns is-multiline is-centered">
        {textComponent(title, description, points)}
        {imageComponent(imageName)}
      </div>
    );
  }

  return (
    <div className="feature columns is-multiline is-centered">
      {imageComponent(imageName, true)}
      {textComponent(title, description, points)}
      {imageComponent(imageName, false)}
    </div>
  );
};

export default Feature;
