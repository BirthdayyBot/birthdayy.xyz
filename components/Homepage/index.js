import style from "../../styles/Index.module.scss";
import Title from "./Title";
const IndexComponent = () => {
  return (
    <>
      <div className={style.section_one}>
        <div className="container">
          <Title />
        </div>
        {/* <h1 className="title">Homepage</h1> */}
      </div>
      <div className={style.section_two}>
        <div className="container">
          {/* <h1 className="title">Homepage</h1> */}
        </div>
      </div>
      <div className={style.section_three}>
        <div className="container">
          {/* <h1 className="title">Homepage</h1> */}
        </div>
      </div>
      <div className="top_connection"></div>
    </>
  );
};

export default IndexComponent;
