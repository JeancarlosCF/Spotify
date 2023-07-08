import styled from "styled-components";
import { PlayButton } from "./StyledSongs";

export const ProgramSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const ProgramsTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  * {
    cursor: pointer;
  }
`;

export const MakeFor = styled.a`
  font-size: 1.5em;
  font-weight: 600;
  text-align: center;
  color: #fff;
  &:hover {
    text-decoration: underline 0.1em;
  }
`;

export const ShowMore = styled.a`
  font-size: 0.8em;
  font-weight: 600;
  color: #a0a0a0;
  cursor: pointer;
  &:hover {
    text-decoration: underline 0.05em;
  }
`;

export const ProgramContainerCard = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  overflow: hidden;
`;

export const ProgramCard = styled.div`
  width: 190px;
  max-height: fit-content;
  display: flex;
  flex-direction: column;
  padding: 16px;
  transition: background-color 0.3s ease;
  border-radius: 5px;
  background: #181818;
  cursor: pointer;
  &:hover {
    background-color: #ffffff1b;
    transition: 0.5s;
  }
  &:hover ${PlayButton} {
    opacity: 1;
    transition: 0.5s;
    transform: translate(0px, -20px);
    cursor: pointer;
  }
`;

export const CardImg = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 1em;
`;

export const CardTitle = styled.div`
  width: 100%;
  font-size: 1em;
  font-weight: 600;
  text-align: start;
  margin-bottom: 0.5em;
  color: #fff;
`;

export const CardDescription = styled.div`
  box-sizing: border-box;
  font-size: 0.8em;
  width: 85%;
  text-align: start;
  overflow: hidden;
  color: #ffffff5b;
`;
