import React from 'react'
import { Container, Paragraph} from '../../globalStyles';
import {
  Top,
  Bottom,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  Img,
  Bluegradient
} from './Features.elements';

const Features= ({
  lightBg,
  imgStart,
  start,
  firstline,
  secondline,
  lastline,
  paragraph,
  img1,
  img2,
  alt1,
  alt2
}) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
            <TextWrapper>
            
                <TopLine >{firstline}</TopLine>
                 
                <Heading >{secondline}</Heading>
                
                <TopLine>{lastline}</TopLine>
                
              <Paragraph> {paragraph}  </Paragraph>  
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
              <Bluegradient />
              <Top>
                <Img src={img1} alt={alt1} />
                </Top>
                <Bottom>
                <Img src={img2} alt={alt2} />
                </Bottom>
                
              </ImgWrapper>              
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    
 
</>

  )
}

export default Features;