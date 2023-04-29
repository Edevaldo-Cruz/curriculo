import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { FaReact, FaRegListAlt } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
  SocialNetwork,
  BtnSocial,
  LinkDrawer,
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
              title={<h1 style={{ color: "#FFF" }}>Menu</h1>}
              placement="right"
              onClose={onClose}
              open={open}
              zIndex={1000}
              width={"65vw"}
              style={{ backgroundColor: "#333" }}
              closeIcon={
                <div
                  style={{
                    color: "#FFF",
                    fontSize: "24px",
                    position: "absolute",
                    top: "5%",
                    right: "8%",
                  }}
                >
                  <AiOutlineCloseCircle size={35} />
                </div>
              }
              footer={
                <SocialNetwork>
                  <BtnSocial
                    href="https://www.linkedin.com/in/edevaldo-cruz-8586a8a4/"
                    target="_blank"
                  >
                    <BsLinkedin
                      size={25}
                      color={"#CCC"}
                      style={{ marginRight: "1rem" }}
                    />
                  </BtnSocial>
                  <BtnSocial
                    href="https://github.com/Edevaldo-Cruz"
                    target="_blank"
                  >
                    <BsGithub size={25} color={"#CCC"} />
                  </BtnSocial>
                </SocialNetwork>
              }
            >
              <p>
                <LinkDrawer href="#start">Inicio</LinkDrawer>
              </p>
              <p>
                <LinkDrawer href="#about">Sobre mim</LinkDrawer>
              </p>
              <p>
                <LinkDrawer href="#portifolio">Portifolio</LinkDrawer>
              </p>
              <p>
                <LinkDrawer href="#career">Carreira</LinkDrawer>
              </p>
              <p>
                <LinkDrawer href="#contact">Contato</LinkDrawer>
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
