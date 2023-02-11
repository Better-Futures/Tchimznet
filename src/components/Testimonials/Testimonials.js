import React from 'react'
import { Button, Container, Paragraph} from '../../globalStyles';
import img1 from '../../images/Robot1.jpg';
import img2 from '../../images/Robotcomp1.jpg';
import img3 from '../../images/Enginneer_woman.jpg';
import {
  ImgContianer,
  TestContainer,
  Testimon,
  Quotes,
  CTA,
  CTAContainer,
  TextContainer,
  Headers,
  Parag,
  Paragrap,
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  ImgWrapper,
  Right,
  Left,
  Img
} from './Testimonials.elements';

const Testimonials = (
  lightBg,
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
              
              
                <TopLine>What do people say
                about us
                </TopLine>
               
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Paragraph>
                All you need to do is accept our services and use them 
                any where in the planet.
                </Paragraph>
              </ImgWrapper>
            </InfoColumn>
            <TestContainer>
                <Testimon>
                <Quotes />
                <Paragraph>
                Money is the only the tool but it's 
                it can take you anywhere you whish
                does not relace you as the driver.
                </Paragraph>
                <ImgContianer>
                    <Img src={img1} alt='/'/>
                   <TextContainer>
                       <Heading>Herman Jenson</Heading>
                       <Parag>Founder & Leader</Parag>
                   </TextContainer>
                </ImgContianer>
                </Testimon>
                <Testimon>
                <Quotes />
                <Paragraph>
                Money makes you life easier 
                and you're lucky to have it
                your're lucky.
                </Paragraph>
                <ImgContianer>
                    <Img src={img2} alt='/'/>
                   <TextContainer>
                       <Heading>Steve Mark</Heading>
                       <Parag>Founder & Leader</Parag>
                   </TextContainer>
                </ImgContianer>
                </Testimon>
                <Testimon>
                <Quotes />
                <Paragraph>
                It is usually people in the
                money business, finance, and international
                trade that are really rich.
                </Paragraph>
                <ImgContianer>
                    <Img src={img3} alt='/'/>
                   <TextContainer>
                       <Heading>Kenn Gallagher</Heading>
                       <Parag>Founder & Leader</Parag>
                   </TextContainer>
                </ImgContianer>
                </Testimon>
            </TestContainer>
            <CTA>
                <CTAContainer>
                <Left>
                  <Headers>
                  Let's try our services now! 
                  </Headers>
                    <Paragrap>
            All you need to install our application
            on you phone or computer follow the subscribtion
            then enjoy.            
                    </Paragrap>
                    </Left>
                    <Right>
                    <Button fontBig >Get started</Button>
                    </Right>
                </CTAContainer>
            </CTA>

          </InfoRow>
        </Container>
      </InfoSec>

</>

  )
}

export default Testimonials