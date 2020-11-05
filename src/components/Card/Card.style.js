import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 5px 3px 5px 0 grey;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 1px 2px 2px grey;
  }
  &:active {
    background: palegreen;
    box-shadow: none;
  }
`;
export const Image = styled.img`
  width: 300px;
  height: 300px;
  max-width: 100%;
  object-fit: cover;
`;
export const Title = styled.h2`
  font-size: 1.2em;
  margin: 0;
  padding: 10px 0 5px 0;
`;
export const LoadingCard = styled.div`
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid black;
  box-shadow: 5px 3px 5px 0 grey;
  transition: box-shadow 0.2s;
`;
