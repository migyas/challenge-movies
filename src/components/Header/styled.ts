import styled from 'styled-components';

export const Container = styled.div`
  height: 8rem;
  width: 100%;
  background-color: #116193;
  display: flex;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 400px) {
    height: 6rem;
  }
`;

export const Text = styled.h1`
  font-family: 'Abel', sans-serif;
  color: #00e8e4;
  font-size: 3rem;
  font-weight: normal;
  letter-spacing: 0.5px;

  @media only screen and (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
