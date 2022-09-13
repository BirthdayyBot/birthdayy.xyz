import VoteElement from "./VoteElement";
import style from "../../styles/vote.module.scss";
import SEO from "../SEO";
const { VoteSites } = require("../../db/voteSites");

const VoteComponent = () => {
  return (
    <div className={`${style.vote_component}`}>
      <SEO title={`Vote List`} />
      <h1 className="is-title is-1">Vote List</h1>
      <h4 className="is-sub-title is-4">
        Vote for Birthdayy on the following sites to help us grow!
      </h4>
      {VoteSites.map((element) => {
        return (
          <VoteElement
            key={element.id.toString()}
            name={element.name}
            url={element.url}
            icon={element.icon}
          />
        );
      })}
    </div>
  );
};

export default VoteComponent;
