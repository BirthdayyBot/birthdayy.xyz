import style from "../../styles/Index.module.scss";
import Image from "next/image";
import Divider from "../Generic/Divider";
import { ArrowRight } from "../Generic/Icon";
import IconText from "../Generic/IconText";

const FeatureComponent = () => {
  return (
    <div className="feature_component container mt-5">
      <div className={`${style.spacer}`}></div>
      {/* <div className="section"> */}
      <h1 className="is-title has-text-centered">Features</h1>
      <div className="columns is-centered">
        <div className="column is-6">
          <div className="tags is-centered">
            <span className="tag is-primary">Seven</span>
            <span className="tag is-primary">Seven</span>
            <span className="tag is-primary">Seven</span>
            <span className="tag is-primary">Seven</span>

            <span className="tag is-dark">Seven</span>
            <span className="tag is-dark">Seven</span>
            <span className="tag is-dark">Seven</span>
            <span className="tag is-dark">Seven</span>

            <span className="tag is-black">Black</span>
            <span className="tag is-dark">Dark</span>
            <span className="tag is-light">Light</span>
            <span className="tag is-white">White</span>
            <span className="tag is-primary">Primary</span>
            <span className="tag is-link">Link</span>
            <span className="tag is-info">Info</span>
            <span className="tag is-success">Success</span>
            <span className="tag is-warning">Warning</span>
            <span className="tag is-danger">Danger</span>
          </div>
        </div>
      </div>

      <div className="columns mt-5 feature_component is-centered">
        <div className="column is-5">
          <div>
            <Image
              src="/media/images/features/announcement.webp"
              width={1920}
              height={1680}
              alt="Placeholder image"
              className={`${style.showcase_image}`}
            />
          </div>
        </div>
        {/* <Divider text={""} color="dark" isVertical /> */}
        {/* <IconText text={"Hello World"} icon={<ArrowRight />} /> */}
        <div className="column is-3">
          <h3 className="block is-title is-size-3 mt-5">
            Birthday Announcement
          </h3>
          <p className="block is-sub-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            soluta <IconText text={"abc"} icon={<ArrowRight />} />
            voluptatibus autem molestias vel fuga voluptatem nostrum dicta
            ducimus quibusdam porro nam tenetur, dolore veritatis magni, illum
            quae quas harum.
          </p>
        </div>
      </div>

      <div className="columns mt-5 feature_component is-centered">
        {/* <Divider text={""} color="dark" isVertical /> */}
        {/* <IconText text={"Hello World"} icon={<ArrowRight />} /> */}
        <div className="column is-3">
          <h3 className="block is-title is-size-3 mt-5">
            Birthday Announcement
          </h3>
          <p className="block is-sub-title">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            soluta <IconText text={"abc"} icon={<ArrowRight />} />
            voluptatibus autem molestias vel fuga voluptatem nostrum dicta
            ducimus quibusdam porro nam tenetur, dolore veritatis magni, illum
            quae quas harum.
          </p>
        </div>
        <div className="column is-5">
          <div>
            <Image
              src="/media/images/features/announcement.webp"
              width={1920}
              height={1680}
              alt="Placeholder image"
              className={`${style.showcase_image}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
