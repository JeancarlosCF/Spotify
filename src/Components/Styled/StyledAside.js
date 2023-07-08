import styled from "styled-components";

export const LeftBar = styled.div`
  background-color: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  padding-top: 5px;
  font-size: 2em;
  color: #fff;
  * {
    cursor: pointer;
    padding: 10px 8px;
    margin: 2px;
    &:hover {
      color: #fff;
      transition: 0.3s;
    }
  }
`;

export const Playlists = styled.div`
  height: 43.2rem;
  padding: 0;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  * {
    &:hover {
      background-color: #181818;
    }
  }
`;

export const Imgs = styled.img`
  width: 50px;
  border-radius: 15px;
`;
