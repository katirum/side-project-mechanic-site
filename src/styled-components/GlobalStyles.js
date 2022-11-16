import styled, { createGlobalStyle } from 'styled-components';
import { Link } from 'react-router-dom';

export const GlobalStyles = createGlobalStyle`
  :root{
    --black: #060e09;
    --white: #eaeaea;
  }

  * {
    box-sizing: border-box;
    margin: 0;

  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: white;
    position: relative;
    font-family: 'Roboto', sans-serif;
  }

`
export const InnerWrapper = styled.div`
  margin: 0 auto;
`

export const Button = styled.button`
    color: floralwhite;
    background-color: transparent;
    border: none;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
    transition: transform .5s; 

    &:hover{
        cursor: pointer;
        transform: scale(1.05);

    }
`

export const GoBackStyledLink = styled(Link)`
  margin: 30px;
  border-bottom: 1px solid var(--white);
  transition: transform .5s; 

&:hover{
    transform: scale(2);
    }
`