import { useEffect } from "react";
import Router from "next/router";

const VotePage = () => {
  useEffect(() => {
    const { pathname } = Router;
    if (pathname === "/vote") {
      Router.push("https://docs.birthdayy.xyz/extras/links/vote");
    }
  });
};

export default VotePage;
