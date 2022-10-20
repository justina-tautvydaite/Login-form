import styled from "styled-components";
import backgroundImage from "../assets/bg-intro-desktop.png";
import backgroundImageMobile from "../assets/bg-intro-mobile.png";
import { Link } from "react-router-dom";

export const Body = styled.div`
  height: 100%;
`;

export const H1 = styled.h1`
  font-size: 45px;
  color: white;
  line-height: 65px;
`;
export const HomeBackground = styled.div`
  background-image: url(${backgroundImage});
  background-color: hsl(0, 100%, 74%);
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  @media (max-width: 720px) {
    background-image: url(${backgroundImageMobile});
  }
`;
export const P = styled.p`
  font-size: 16px;
  color: white;
`;
export const TextWrapper = styled.div`
  max-width: 550px;
`;

export const BoxWrapper = styled.div`
  max-width: 550px;
`;

export const VioletBox = styled.div`
  color: white;
  background-color: hsl(248, 32%, 49%);
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 10px rgba(0, 0, 0, 0.15);
  margin-bottom: 30px;
`;
export const Form = styled.form`
  background-color: white;
  box-shadow: 0px 10px rgba(0, 0, 0, 0.15);
  padding: 50px;
  border-radius: 10px;
  margin: 10px 0;
`;
export const Input = styled.input`
  width: 100%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid hsl(246, 25%, 77%);
  margin-bottom: 20px;
  padding-left: 20px;
  font-weight: 700;
  &:focus {
    outline: none !important;
    border: 3px solid hsl(246, 25%, 77%);
  }
`;

export const InputButton = styled(Input)`
  background-color: hsl(154, 59%, 51%);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0px 5px rgba(45, 168, 115);
  border: none;
  cursor: pointer;
`;

export const TermsText = styled(P)`
  font-size: 12px;
  text-align: center;
  color: #999;
`;
export const TermsLink = styled(Link)`
  color: hsl(0, 100%, 74%);
  font-weight: 700;
  text-decoration: none;
`;
