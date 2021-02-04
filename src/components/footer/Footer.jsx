import { LinkX, SmallLogo, Content, AppFooter, Allrights } from "./FooterStyle";
import logo from "../../assets/logo.svg";

const footerWrap = {
  backgroundColor: "#F8F8F8",
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "relative",
  bottom: "0",
  display: "block",
  width: "100%",
};

export function Footer() {
  return (
    <>
      <div className={footerWrap}>
        <AppFooter>
          <SmallLogo>
            <img width="160" height="36" src={logo} alt="avatar" />
          </SmallLogo>
          <Content>
            <LinkX to="/contact-us">Contact Us</LinkX>
            <LinkX to="/terms-and-conditions">Terms and Conditions</LinkX>
            <LinkX to="/privacy_policy">Privacy policy</LinkX>
          </Content>
          <Allrights>
            <p>@fleets All Right Reserverd 2021</p>
          </Allrights>
        </AppFooter>
      </div>
    </>
  );
}
