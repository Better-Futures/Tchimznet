import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Source Sans Pro', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
// paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]
export const Paragraph = styled.p`
   font-family: 'Poppins';
   font: normal;
   color: #696969;
   font-size: 20px;
   line-height: 1.1;
   max-width: 350px;
   margin-top: 16px;
   margin-bottom: 16px;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: linear-gradient(
    157.81deg,
    #dffade -43.27%,
    #c0f5be -21.24%,
    #a0f09d 12.19%,
    #86eb7d 29.82%,
    #61e65c 51.94%,
    #45cf33 90.29%
  );
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #22c922;
  
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
