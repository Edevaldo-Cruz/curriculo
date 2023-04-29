import styled from "styled-components";
import { Col, Row } from "antd";

export const Container = styled(Row)`
  width: 100%;
  padding-inline: 10%;
  z-index: 1;
`;

export const ContainerSalutation = styled(Col)`
  width: 100%;
  padding-top: 10rem;
  padding-inline: 2%;
`;

export const ContainerSalutationMobile = styled.div`
  width: 100%;
  margin-bottom: 2rem;
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

  @media (max-width: 600px) {
    font-size: 26px;
  }
`;

export const SubText = styled.p`
  font-size: 18px;
  color: #ccc;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
  text-align: start;
`;

export const SocialNetwork = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 6rem;
  height: 2.4rem;
  margin-top: 10px;
  border-radius: 1rem;

  background-color: rgba(123, 74, 226, 0.5);
`;

export const BtnSocial = styled.a``;

export const ContainerPhoto = styled(Col)`
  width: 100%;
  height: 540px;
  padding-top: 6rem;
`;

export const ContainerPhotoMobile = styled.div`
  width: 100%;
  height: 200px;
  padding-top: 8rem;
`;

export const ContainerBtn = styled(Col)`
  display: flex;
  align-items: end;
  width: 100%;
  margin-bottom: 3rem;
`;

export const ContainerBtnMobile = styled.div`
  display: flex;
  align-items: end;
  width: 100%;
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
  width: 20rem;
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

export const ContainerCard = styled.div`
  margin-top: 5rem;

  @media (max-width: 600px) {
    margin-top: 2rem;
  }
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

  @media (max-width: 600px) {
    width: 8rem;
    height: 3.2rem;
    border: 2.5px solid #ccc;
  }
`;

export const TitleCardProfession = styled.h1`
  color: #fff;

  @media (max-width: 600px) {
    font-size: 16px;
  }
`;
