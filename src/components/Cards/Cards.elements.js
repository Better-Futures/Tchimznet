import styled from 'styled-components';
import {FaPaperPlane} from 'react-icons/fa';
import {AiFillSecurityScan} from 'react-icons/ai';
import {BsFillStarFill}  from 'react-icons/bs';


export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    border-radius: 5px; 
    background: linear-gradient(125.17deg, #272727 0%, #11101d 100%);
    box-shadow: 0px 20px 1000px -10px rgba(66, 71, 91, 0.1);
    height: 10%;
    width: 100%;
    padding: 10px 5px 0 5px;
    &:hover{
    background: #272727;
    
 
    }
    @media screen and (max-width: 768px){
      flex-direction: column;
      width: 100%;
      height: 100%;
      margin-right: 8px;

    };
`;
export const Paragrap = styled.p`
  font-family: 'Poppins';
   font: normal;
   color: #696969;
   font-size: 20px;
   line-height: 1.1;
   margin-top: 12px;
   margin-bottom: 16px;


`;
export const TextContainer = styled.div`
  flex-direction: column;
`;
export const Parag = styled.p`
    font-family: inherit;
    font-size: 18px;
`;
export const Header = styled.h1`
    font-family: inherit;
    font-size: 18px;
    
  
`;
export const Star= styled(BsFillStarFill)`
    color: #069b0d;
    font-size: 32px;
    margin-right: 18px;
`; 
export const Plane= styled(FaPaperPlane)`
    color: #069b0d;
    font-size: 32px;
    margin-right: 18px;
`;
export const Security= styled(AiFillSecurityScan)`
    color: #069b0d;
    font-size: 32px;
    margin-right: 18px;
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
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
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
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
  margin-bottom: 16px;

`;

export const TopLine = styled.h2`
  color: #fff;
  font:  Arial sans-serif;
  font-size: 45px;
  font-weight: bold;
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
  z-index: 5;
  position: relative;
  border-radius: 20px;
 
`;




