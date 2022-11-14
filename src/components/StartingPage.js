import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { OuterWrapper } from 'styled-components/GlobalStyles';

export const StartingPage = () => {
  return (
    <OuterWrapper>
      <GridWrapper>
        <TitleWrapper>
          <h1>Name</h1>
          <p>The best mechanic</p>
        </TitleWrapper>
        <div>
          <Link to="/about"><button type="button">About</button></Link>

          <Link to="/price"><button type="button">Price and Contact</button></Link>

          <Link to="/projects"><button type="button">My Projects</button></Link>
        </div>
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
  background-image: url('');
`