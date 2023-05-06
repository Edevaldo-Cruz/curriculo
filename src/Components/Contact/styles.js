import { Footer } from "antd/es/layout/layout";
import styled from "styled-components";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export const Container = styled.div`
  padding-inline: 10%;
  z-index: 1;
`;

export const ContainerTitle = styled.div`
  width: 12rem;
  height: 1.8rem;
  padding-left: 10px;
  background-color: rgba(123, 74, 226, 0.4);
  border-radius: 0.3rem;
`;

export const Title = styled.p`
  text-align: start;
  font-size: 20px;
  color: #7b4ae2;
  font-weight: 600;
  margin: 0;
`;

export const HighlightedText = styled.p`
  font-size: 56px;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: start;

  @media (max-width: 600px) {
    font-size: 26px;
    margin-left: 10%;
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

  @media (max-width: 600px) {
    width: 15rem;
    height: 1.5rem;
    font-size: 18px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Email = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 22.5rem;
  color: #7b4ae2;
  font-size: 1.5rem;
  margin-left: 2rem;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 600px) {
    width: 15rem;
    height: 1.5rem;
    margin-left: 0;
    font-size: 1rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;

  @media (max-width: 600px) {
    display: block;
  }
`;

export const SocialNetwork = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const BtnSocial = styled.a``;

export const Text = styled.p`
  text-align: center;
  font-size: 20px;
  color: ${(props) => props.theme.colorTextDefault};
  margin: 0 0 0 35px;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

export const ContainerFooter = styled(Footer)`
  text-align: center;
  background-color: ${(props) => props.theme.backgroundColor};
  border-top: 3px solid rgba(255, 255, 255, 0.2);
`;

export const IconLinkedin = styled(BsLinkedin)`
  color: ${(props) => props.theme.colorTextDefault};
  margin-right: 1rem;
  font-size: 25px;
`;

export const IconGitHub = styled(BsGithub)`
  color: ${(props) => props.theme.colorTextDefault};
  font-size: 25px;
`;
