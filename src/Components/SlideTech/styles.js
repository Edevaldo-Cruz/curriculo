import styled from "styled-components";
import { Col, Row, Link } from "antd";
import { CgCodeSlash } from "react-icons/cg";

export const Container = styled(Row)`
  width: 100%;
  height: 100vh;
  padding-inline: 10%;
  z-index: 1;
`;

export const ContainerSalutation = styled(Col)`
  width: 100%;

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
  padding-block: 10rem;
`;

export const ContainerBtn = styled(Col)`
  width: 100%;
  padding-top: 15rem;
`;

export const LinkCurriculum = styled.a`
  color: #7b4ae2;
  font-size: 1.5rem;
  margin-right: 5px;
  font-weight: 700;

  &:hover {
    color: #ccc;
  }
`;

export const BtnWhatsapp = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 30rem;
  height: 3rem;
  margin-top: 2rem;
  color: #7b4ae2;
  font-size: 25px;
  border: 2px solid #7b4ae2;
  border-radius: 2rem;
  font-weight: 700;

  &:hover {
    color: #ccc;
    border: 2px solid #ccc;
  }
`;

export const ContainerCard = styled(Row)`
  display: flex;
  //justify-content: space-between;
  //width: 100%;
`;

export const ProfessionCard = styled.div`
  width: 20rem;
  height: 8rem;
  border: 5px solid #ccc;
  border-radius: 1rem;
  padding-block: 1.5rem;

  &:hover {
    background-color: rgba(123, 74, 226, 0.5);
    border: 5px solid #7b4ae2;
  }
`;

export const TitleCardProfession = styled.h1`
  color: #fff;
`;
