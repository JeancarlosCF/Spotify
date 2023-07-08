import React from "react";
import User from "../img/User.jpg";
import { Header, ImgUser, HeadContain } from "./Styled/StyledHeader";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { MdPeopleOutline } from "react-icons/md";

const arrows = {
    color: "#fff",
    fontSize: "1.5em",
    padding: ".3em",
    borderRadius: "50%",
    backgroundColor: "#0000007b",
  };

const Head = () => {
    return (
        <Header>
        <HeadContain>
          <HiOutlineChevronLeft style={arrows} />
          <HiOutlineChevronRight style={arrows} />
        </HeadContain>
        <HeadContain>
          <MdPeopleOutline style={arrows} />
          <ImgUser src={User}/>
        </HeadContain>
      </Header>
    )
}

export default Head