import { useEffect, useState } from "react";
import { Drawer, Row } from "antd";
import { FaReact, FaRegListAlt } from "react-icons/fa";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Portifolio from "../Portifolio";
import Career from "../Career";
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
  TitleNav,
  ContainerLogoMobile,
  ContainerMobile,
} from "./styles";

export default function Navbar() {
  const [mobileScreen, setMobileScreen] = useState(false);

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
            <FaReact size={35} color={"#ffffff"} />
            <TitleNav>Edevaldo Cruz</TitleNav>
            <div onClick={showDrawer}>
              <FaRegListAlt size={25} color={"#ffffff"} />
            </div>
            <Drawer
              title="Menu"
              placement="right"
              onClose={onClose}
              open={open}
              zIndex={1000}
              width={"65vw"}
            >
              <p>
                <a href="#start">Inicio</a>
              </p>
              <p>
                <a href="#about">Sobre mim</a>
              </p>
              <p>
                <a href="#portifolio">Portifolio</a>
              </p>
              <p>
                {" "}
                <a href="#career">Carreira</a>
              </p>
              <p>
                <a href="#contact">Contato</a>
              </p>
            </Drawer>
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
          <Career mobileScreen={mobileScreen} />
        </SessionCareer>
        <SessionContact id="contact">
          <Contact />
        </SessionContact>
      </div>
    </>
  );
}
