import styled from 'styled-components';

export const IconContainer = styled.span`
    display: flex;
    padding: 5px 10px;
    border-radius: 5px; 
    background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
    flex-direction: row;
    justify-content: center;
    width: 45%;
    margin-bottom: 20px;
    @media screen and (max-width: 768px){
      text-align: center;
      align-items: center;
      height: fit-content;
      width: 52%;
    }
`;


export const Top = styled.div`
    max-width: 100%;
    grid-row: 1;
    grid-column: 4 / -1;
`;
export const Bottom = styled.div`
    max-width: 100%;
    padding-top: 20%;
    grid-row: 1;
    grid-column: 1 / span 8;
`;
export const Bluegradient = styled.div`
    z-index: 0;
    width: 50%;
    height: 40%;
    left: 10px;
    top: 1400px;
    background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);
    filter: blur(123px);
    @media screen and (max-width: 768px){
      top: 2100px;
    }
`;


export const InfoSec = styled.div`
  color: #fff;
  padding: 70px 0 160px 0;
  background: ${({ lightBg }) => (lightBg? '#000':'#fff'  )};

`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row' : 'row-reverse')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 350px;
  padding-top: 0;
  padding-bottom: 60px;
  margin-left: 120px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
    margin-left: 0;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 540px;
  display: grid;
  justify-content: ${({ start }) => (start ? 'flex-end' : 'flex-start')};
  grid-template-columns: repeat(12, 1fr);
`;

export const TopLine = styled.h2`
  color: #fff;
  font:  Arial sans-serif;
  font-size: 45px;
  font-weight: bold;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 1px solid #333;
  max-width: 100%;
  max-height: 500px;
  position: relative;
  box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
 
`;

export const Heading = styled.h1`
  font-size: 50px;
  font-weight: 600;
  background: radial-gradient(
    64.18% 64.18% at 71.16% 35.69%,
    #dffade 0.89%,
    #c0f5be 17.23%,
    #a0f09d 42.04%,
    #86eb7d 55.12%,
    #61e65c 71.54%,
    #45cf33 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;


