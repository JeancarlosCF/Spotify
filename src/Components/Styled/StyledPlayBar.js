import styled from "styled-components";

export const PlayBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5.3rem;
  position: fixed;
  bottom: 0;
  background-color: #000;
`;

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 30%;
`;

export const SongImg = styled.img`
  width: 56px;
  border-radius: 5px;
`;

export const Song = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
`;

export const SongName = styled.div`
  font-size: 14px;
  height: 50%;
  color: #fff;
  display: flex;
  align-items: flex-end;
  font-weight: 400;
`;

export const SongArtist = styled.div`
  font-size: 10px;
  height: 50%;
  color: #bbb;
  align-items: flex-start;
  display: flex;
  font-weight: 500;
`;

export const PlayerContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  align-items: center;
  width: 100%;
`;

export const Control = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30px;
  * {
    cursor: pointer;
  }
`;

export const Buttons = styled.img`
  height: 20px;
`;

export const Time = styled.div`
  margin: 0 5px;
  font-size: 12px;
  color: #bbb;
  font-weight: 500;
`;

export const PlayedBar2 = styled.div`
  width: 85%;
  height: .2rem;
  border-radius: 5px;
  background-color: #fff;
  &:hover{
    background-color: #19d963;
    cursor: default;
  }
`;

export const PlayedBar = styled.div`
  width: 85%;
  height: .2rem;
  margin-top: 3px;
  border-radius: 5px;
  background-color: #bbbbbb3b;
  &:hover ${PlayedBar2}{
    background-color: #19d963;
    cursor: default;
  }
`;

