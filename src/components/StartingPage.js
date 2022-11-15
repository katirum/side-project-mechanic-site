import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OuterWrapper, Button } from 'styled-components/GlobalStyles';

export const StartingPage = () => {
  return (
    <OuterWrapper>
      <GridWrapper>
        <TitleWrapper>
          <Overlay>
            <h1>Jimmy</h1>
            <h1>Högbom</h1>
            <p>The best mechanic</p>
          </Overlay>
        </TitleWrapper>
        <NavWrapper>
          <StyledLink to="/about"><Button type="button">About</Button></StyledLink>

          <StyledLink to="/price"><Button type="button">Price and Contact</Button></StyledLink>

          <StyledLink to="/projects"><Button type="button">My Projects</Button></StyledLink>
        </NavWrapper>
      </GridWrapper>
    </OuterWrapper>
  )
}

const GridWrapper = styled.div`
  /* display: grid;
  grid-template-columns: 3fr 1fr;
  grid-row: 1/3; */
  display: flex;

`

const TitleWrapper = styled.div`
  background-image: url('/images/title.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  width: 70vw;
  position: relative;
`

const Overlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.65);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 120px;
    font-family: 'Bebas Neue', cursive;
    
  }

  p{
    font-size: 25px;
    font-style: italic;
    font-family: 'Roboto', sans-serif;
  }
`

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 33% auto;

  @media (min-width: 1024px) {
    margin: 20% auto;
  }
`

const StyledLink = styled(Link)`
  margin: 10px 0;
`