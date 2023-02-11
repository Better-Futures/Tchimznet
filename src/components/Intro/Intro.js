import React from 'react'
import { Container, Paragraph} from '../../globalStyles';
import img1 from '../../images/Engineer_man.jpg'
import {
  Pinkgradient,
  Whitegradient,
  Bluegradient,
  HomeIcon,
  IconContainer,
  Parag,
  Paragrap,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  Img
} from './Intro.elements';

const Intro = (
  lightBg,
  lightTopLine,
  lightText,
  imgStart,
  start
) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
            <TextWrapper>
            <IconContainer>
            <HomeIcon/>
            <Parag> High </Parag> <Paragrap> quality </Paragrap> <Parag> network </Parag>
            </IconContainer>
              
                <TopLine lightTopLine={lightTopLine}>The Next</TopLine>
                <Heading lightText={lightText}>Generation </Heading>
                <TopLine>Broadband Techn.</TopLine>
              <Paragraph>We work day and night to ensure you have the 
              best of our services continually, for your trust and instrest
              is very dear to us.
              </Paragraph>  
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img1} alt='Robot' />
                <Pinkgradient />
                <Whitegradient />
                <Bluegradient />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
  
</>

  )
}

export default Intro