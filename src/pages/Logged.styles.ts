import styled from "styled-components";
import backgroundImage from "../assets/bg-intro-desktop.png";
import backgroundImageMobile from "../assets/bg-intro-mobile.png";

export const LoggedBackground = styled.div`
  background-image: url(${backgroundImage});
  background-color: hsl(0, 100%, 74%);
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
  max-height: auto;
  @media (max-width: 720px) {
    background-image: url(${backgroundImageMobile});
  }
`;

export const LoggedWrapper = styled.div`
  background-color: white;
  width: 70%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 70px 100px 50px;
  border-radius: 50px;
  box-shadow: 0px 40px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;
export const ProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  margin-top: 100px;
`;

export const ProfileText = styled.h2`
  margin: 0;
  color: white;
  font-weight: 400;
  font-size: 50px;
  display: flex;
  align-items: baseline;
`;
export const ProfileTextName = styled(ProfileText)`
  font-size: 26px;
  margin-left: 20px;
  font-weight: 700;
`;
export const LoggedLink = styled.a`
  font-weight: 700;
  text-decoration: none;
  color: hsl(154, 59%, 51%);
  font-size: 20px;
`;
export const P = styled.p`
  font-size: 16px;
`;
export const H3 = styled.h3`
  font-weight: 600;
  margin-bottom: 20px;
`;

export const H4 = styled.h4`
  font-weight: 600;
  margin-top: 30px;
`;
