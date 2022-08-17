import Image from "next/image";
import style from "../../styles/Index.module.scss";
const Title = () => {
  return (
    <div className={style.title_component}>
      <div className="columns is-centered is-mobile">
        <div className="column is-10">
          <div className="columns">
            <div className="column is-7">
              <h1 className="title is-unselectable is-size-1-touch">
                THE BEST
                <br />
                <span className="is-color-primary">BIRTHDAYY</span>
                <br />
                DISCORD BOT
              </h1>
            </div>
            <div className="column is-4 is-hidden-touch">
              <Image
                src="/media/images/birthdayy-logo.png"
                alt="Birthdayy"
                width={280}
                height={280}
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h4 className="is-size-4 is-sub-header">
                Your stunning and easy-to-use Birthday Helper on Discord
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;