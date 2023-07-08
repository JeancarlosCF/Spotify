import React from "react";
import { Body } from "./Styled/StyledBody";
import Head from "./Header";
import { SongContent } from "./Songs";


const user = "JeancarlosCF";

const MainContent = () => {
  return (
    <Body>
      <Head User={user} />
      <SongContent User={user} />
    </Body>
  );
};

export default MainContent;
