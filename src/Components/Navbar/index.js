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
} from "./styles";
import Portifolio from "../Portifolio";
import Career from "../Career";

export default function Navbar() {
  return (
    <>
      <Container align="middle">
        <ContainerLogo>
          <FaReact size={75} color={"#ffffff"} />
          <span
            style={{
              fontSize: "45px",
              color: "#ffffff",
              fontWeight: "600",
              marginLeft: "10px",
            }}
          >
            Edevaldo Cruz
          </span>
        </ContainerLogo>

        <ContainerAnchor>
          <StyledAnchor
            direction="horizontal"
            colorPrimary={"#7b4ae2"}
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
      </Container>
      <div>
        <SessionHome id="start">
          <Home />
        </SessionHome>
        <SessionAbout id="about">
          <About />
        </SessionAbout>
        <SessionPortifolio id="portifolio">
          <Portifolio />
        </SessionPortifolio>
        <SessionCareer id="career">
          <Career />
        </SessionCareer>
        <SessionContact id="contact">
          <Contact />
        </SessionContact>
      </div>
    </>
  );
}
