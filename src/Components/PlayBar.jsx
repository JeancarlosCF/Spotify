import React from "react";
import {
  Container,
  PlayBarContainer,
  SongImg,
  Song,
  SongName,
  SongArtist,
  PlayerContainer,
  Control,
  PlayedBar,
  Buttons,
  Time,
  PlayedBar2,
} from "./Styled/StyledPlayBar";
import AntesDeAmeri from "../img/AntesDeAmeri.jpeg";
import Random from "../img/Random.jpeg";
import Previous from "../img/Previous.jpeg";
import Play from "../img/Play.jpeg";
import Next from "../img/Next.jpeg";
import Repeat from "../img/Repeat.jpeg";
import Listening from "../img/Listening.jpeg";
import Lyrics from "../img/Lyrics.jpeg";
import Queue from "../img/Queue.jpeg";
import Devices from "../img/Devices.jpeg";
import Volume from "../img/Volume.jpeg";
import FullScreen from "../img/FullScreen.jpeg";
import { BiSolidHeart } from "react-icons/bi";

const PlayBar = () => {
  return (
    <PlayBarContainer>
      <Container>
        <div style={{ display: "flex", padding: "10px 18px", width: "100%" }}>
          <SongImg src={AntesDeAmeri} />
          <Song>
            <SongName>CSIpher (audio latino)</SongName>
            <SongArtist>Duki, Akapellah, Neutro Shorty, Micro TDH</SongArtist>
          </Song>
          <BiSolidHeart
            style={{
              color: "#19d963",
              fontSize: "1.2rem",
              alignSelf: "center",
            }}
          />
        </div>
      </Container>

      <Container
        style={{ display: "flex", justifyContent: "center", width: "40%" }}
      >
        <PlayerContainer>
          <Control>
            <Buttons src={Random} style={{ margin: "2px 10px"}}/>
            <Buttons src={Previous} style={{ margin: "2px 10px"}}/>
            <Buttons src={Play} style={{ height: "37px", margin: "2px 10px"}} />
            <Buttons src={Next} style={{ margin: "2px 10px"}}/>
            <Buttons src={Repeat} style={{ margin: "2px 10px"}}/>
          </Control>
          <Control>
            <Time>3:08</Time>
            <PlayedBar>
              <PlayedBar2 style={{ margin: "0" }}/>
            </PlayedBar>
            <Time>4:10</Time>
          </Control>
        </PlayerContainer>
      </Container>

      <Container>
        <div style={{ display: "flex", padding: "10px 18px", width: "100%" }}>
          <Control style={{justifyContent:"flex-end"}}>
            <Buttons src={Listening} style={{ margin: "2px 5px"}}/>
            <Buttons src={Lyrics} style={{ margin: "2px 5px"}}/>
            <Buttons src={Queue} style={{ margin: "2px 5px"}}/>
            <Buttons src={Devices} style={{ margin: "2px 5px"}}/>
            <Buttons src={Volume} style={{ margin: "2px 5px"}}/>
            <PlayedBar2 style={{width:"20%"}}></PlayedBar2>
            <Buttons src={FullScreen} style={{ margin: "2px 5px"}}/>
          </Control>
        </div>
      </Container>
    </PlayBarContainer>
  );
};

export default PlayBar;
