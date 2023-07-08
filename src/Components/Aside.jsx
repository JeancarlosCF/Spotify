import React from "react";
import { Imgs, LeftBar, Playlists } from "./Styled/StyledAside";
import Likes from "../img/Likes.jpeg";
import Saved from "../img/Saved.jpeg";
import Data from "../img/Data.jpg";
import MEN2KBRN from "../img/3MEN2KBRN.jpeg";
import Classy from "../img/Classy.jpeg";
import LaMelodia from "../img/LaMelodia.jpeg";
import Serotonina from "../img/Serotonina.jpeg";
import UnVeranoSinTi from "../img/UnVeranoSinTi.jpeg";
import SrSantos from "../img/SrSantos.jpeg";
import Alma from "../img/Alma.jpeg";
import Almamáter from "../img/Almamáter.jpeg";
import { FaHouse } from "react-icons/fa6";
import { BiLibrary } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";



const Images = [Likes, Saved, Data, Classy, LaMelodia, MEN2KBRN, Serotonina, UnVeranoSinTi, SrSantos, Alma, Almamáter];

export const Aside = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <LeftBar style={{marginBottom: "10px"}}>
        <FaHouse/>
        <AiOutlineSearch style={{color: "#a7a7a7"}} />
      </LeftBar>

      <LeftBar>
        <BiLibrary style={{color: "#a7a7a7"}} />
        <Playlists>
          {Images.map((Img, index) => (
            <Imgs key={index} src={Img}></Imgs>
          ))}
        </Playlists>
      </LeftBar>
    </div>
  );
};


