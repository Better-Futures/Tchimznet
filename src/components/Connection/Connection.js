import React from 'react'
import { Button, Container, Paragraph} from '../../globalStyles';
import img2 from '../../images/google.svg';
import img3 from '../../images/apple.svg';

import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  ImgWrapper,
  Img,
  ImgDisplay,
  ButtonDisplay
} from './Connection.elements';
import { Link } from 'react-router-dom';

const Connection = ({
  lightBg,
  displaylogo,
  imgStart,
  start,
  heading,
  paragraph,
  displaybutton,
  buttonlabel,
  img,
  alt
}) => {

   
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
            <TextWrapper>
                <TopLine>{heading}</TopLine> 
              <Paragraph> {paragraph} </Paragraph>
              <ImgDisplay displaylogo={displaylogo}>
              <Img src={img2} alt='google' />
              <Img src={img3} alt='apple' />  
              </ImgDisplay>
              <ButtonDisplay displaybutton={displaybutton}>
              <Link to ='/'>
              <Button big>{buttonlabel}</Button>
              </Link>
              </ButtonDisplay>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    

</>

  )
}

export default Connection;