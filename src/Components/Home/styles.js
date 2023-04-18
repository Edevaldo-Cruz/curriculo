import styled from "styled-components";
import { Col, Row, Link } from "antd";

export const Container = styled(Row)`
  width: 100%;
  height: 100vh;
  padding-inline: 10%;
  z-index: 1;
`;

export const ContainerSalutation = styled(Col)`
  width: 100%;
  height: 100%;
  padding-top: 15rem;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #7b4ae2;
  font-weight: 700;
  margin-bottom: 0;
  text-align: start;
`;

export const HighlightedText = styled.p`
  font-size: 56px;
  color: #ffffff;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  text-align: start;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #ccc;
  font-weight: 700;
  margin-bottom: 0;
  margin-top: 0;
  text-align: start;
`;

export const SocialNetwork = styled.div`
  display: flex;
  justify-content: start;
  margin-top: 10px;
`;

export const BtnSocial = styled.a`
  /* border: none;
  background-color: transparent;
  cursor: pointer; */
`;

export const ContainerPhoto = styled(Col)`
  width: 100%;
  height: 100%;
  background-color: gray;
`;

export const ContainerBtn = styled(Col)`
  width: 100%;
  height: 100%;
  padding-top: 15rem;
`;

export const LinkCurriculum = styled.a`
  color: #7b4ae2;
  font-size: 1.5rem;
  margin-right: 5px;
`;
