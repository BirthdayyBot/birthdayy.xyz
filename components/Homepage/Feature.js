import style from "../../styles/Index.module.scss";
import Image from "next/image";
import Divider from "../Generic/Divider";
import { ArrowRight } from "../Generic/Icon";
import IconText from "../Generic/IconText";

const FeatureComponent = () => {
  return (
    <div className="feature_component container mt-5">
      <div className={`${style.spacer}`}></div>
      <div className="section">
        <h1 className="is-title has-text-centered">Features</h1>

        <div className="columns mt-5">
          <div className="column is-1"></div>

          <div className="column is-5">
            <div>
              <Image
                src="https://bulma.io/images/placeholders/640x480.png"
                width={640}
                height={480}
                alt="Placeholder image"
                className={`${style.showcase_image}`}
              />
            </div>
          </div>
          <Divider text={""} color="dark" isVertical />
          <div className="column is-5">
            <h3 className="block is-title is-size-3">
              <IconText text={"Hello World"} icon={<ArrowRight />} />
            </h3>
            {/* <h3 className="block is-title is-size-3">Hello World</h3> */}
            <p className="block is-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis soluta <IconText text={"abc"} icon={<ArrowRight />} />
              voluptatibus autem molestias vel fuga voluptatem nostrum dicta
              ducimus quibusdam porro nam tenetur, dolore veritatis magni, illum
              quae quas harum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureComponent;
