import styled from "styled-components";
import img from "../../Asset/image.png";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1;
  padding-block: 8%;
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
  margin: 0 0 0 35px;
  margin-bottom: 0.8rem;
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
`;

export const ContainerType = styled.div`
  width: 5rem;
  margin-left: 2rem;
  margin-block: 1rem;
  padding-inline: 10px;
  background-color: rgba(123, 74, 226, 0.4);
  border-radius: 0.3rem;
`;

export const Type = styled.p`
  text-align: center;
  font-size: 20px;
  color: #7b4ae2;
  font-weight: 600;
  margin: 0;
`;

export const ContainerOnline = styled.div`
  width: 5rem;
  margin-left: 2rem;
  margin-block: 1rem;
  padding-inline: 10px;
  background-color: rgba(74, 226, 144, 0.4);
  border-radius: 0.3rem;
`;

export const Online = styled.p`
  text-align: center;
  font-size: 20px;
  color: #4ae290;
  font-weight: 600;
  margin: 0;
`;

export const BtnFilter = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 8rem;
  height: 3rem;
  margin-top: 2rem;
  color: #ccc;
  font-size: 25px;
  border: 5px solid #ccc;
  border-radius: 2rem;
  font-weight: 700;

  &:hover {
    background-color: rgba(123, 74, 226, 0.5);
    border: 5px solid #7b4ae2;
    color: #7b4ae2;
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
`;
