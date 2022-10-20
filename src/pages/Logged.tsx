import {
  LoggedBackground,
  LoggedWrapper,
  ProfileImage,
  InfoWrapper,
  ProfileText,
  ProfileTextName,
  LoggedLink,
  P,
  H3,
  H4,
} from "./Logged.styles";
import img from "../assets/profile.jpg";

function Logged() {
  return (
    <LoggedBackground>
      <InfoWrapper>
        <ProfileImage src={img} />
        <ProfileText>
          Hi,
          <ProfileTextName> Vardas Pavarde</ProfileTextName>
        </ProfileText>
      </InfoWrapper>
      <LoggedWrapper>
        <H3>Thank you for participating in my Demo!</H3>
        <P>
          I am a front end developer in progress and I aim to improve my
          front-end development skills by doing such coding challenges. I use
          ReactJS, Typescript and other technologies.
          <P>
            {" "}
            I invite you to follow my coding progress and see other projects:
          </P>
        </P>
        <LoggedLink
          href=" https://github.com/justina-tautvydaite"
          target="_blank"
        >
          GitHub
        </LoggedLink>
        <LoggedLink
          href="https://www.linkedin.com/in/justina-tautvydaite/"
          target="_blank"
        >
          Linked-in
        </LoggedLink>
        <H4>Best regards, Justina</H4>
      </LoggedWrapper>
    </LoggedBackground>
  );
}

export default Logged;
