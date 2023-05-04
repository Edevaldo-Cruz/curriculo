import styled from "styled-components";
import { Col, Row } from "antd";
import photo from "../../Asset/foto.png";

export const Container = styled(Row)`
  width: 100%;
  height: 60vh;
  padding: 5% 10%;
  z-index: 1;
`;

export const ContainerMobile = styled.div`
  width: 100%;
  z-index: 1;
`;

export const ContainerPhoto = styled(Col)`
  padding: auto;
  border-radius: 1rem;
  width: 50%;
  height: 60vh;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  border-radius: 50%;
`;

export const ContainerPhotoMobile = styled.div`
  width: 85%;
  height: 55vh;
  background-image: url(${photo});
  background-size: cover;
  background-position: center;
  /* border-radius: 50%; */
  margin: 0 25px;
`;

export const ContainerContents = styled(Col)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60vh;
`;

export const ContainerContentsMobile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ContainerTitle = styled.div`
  width: 12rem;
  height: 1.8rem;
  padding-left: 10px;
  margin-left: 10px;
  background-color: rgba(123, 74, 226, 0.4);
  border-radius: 0.3rem;

  /* @media (max-width: 600px) {
    margin-top: 8rem;
  } */
`;

export const Title = styled.p`
  text-align: start;
  font-size: 20px;
  color: #7b4ae2;
  font-weight: 600;
`;

export const Name = styled.p`
  text-align: start;
  font-size: 46px;
  color: #fff;
  font-weight: 900;
  margin: 0 0 0 35px;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    font-size: 26px;
    margin: 1rem;
  }
`;

export const Text = styled.p`
  text-align: start;
  font-size: 18px;
  color: #ccc;
  margin: 0 0 0 35px;
  margin-bottom: 0.8rem;

  @media (max-width: 600px) {
    width: 85%;
    margin-left: "auto";
    margin-right: "auto";
  }
`;
