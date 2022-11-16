import React from 'react';
import styled from 'styled-components';
import { Button, GoBackStyledLink, InnerWrapper } from 'styled-components/GlobalStyles';

export const AboutPage = () => {
  return (
    <InnerWrapper>
      <FirstContainer>
        <GoBackStyledLink to="/">
          <Button
            type="button">
                Go Back
          </Button>
        </GoBackStyledLink>
        <ProfilePictureContainer>
          <img src="http://placekitten.com/200/300" alt="bild" />
        </ProfilePictureContainer>

      </FirstContainer>
      <IntroductionContainer>
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique
            sunt in culpa qui officia deserunt
            mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
            facilis est et expedita distinctio.
            Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus id quod maxime repellat.
        </p>
      </IntroductionContainer>
    </InnerWrapper>
  )
}

const FirstContainer = styled.div`
  height: 500px;
  padding-top: 30px;
  background-image: url('/images/aboutheader.jpg');
  background-position: center bottom;
background-size: cover;
`

const ProfilePictureContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-top: 50px;

  img{
  border-radius: 50%;
  width: 300px;
  height: 300px;
  object-fit: cover;
  object-position: top center;
  }
`
const IntroductionContainer = styled.div`
  max-width: 90%;
  margin: 10%;
  text-align: center;
`