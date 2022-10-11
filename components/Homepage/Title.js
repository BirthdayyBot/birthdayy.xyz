import Image from "next/image";
import style from "../../styles/Index.module.scss";
import CallToActionComponent from "./CallToAction";
const TitleComponent = () => {
  return (
    <div className={`${style.title_component} container is-fluid`}>
      <div className="columns">
        <div className="column is-3"></div>
        <div className="column is-10">
          <div className="columns">
            <div className="column is-5">
              <h1 className="title is-size-1-touch">
                THE BEST
                <br />
                <span className="is-color-primary">BIRTHDAYY</span>
                <br />
                DISCORD BOT
              </h1>
            </div>
            <div className="column is-3 is-hidden-touch is-unselectable">
              <Image
                src="/media/images/birthdayy-logo.png"
                alt="Birthdayy"
                width={280}
                height={280}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column is-8">
              <h4 className="is-size-4 is-sub-header">
                Your easy-to-use, aesthetic and customizable Birthday Bot for
                any Discord Server
              </h4>
            </div>
          </div>
        </div>
      </div>
      <CallToActionComponent />
    </div>
  );
};

export default TitleComponent;
