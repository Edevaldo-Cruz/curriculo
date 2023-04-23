import styled from "styled-components";
import { Anchor, Col, Row } from "antd";

export const Container = styled(Row)`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 8rem;
  background-color: #1e1e1e;
  padding-inline: 5rem;
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 9999;

  @media (max-width: 600px) {
    padding-inline: 1rem;
  }
`;

export const ContainerLogo = styled(Col)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 50%;

  @media (max-width: 600px) {
    justify-content: space-between;
    width: 100%;
  }
`;

export const ContainerAnchor = styled(Col)`
  display: flex;
  justify-content: end;
  width: 50%;
`;

export const StyledAnchor = styled(Anchor)`
  && .ant-anchor-link-title {
    color: #000; // Defina a cor do texto normal do link
    font-size: 16px; // Defina o tamanho da fonte do texto normal do link
    transition: all 0.3s; // Adicione uma transição suave para a mudança de cor
  }
`;

export const StyledSpan = styled.span`
  &&.ant-anchor-link.ant-anchor-link-visible {
    background-color: #7b4ae2 !important; // Defina a cor de fundo do span para #7b4ae2
  }
`;

export const TextLink = styled.span`
  color: #ffffff; /* Cor branca */
  font-weight: 700;
  font-size: 20px;
`;

export const SessionHome = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

export const SessionAbout = styled.div`
  width: 100vw;
  height: 70vh;
  text-align: center;
`;

export const SessionPortifolio = styled.div`
  max-width: 100vw;
  height: 80vh;
  text-align: center;
`;

export const SessionCareer = styled.div`
  max-width: 100vw;
  height: 80vh;
  text-align: center;
`;

export const SessionContact = styled.div`
  max-width: 100vw;
  height: 20vh;
  text-align: center;
`;

export const TitleNav = styled.span`
  font-size: 45px;
  color: #ffffff;
  font-weight: 600;
  margin-left: 10px;

  @media (max-width: 600px) {
    font-size: 30px;
  }
`;
