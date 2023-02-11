import React from 'react'
import { Container, Paragraph, Button} from '../../globalStyles';
import { Link } from 'react-router-dom';
import {
  Star,
  Security,
  TextContainer,
  Plane,
  IconContainer,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Paragrap,
  Header,
  ImgWrapper,
 
} from './Cards.elements';

const Home = (
  lightBg,
  lightTopLine,
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
                <TopLine lightTopLine={lightTopLine}>
        Are services are reliable and available 24/7        
                </TopLine>
               
              <Paragraph>We work day and night to ensure you have the 
              best of our services continually, for your trust and confidence
              is very dear to us.
              </Paragraph> 
              <Link to='/products' >
                <Button fontBig  >Get Started</Button>
              </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
              <IconContainer>
            <Star/>
            <TextContainer>
            <Header>Rewards/ Discount</Header>
            <Paragrap> We give bonous and discount on every subscribtion.</Paragrap>
            </TextContainer>
            </IconContainer>
            </ImgWrapper>
            <ImgWrapper>
            <IconContainer>
            <Security/>
            <TextContainer>
            <Header>100% Secured</Header>
              <Paragrap>Higly equiped and well enforced security policy.</Paragrap>
              </TextContainer>
            </IconContainer>
            </ImgWrapper>
            <ImgWrapper>
            <IconContainer>
            <Plane/>
            <TextContainer>
            <Header>Infomation Transfer</Header>
            <Paragrap>  we always ensure your information is transmitted safely.
            </Paragrap>
            </TextContainer>
            </IconContainer>
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>


  )
}

export default Home