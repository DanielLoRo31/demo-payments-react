import styled from 'styled-components'

export const CardBackground = styled.div`
  background-color: #222222;
  padding: 1em;
  border-radius: 0.8em;
  margin-bottom: 1.2em;
  min-height: 10em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 20em;
`;

export const CardHeading = styled.h4`
  font-size: 1.1em;
  margin: 0;
`;

export const CardBody = styled.div`
  margin-top: 2em;
  font-size: 0.8em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: stretch;
  gap: 1em;

  @media (min-width: 20em) {
    flex-direction: row;
  }
`;

export const CardBold = styled.span`
  font-weight: bold;
`;


export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  gap: 1em;
`;