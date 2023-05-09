import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Drawer } from "antd";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import logoReact from "./Asset/logoReact.gif";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Portifolio from "./Components/Portifolio";
import Career from "./Components/Career";
import styled, { ThemeProvider } from "styled-components";
import { darkModeTheme, lightModeTheme } from "./Global/theme";
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

function App() {
  const [mobileScreen, setMobileScreen] = useState(false);
  const [darkMode, setDarkmode] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(darkModeTheme);
  const [showImage, setShowImage] = useState(false);
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

  useEffect(() => {
    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 768;

    if (isMobile) {
      setShowImage(true);
      setTimeout(() => {
        setShowImage(false);
      }, 4000);
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      {showImage && (
        <div
          style={{
            position: "fixed",
            zIndex: "9999",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#1e1e1e",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{ width: "20rem", height: "20rem" }}
            src={logoReact}
            alt="Logo react"
          />
        </div>
      )}
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
              <IconReact size={35} />
              <TitleNav>Edevaldo Cruz</TitleNav>
              <div onClick={showDrawer}>
                <IconMenu size={25} />
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

export default App;
