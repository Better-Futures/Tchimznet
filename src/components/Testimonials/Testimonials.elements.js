import styled from 'styled-components';
import { ImQuotesLeft} from 'react-icons/im';



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

export const Parag = styled.p`
    font-family: inherit;
    font-size: 18px;
`;
export const Paragrap = styled.p`
  font-family: 'Poppins';
   font: normal;
   color: #696969;
   font-size: 20px;
   line-height: 1.1;
   margin-top: 12px;

`;
/* <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
<div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
<div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" /> */

export const Pinkgradient = styled.div`
    z-index: 0;
    width: 40%;
    height: 35%;
    top: 0;
    background: linear-gradient(90deg, #f4c4f3 0%, #fc67fa 100%);
    filter: blur(900px);
    
    
    `;
export const Whitegradient = styled.div`
    z-index: 1;
    width: 80%;
    height: 80%
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.6);
    filter: blur(750px);
    bottom: 40px;
    position: absolute;
`;
export const Bluegradient = styled.div`
    z-index: 0;
    width: 50%;
    height: 50%;
    right: 20px;
    bottom: 20px;
    background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);
    filter: blur(123px);
    position: absolute;
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
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-end' : 'flex-start')};
`;

export const TopLine = styled.h2`
  color: #fff;
  font:  Arial sans-serif;
  font-size: 45px;
  font-weight: bold;
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 20px;
`;

export const Heading = styled.h1`
  font-size: 20px;
  
`;

export const Headers = styled.h1`
    font-size: 30px;
`;
export const CTA = styled.div`
  margin-top: 8rem;
  height: 100%;
  width: 100%;
`;
export const CTAContainer= styled.div`
    border-radius: 5px; 
    background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
    width: 80%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    @media screen and (max-width: 768px){
    flex-direction: column;
    width: 100%;
    padding-bottom: 15px;
  }
`;
export const ImgContianer = styled.div`
    display: flex;
    flex-direction: row;

`;
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Quotes = styled(ImQuotesLeft)`
    color: #22c922;
    font-size: 40px;
`;
export const TestContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    @media screen and (max-width: 768px){
      display: flex;
      flex-direction: column;
    }
`;
export const Testimon = styled.div`
    border-radius: 5px; 
    background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
    box-shadow: 0px 20px 100px -10px rgba(66, 71, 91, 0.1);
    width: 95%;
    height: 100%;
    padding: 0 15px 15px 15px;
    &:hover{
        background: #272727;
    }
    @media screen and (max-width: 768px){
      width: 100%;
     height: 100%;
  }
`;
export const Right = styled.div`
 
  flex-direction: row-reverse;
  @media screen and (max-width: 768px){
    margin-top: 10px;
  }
  
`;
export const Left = styled.div`
  max-width: 60%;
  flex-direction: column;
  margin-right: 170px;
  margin-left: 30px;
  @media screen and (max-width: 768px){
    max-width: 100%;
    margin-right: 0;
    margin-top: 10px;
  }

`;
