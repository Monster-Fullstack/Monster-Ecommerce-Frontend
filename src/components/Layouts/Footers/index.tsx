import React from "react";
import ReactDOM from "react-dom";
import { Container, Row } from "react-bootstrap";
import FooterCol from "../../UI/Cols/FooterCol";
import cl from "./index.module.scss";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { ImTwitter } from "react-icons/im";
import { Link } from "react-router-dom";
import Apple from "../../../assets/images/apple.png";
import Google from "../../../assets/images/google.png";
import useResponsive from "../../../hooks/useResponsive";

const FooterTemplate: React.FC = () => {
  const responsive = useResponsive();
  return (
    <div className={`${cl.footerBack} shadow-sm mt-5 p-5`}>
      <Container>
        <Row className={cl.rowCustom}>
          <FooterCol>
            <h5 className={cl.footerMenuTitle}>OFFICE ADDRESS</h5>
            <p className={cl.footerText}>
              1635 Franklin Street Montgomery, Near Sherwood Mall.
            </p>
            <p className={cl.footerText}>Email: Support@monster.com</p>
            <h5 className={cl.footerMenuTitle}>SOCIAL LINKS</h5>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mohamed-ahmed-b6829520b/"
            >
              <BsLinkedin className={cl.icons} />
            </a>
            <a target="_blank" href="https://twitter.com/Mohamed97503514">
              <ImTwitter className={cl.icons} />
            </a>
            <a target="_blank" href="https://github.com/Monster-Mohamed">
              <BsGithub className={cl.icons} />
            </a>
          </FooterCol>
          {responsive !== "phone" && (
            <>
              <FooterCol>
                <h5 className={cl.footerMenuTitle}>THE COMPANY</h5>
                <Link to="/about" className={cl.footerLink}>
                  About Us
                </Link>
                <br />
                <Link to="company" className={cl.footerLink}>
                  Company Profile
                </Link>
                <br />
                <Link to="/contact" className={cl.footerLink}>
                  Contact Us
                </Link>
              </FooterCol>
              <FooterCol>
                <h5 className={cl.footerMenuTitle}>MORE INFO</h5>
                <Link to="/purchase" className={cl.footerLink}>
                  How To Purchase
                </Link>
                <br />
                <Link to="/privacy" className={cl.footerLink}>
                  Privacy Policy
                </Link>
                <br />
                <Link to="refund" className={cl.footerLink}>
                  Refund Policy
                </Link>
              </FooterCol>
            </>
          )}
          <FooterCol>
            <h5 className={cl.footerMenuTitle}>DOWNLOAD APPS</h5>
            <a href="#">
              <img src={Google} alt="google play" />
            </a>
            <br />
            <a href="#">
              <img className="mt-2" src={Apple} alt="apple store" />
            </a>
          </FooterCol>
        </Row>
      </Container>
      <Container>
        <Row>
          <h6 className={cl.copyRight}>
            © Copyright {new Date().getFullYear()} by MonStore, All Rights
            Reserved
          </h6>
        </Row>
      </Container>
    </div>
  );
};

const FooterDesk: React.FC = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <FooterTemplate />,
        document.getElementById("footer")!
      )}
    </React.Fragment>
  );
};

export default FooterDesk;
