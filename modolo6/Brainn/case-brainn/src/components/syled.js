import styled from "styled-components";

export const Select = styled.select`
  grid-column: 2 / 3;
  position: absolute;
left: 6%;
right: 80.51%;
top: 8.52%;
bottom: 87.3%;
width:8vw;

filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.05));

  @media(max-width: 800px) {
    flex-direction: column;
    position: relative;
  };
`;
