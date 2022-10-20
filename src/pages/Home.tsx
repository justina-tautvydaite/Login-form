import {
  H1,
  HomeBackground,
  P,
  TextWrapper,
  BoxWrapper,
  VioletBox,
  Form,
  Input,
  InputButton,
  TermsText,
  TermsLink,
} from "./Home.styles";

function Home() {
  const logMeIn = () => {};

  return (
    <HomeBackground>
      <TextWrapper>
        <H1>Learn to code by watching others</H1>
        <P>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </P>
      </TextWrapper>
      <BoxWrapper>
        <VioletBox>
          <b>Try it free 7 days</b>
          &nbsp; then $20/mo. thereafter
        </VioletBox>
        <Form>
          <Input
            type="text"
            name="first-name"
            id="firmst-name"
            placeholder="First Name"
            required
          />
          <Input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            required
          />
          <Input type="email" id="email" placeholder="Email Address" required />
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Pasword"
            minLength={6}
            required
          />
          <InputButton
            type="submit"
            value="Claim your free trial"
            onSubmit={logMeIn}
          />
          <TermsText>
            By clicking the button, you are agreeing to our{" "}
            <TermsLink to="/terms-and-conditions">Terms and Services</TermsLink>
          </TermsText>
        </Form>
      </BoxWrapper>
    </HomeBackground>
  );
}

export default Home;
