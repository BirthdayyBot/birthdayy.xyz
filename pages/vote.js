import { useEffect } from "react";
import Router from "next/router";
import VoteComponent from "../components/Vote";
const VotePage = () => {
  // useEffect(() => {
  //   const { pathname } = Router;
  //   if (pathname === "/vote") {
  //     Router.push("https://docs.birthdayy.xyz/extras/links/vote");
  //   }
  // });
  return (
    <div className="vote_page container">
      <VoteComponent />
    </div>
  );
};

export default VotePage;
