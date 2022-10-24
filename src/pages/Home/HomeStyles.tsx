import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: black;
  color: #bbcacc;
  height: 100vh;
  width: 100%;
  padding: 2em;
`;


export const HeadingRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-bottom: 2em;

  h1 {
    align-self: center;
    margin: 0;
    margin-bottom: 0.5em;
  }

  @media (min-width: 20em) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h1 {
      margin: 0;
    }
  }
`;

export const GridCenterer = styled.div`
  display: flex;
  justify-content: center;
`;

export const HomeGrid = styled.div`
  display: grid;
  justify-content: space-between;
  margin: 0 auto;
  gap: 1em;

  @media (min-width: 30em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 90em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;