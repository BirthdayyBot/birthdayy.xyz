import Image from "next/image";
import style from "../../styles/vote.module.scss";
import Link from "../Generic/Link";
import { NewTab } from "../Generic/Icon";

const VoteElement = ({ name, url, icon }) => {
  return (
    <div className={`vote_element column is-6`}>
      <Link url={url} newTab>
        <div className={`${style.hoverEffect}`}>
          <article className=" notification is-primary">
            <div className="columns is-vcentered is-mobile">
              {/* HIDDEN MOBILE */}
              <div className="column is-3 is-hidden-touch">
                <figure className="image">
                  <Image
                    src={icon}
                    width={80}
                    height={80}
                    alt="Placeholder image"
                    className={style.site_logo}
                  />
                </figure>
              </div>
              {/* HIDDEN MOBILE */}

              <div className="column is-3 is-hidden-desktop">
                <figure className="image">
                  <Image
                    src={icon}
                    width={120}
                    height={120}
                    alt="Placeholder image"
                    className={style.site_logo}
                  />
                </figure>
              </div>
              <div className="column is-6">
                <span className="icon-text">
                  <span>
                    <h4 className="is-title">{name}</h4>
                  </span>
                  <span className="icon is-medium is-hidden-touch">
                    <NewTab size={4 + "em"} />
                  </span>
                </span>
              </div>
            </div>
          </article>
        </div>
      </Link>
    </div>
  );
};

export default VoteElement;
