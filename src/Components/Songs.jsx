import React from "react";
import {
  DivQueNoVi,
  GreetingSection,
  GreetingTitle,
  MainContent,
  PlayButton,
  RecentListen,
  RecentListenContainer,
  SongImg,
  SongTitle,
} from "./Styled/StyledSongs";
import { BiPlay } from "react-icons/bi";
import Likes from "../img/Likes.jpeg";
import Classy from "../img/Classy.jpeg";
import ElCielo from "../img/ElCielo.jpeg";
import Almamáter from "../img/Almamáter.jpeg";
import AntesDeAmeri from "../img/AntesDeAmeri.jpeg";
import Serotonina from "../img/Serotonina.jpeg";
import MEN2KBRON from "../img/3MEN2KBRN.jpeg";
import UnVeranoSinTi from "../img/UnVeranoSinTi.jpeg";
import Sixdo from "../img/Sixdo.jpeg";
import Microdosis from "../img/Microdosis.jpeg";
import YHLQMDLG from "../img/YHLQMDLG.jpeg";
import FelizCumpleañosFerxxo from "../img/FelizCumpleañosFerxxo.jpeg";
import Mix1 from "../img/Mix1.jpg";
import Mix2 from "../img/Mix2.jpg";
import Mix3 from "../img/Mix3.jpg";
import Mix4 from "../img/Mix4.jpg";
import Mix5 from "../img/Mix5.jpg";
import Mix6 from "../img/Mix6.jpg";
import DescSem from "../img/DescSem.jpg";
import {
  CardDescription,
  CardImg,
  CardTitle,
  MakeFor,
  ProgramCard,
  ProgramContainerCard,
  ProgramSection,
  ProgramsTop,
  ShowMore,
} from "./Styled/StyledPrograms";

export const SongContent = ({ User }) => {
  let Title = "";
  let time = new Date();
  let now = time.toLocaleTimeString();
  // now = "10:00:00" //para presumir
  

  if (now > "6:00:00" || now < "11:59:59") {
    Title = "Buenos días";
  } else if (now > "12:00:00" && now < "17:59:59") {
    Title = "Buenas Tardes";
  } else if (now > "18:00:00" && now < "5:59:59") {
    Title = "Buenas Noches";
  }

  return (
    
    <MainContent>
      <GreetingSection>
        <GreetingTitle>{Title}</GreetingTitle>
        <RecentListenContainer>
          <RecentlyListen Img={Likes} Title="Canciones que te gustan" />
          <RecentlyListen Img={Classy} Title="Classy 101" />
          <RecentlyListen Img={ElCielo} Title="El Cielo" />
          <RecentlyListen Img={Almamáter} Title="Almamáter" />
          <RecentlyListen Img={AntesDeAmeri} Title="Antes de Ameri" />
          <RecentlyListen Img={Serotonina} Title="Serotonina" />
        </RecentListenContainer>
      </GreetingSection>
      <ProgramSection>
        <ProgramsTop>
          <MakeFor>Hecho para {User}</MakeFor>
          <ShowMore>Mostrar más</ShowMore>
        </ProgramsTop>
        <ProgramContainerCard>
          <Programs
            Img={Mix1}
            Title="Mix Diario 1"
            Desc="Duki, Lit Killah, KHEA, y más"
          />
          <Programs
            Img={Mix2}
            Title="Mix Diario 2"
            Desc="Tainy, Mora, Arcángel, y más"
          />
          <Programs
            Img={Mix3}
            Title="Mix Diario 3"
            Desc="Nicki Nicole, Trueno, Paulo Londra, y más"
          />
          <Programs
            Img={Mix4}
            Title="Mix Diario 4"
            Desc="Feid, Danny Ocean, J Balvin, y más"
          />
          <Programs
            Img={Mix5}
            Title="Mix Diario 5"
            Desc="Quevedo, Eladio Carrión, Young Miko, y más"
          />
          <Programs
            Img={Mix6}
            Title="Mix Diario 6"
            Desc="Ozuna, Don Omar, Aventura, y más"
          />
          <Programs
            Img={DescSem}
            Title="Descubrimiento se..."
            Desc="Las novedades de los artistas que sigues y..."
          />
        </ProgramContainerCard>
      </ProgramSection>

      <ProgramSection>
        <ProgramsTop>
          <MakeFor>Álbumes populares</MakeFor>
          <ShowMore>Mostrar más</ShowMore>
        </ProgramsTop>
        <ProgramContainerCard>
          <Programs
            Img={UnVeranoSinTi}
            Title="Un verano sin ti"
            Desc="Bad Bunny"
          />
          <Programs
            Img={Classy}
            Title="Classy 101"
            Desc="Feid, Young Miko "
          />
          <Programs
            Img={MEN2KBRON}
            Title="3MEN2KBRN"
            Desc="Eladio Carrión"
          />
          <Programs
            Img={Sixdo}
            Title="SIXDO"
            Desc="Feid"
          />
          <Programs
            Img={Microdosis}
            Title="MICRODOSIS"
            Desc="Mora"
          />
          <Programs
            Img={YHLQMDLG}
            Title="YHLQMDLG"
            Desc="Bad Bunny"
          />
          <Programs
            Img={FelizCumpleañosFerxxo}
            Title="FELIZ CUMPLEAÑO..."
            Desc="Feid"
          />
        </ProgramContainerCard>
      </ProgramSection>
    </MainContent>
  );
};

const RecentlyListen = ({ Img, Title }) => {
  return (
    <RecentListen>
      <SongImg src={Img} />
      <DivQueNoVi>
        <SongTitle>{Title}</SongTitle>
        <PlayButton>
          <BiPlay style={{ fontSize: "3em", marginLeft: "2px" }} />
        </PlayButton>
      </DivQueNoVi>
    </RecentListen>
  );
};

const Programs = ({ Img, Title, Desc }) => {
  return (
    <ProgramCard>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", justifyContent: "flex-end", position: "relative"}}>
        <CardImg src={Img} />
        <PlayButton style={{position: "absolute", margin: "10px 10px"}}>
          <BiPlay style={{ fontSize: "3em", marginLeft: "2px" }} />
        </PlayButton>
      </div>
      <CardTitle>{Title}</CardTitle>
      <CardDescription>{Desc}</CardDescription>
    </ProgramCard>
  );
};
