import styled from "styled-components";
import { Anchor, Col, Row } from "antd";

export const Container = styled(Row)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  background-color: #1e1e1e;
  padding-inline: 5rem;
  border-bottom: 3px solid rgba(255, 255, 255, 0.2);
  z-index: 9999;
`;

export const ContainerLogo = styled(Col)`
  display: flex;
  justify-content: start;
  width: 50%;

  //background-color: blue;
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

  && .ant-anchor-ink-ball {
    background-color: #7b4ae2 !important; // Defina a cor do sublinhado ativo como #7b4ae2
  }

  && .ant-anchor-link-title:hover {
    color: #7b4ae2; // Defina a cor do texto do link quando o mouse estiver em cima
  }

  && .ant-anchor-link-active > .ant-anchor-link-title {
    color: #7b4ae2; // Defina a cor do texto do link ativo
    font-weight: bold; // Defina a fonte como negrito para o link ativo, se desejar
  }
`;

export const TextLink = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;

export const SessionHome = styled.div`
  width: 100vw;
  height: 80vh;
  text-align: center;
`;

export const SessionAbout = styled.div`
  width: 100vw;
  height: 80vh;
  text-align: center;
`;

export const SessionPortifolio = styled.div`
  max-width: 100vw;
  height: 80vh;
  text-align: center;
`;

export const SessionCareer = styled.div`
  max-width: 100vw;
  height: 100vh;
  text-align: center;
`;

export const SessionContact = styled.div`
  max-width: 100vw;
  height: 100vh;
  text-align: center;
`;
