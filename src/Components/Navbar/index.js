import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { FaReact, FaRegListAlt } from "react-icons/fa";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import Home from "../Home";
import About from "../About";
import Contact from "../Contact";
import Portifolio from "../Portifolio";
import Career from "../Career";
import styled, { ThemeProvider } from "styled-components";
import { darkModeTheme, lightModeTheme } from "../../Global/theme";
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
  ConatinerBtnClose,
  BtnSocial,
  LinkDrawer,
  ContainerTitleDrawer,
  BtnMode,
  StyledComponent,
  IconReact,
  IconMenu,
  TitleDrawer,
  IconDark,
  IconLight,
} from "./styles";

export default function Navbar() {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [darkMode, setDarkmode] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(darkModeTheme);
  const lightStyle = { backgroundColor: "#fff" };
  const darkStyle = { backgroundColor: "#333" };

  function changeTheme() {
    setDarkmode(!darkMode);
  }

  const ContainerDrawer = styled(Drawer)`
    background-color: ${currentTheme.backgroundColor};
  `;

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (darkMode === true) {
      setCurrentTheme(darkModeTheme);
    } else {
      setCurrentTheme(lightModeTheme);
    }
  }, [darkMode]);

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
    <ThemeProvider theme={currentTheme}>
      <StyledComponent>
        {mobileScreen === false ? (
          <Container align="middle">
            <>
              <ContainerLogo>
                <IconReact size={75} />

                <TitleNav>Edevaldo Cruz</TitleNav>
              </ContainerLogo>
              <ContainerAnchor>
                {darkMode ? (
                  <BtnMode onClick={changeTheme}>
                    <IconDark size={35} />
                  </BtnMode>
                ) : (
                  <BtnMode onClick={changeTheme}>
                    <IconLight size={35} />
                  </BtnMode>
                )}
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
              {/* <FaReact size={35} color={currentTheme.backgroundColor} /> */}
              <IconReact size={35} />
              <TitleNav>Edevaldo Cruz</TitleNav>
              <div onClick={showDrawer}>
                <IconMenu size={25} />
                {/* <FaRegListAlt size={25} color={"#ffffff"} /> */}
              </div>
              <ContainerDrawer
                title={
                  <ContainerTitleDrawer>
                    <div style={{ width: "25%" }}>
                      {darkMode ? (
                        <BtnMode onClick={changeTheme}>
                          <IconDark />
                        </BtnMode>
                      ) : (
                        <BtnMode onClick={changeTheme}>
                          <IconLight />
                        </BtnMode>
                      )}
                    </div>
                    <div style={{ width: "75%" }}>
                      <TitleDrawer>Menu</TitleDrawer>
                    </div>
                  </ContainerTitleDrawer>
                }
                placement="right"
                onClose={onClose}
                open={open}
                zIndex={1000}
                width={"65vw"}
                headerStyle={{
                  paddingInline: "0",
                }}
                style={darkMode ? darkStyle : lightStyle}
                closeIcon={
                  <ConatinerBtnClose>
                    <AiOutlineCloseCircle size={35} />
                  </ConatinerBtnClose>
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
              </ContainerDrawer>
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
      </StyledComponent>
    </ThemeProvider>
  );
}
