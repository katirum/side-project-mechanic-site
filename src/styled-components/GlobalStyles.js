import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --black: #060e09;
    --white: #eaeaea;
  }

  * {
    box-sizing: border-box;
    margin: 0 auto;

  }
  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: black;
    color: white;
    position: relative;
  }
`

export const OuterWrapper = styled.div`
    max-width: 1024px;
    margin: 30px 0;
`