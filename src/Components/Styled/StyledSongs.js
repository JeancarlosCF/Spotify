import styled from "styled-components";

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  height: 83vh;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const GreetingSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const GreetingTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  text-align: start;
  margin-left: 10px;
  color: #fff;
`;

export const RecentListenContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const PlayButton = styled.button`
  background-color: #19d963;
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  border: 0;
  border-radius: 50%;
  box-shadow: 0px 5px 10px #0000008b;
  opacity: 0;
  &:hover {
    transform: scale(1.05, 1.05);
  }
`;

export const RecentListen = styled.div`
  display: flex;
  align-items: center;
  background-color: #ffffff1b;
  color: #fff;
  border-radius: 5px;
  width: 32%;
  margin: 10px;
  &:hover {
    background-color: #ffffff3b;
    transition: 0.5s;
  }
  &:hover ${PlayButton} {
    opacity: 1;
    transition: 0.5s;
  }
  * {
    cursor: pointer;
  }
`;

export const SongImg = styled.img`
  height: 80px;
  width: auto;
  border-radius: 5px 0 0 5px;
`;

export const DivQueNoVi = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
`;

export const SongTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;
