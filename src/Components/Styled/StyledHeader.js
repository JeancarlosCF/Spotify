import styled from "styled-components";

export const Header = styled.div`
  width: 97%;
  height: 2.5em;
  display: flex;
  align-items: center;
  margin: 1em 0;
  justify-content: space-between;
`;

export const HeadContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 5.5em;
  * {
    cursor: pointer;
  }
`;

export const ImgUser = styled.img`
  color: #fff;
  width: 2em;
  height: 2em;
  padding: 0.3em;
  border-radius: 50%;
  background-color: #0000007b;
`;
