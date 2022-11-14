import React from 'react';
import styled from 'styled-components';
/* import { OuterWrapper } from 'styled-components/GlobalStyles'; */

export const Footer = () => {
  return (
    <FooterWrapper>
      <h3>
            website is created by Me
      </h3>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
`