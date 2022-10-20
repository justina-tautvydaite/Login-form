import styled from "styled-components";
import backgroundImage from "../assets/bg-intro-desktop.png";
import backgroundImageMobile from "../assets/bg-intro-mobile.png";
import { Link } from "react-router-dom";

export const TermsBackground = styled.div`
  background-image: url(${backgroundImage});
  background-color: hsl(0, 100%, 74%);
  display: flex;
  justify-content: center;

  @media (max-width: 720px) {
    background-image: url(${backgroundImageMobile});
  }
`;
export const TermsWrapper = styled.div`
  background-color: white;
  width: 70%;
  margin-top: 100px;
  margin-bottom: 100px;
  padding: 70px 100px;
  border-radius: 50px;
  box-shadow: 0px 40px 20px rgba(0, 0, 0, 0.15);
`;
export const BackLink = styled(Link)`
  background-color: hsl(154, 59%, 51%);
  color: white;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 16px;
  box-shadow: 0px 5px rgba(45, 168, 115);
  border: none;
  text-decoration: none;
  display: block;
  width: 120px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
