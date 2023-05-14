import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 100vw;
  z-index: 1;
  padding-block: 0 8%;

  @media (max-width: 600px) {
    padding-block: 8%;
  }
`;

export const ContainerTitle = styled.div`
  width: 12rem;
  height: 1.8rem;
  margin-left: 10%;
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
  margin-left: 10%;

  @media (max-width: 600px) {
    font-size: 26px;
    margin-left: 10%;
  }
`;

export const Text = styled.p`
  width: 95%;
  text-align: start;
  font-size: 20px;
  color: ${(props) => props.theme.colorTextDefault};
  margin-inline: 0;
  margin-bottom: 0.8rem;

  @media (max-width: 600px) {
    margin-inline: 10%;
  }
`;

export const Btn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 6rem;
  height: 1.5rem;
  margin-top: 2rem;
  color: ${(props) => props.theme.colorTextDefault};
  font-size: 18px;
  border: 5px solid #ccc;
  border-radius: 2rem;
  font-weight: 700;
  margin-inline: 15rem;

  &:hover {
    background-color: rgba(123, 74, 226, 0.5);
    border: 5px solid #7b4ae2;
    color: ${(props) => props.theme.colorTextDefault};
  }

  @media (max-width: 600px) {
    border: 2px solid #ccc;
    width: 5.5rem;
    height: 1.5rem;
  }
`;

export const ContainerCompanies = styled.div`
  width: 125px;
  height: 150px;
  cursor: pointer;
`;

export const ContainerInfoMobile = styled.div`
  display: flex;
  justify-content: center;
`;

export const TitleMobile = styled.h1`
  font-size: 22px;
  margin-bottom: 0;
  text-align: center;
`;

export const SubtitleMobile = styled.h2`
  font-size: 18px;
  opacity: 0.5;
  margin: 0;

  text-align: center;
`;

export const TextMobile = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.colorTextDefault};
  font-weight: 600;
`;

export const ContainerInfo = styled(Row)`
  display: flex;
  align-items: center;
  height: 25rem;
  margin-inline: 5%;
  //background-color: rgba(240, 255, 255, 0.5);
  background-color: rgba(123, 74, 226, 0.5);
`;

export const Company = styled.p`
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  margin-bottom: 0;
`;

export const DateCompany = styled.p`
  text-align: center;
  color: ${(props) => props.theme.primaryColor};
  margin-top: 0;
`;
