import styled from "styled-components";
import img from "../../Asset/image.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  padding-block: 8%;

  @media (max-width: 600px) {
    margin: 195vw 0;
  }
`;

export const Contents = styled.div`
  margin-inline: 10%;
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

export const Subtitle = styled.p`
  text-align: start;
  font-size: 46px;
  color: #fff;
  font-weight: 900;
  margin: 1rem 0 2rem 35px;
`;

export const Text = styled.p`
  text-align: start;
  font-size: 18px;
  color: #fff;
  margin-inline: 1.8rem;
  margin-block: 1rem;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardJob = styled.div`
  width: 20rem;
  height: 25rem;
  border: 5px solid #ccc;
  border-radius: 1rem;
  padding-block: 1.5rem;

  &:hover {
    background-color: rgba(123, 74, 226, 0.5);
    border: 5px solid #7b4ae2;
  }

  @media (max-width: 600px) {
    width: 85%;
    height: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TitleCard = styled.p`
  text-align: start;
  font-size: 16px;
  color: #fff;
  font-weight: 900;
  margin: 0 0 0 35px;
  margin-bottom: 1rem;
`;

export const Image = styled.div`
  width: 18rem;
  height: 14rem;
  margin-inline: auto;
  border-radius: 1rem;
  background-image: url(${img});
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    width: 12rem;
    height: 10rem;
  }
`;

export const ContainerType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  margin-left: 2rem;
  margin-block: 1rem;
  padding-inline: 10px;
  background-color: rgba(123, 74, 226, 0.4);
  border-radius: 0.3rem;

  @media (max-width: 600px) {
    width: 3rem;
  }
`;

export const Type = styled.p`
  text-align: center;
  font-size: 20px;
  color: #7b4ae2;
  font-weight: 600;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 14px;
    color: #ccc;
  }
`;

export const ContainerOnline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  margin-left: 2rem;
  margin-block: 1rem;
  padding-inline: 10px;
  background-color: rgba(74, 226, 144, 0.4);
  border-radius: 0.3rem;

  @media (max-width: 600px) {
    width: 3rem;
  }
`;

export const Online = styled.p`
  text-align: center;
  font-size: 20px;
  color: #4ae290;
  font-weight: 600;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 14px;
    color: #ccc;
  }
`;

export const BtnFilter = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 6rem;
  height: 1.5rem;
  margin-top: 2rem;
  color: #ccc;
  font-size: 18px;
  border: 5px solid #ccc;
  border-radius: 2rem;
  font-weight: 700;

  &:hover {
    background-color: rgba(123, 74, 226, 0.5);
    border: 5px solid #7b4ae2;
    color: #ccc;
  }

  @media (max-width: 600px) {
    border: 2px solid #ccc;
    width: 5.5rem;
    height: 1.5rem;
  }
`;

export const LinkGitHub = styled.a`
  display: flex;
  justify-content: end;
  color: #7b4ae2;
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-right: 5px;
  font-weight: 700;

  &:hover {
    color: #ccc;
  }

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
