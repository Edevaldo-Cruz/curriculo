import { Row } from "antd";
import { FaReact } from "react-icons/fa";
import { Home } from "../Home";
import {
  Container,
  ContainerLogo,
  ContainerAnchor,
  StyledAnchor,
  TextLink,
} from "./styles";

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
                key: "skills",
                href: "#skills",
                title: <TextLink>Skills</TextLink>,
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
        <div
          id="start"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "rgba(0,255,0,0.02)",
          }}
        >
          <Home />
        </div>

        <div
          id="about"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "pink",
          }}
        />
        <div
          id="portifolio"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "#FFFBE9",
          }}
        />
        <div
          id="skills"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "#F4EAD5",
          }}
        />
        <div
          id="career"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "#DAE2B6",
          }}
        />
        <div
          id="contact"
          style={{
            width: "100vw",
            height: "100vh",
            textAlign: "center",
            background: "#CCD6A6",
          }}
        />
      </div>
    </>
  );
}
