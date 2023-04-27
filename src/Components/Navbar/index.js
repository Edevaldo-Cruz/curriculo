import { Row } from "antd";
import { FaReact } from "react-icons/fa";
import { Home } from "../Home";
import About from "../About";
import Contact from "../Contact";
import {
  Container,
  SessionHome,
  SessionAbout,
  SessionPortifolio,
  ContainerLogo,
  ContainerAnchor,
  StyledAnchor,
  TextLink,
  SessionCareer,
  SessionContact,
  StyledSpan,
  TitleNav,
  ContainerLogoMobile,
  ContainerMobile,
} from "./styles";
import Portifolio from "../Portifolio";
import Career from "../Career";
import { useEffect, useState } from "react";
import { Title } from "../About/styles";

export default function Navbar() {
  const [mobileScreen, setMobileScreen] = useState(false);

  useEffect(() => {
    function isMobileScreen() {
      return window.matchMedia("(max-width: 600px)").matches;
    }
    if (isMobileScreen()) {
      setMobileScreen(true);
    } else {
      setMobileScreen(false);
    }
  }, []);

  return (
    <>
      {mobileScreen === false ? (
        <Container align="middle">
          <>
            <ContainerLogo>
              <FaReact size={75} color={"#ffffff"} />
              <TitleNav>Edevaldo Cruz</TitleNav>
            </ContainerLogo>
            <ContainerAnchor>
              <StyledAnchor
                direction="horizontal"
                items={[
                  {
                    key: "start",
                    href: "#start",
                    title: <TextLink>Inicio</TextLink>,
                  },
                  {
                    key: "about",
                    href: "#about",
                    title: <TextLink>Sobre mim</TextLink>,
                  },
                  {
                    key: "portifolio",
                    href: "#portifolio",
                    title: <TextLink>Portifolio</TextLink>,
                  },
                  {
                    key: "career",
                    href: "#career",
                    title: <TextLink>Carreira</TextLink>,
                  },
                  {
                    key: "contact",
                    href: "#contact",
                    title: <TextLink>Contato</TextLink>,
                  },
                ]}
              />
            </ContainerAnchor>
          </>
        </Container>
      ) : (
        <ContainerMobile>
          <ContainerLogoMobile>
            <FaReact size={55} color={"#ffffff"} />
            <TitleNav>Edevaldo Cruz</TitleNav>
          </ContainerLogoMobile>
        </ContainerMobile>
      )}

      <div>
        <SessionHome id="start">
          <Home mobileScreen={mobileScreen} />
        </SessionHome>
        <SessionAbout id="about">
          <About mobileScreen={mobileScreen} />
        </SessionAbout>
        <SessionPortifolio id="portifolio">
          <Portifolio mobileScreen={mobileScreen} />
        </SessionPortifolio>
        <SessionCareer id="career">
          <Career />
        </SessionCareer>
        {/* <SessionContact id="contact">
          <Contact />
        </SessionContact> */}
      </div>
    </>
  );
}
