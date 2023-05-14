import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  z-index: 1;
  padding-block: 8%;
`;

export const Contents = styled.div`
  margin-inline: 3%;
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
  color: ${(props) => props.theme.primaryColor};
  font-weight: 900;
  margin: 1rem 0 2rem 35px;

  @media (max-width: 600px) {
    font-size: 26px;
    margin: 0.2rem 0.5rem;
    margin-bottom: 0.5rem;
  }
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  height: 11.5rem;
  font-size: 18px;
  color: ${(props) => props.theme.primaryColor};
  margin-inline: 1.8rem;
  margin-block: 0 1rem;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 12px;
    height: 6rem;
  }
`;

export const ContainerCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const CardJob = styled.div`
  width: 20rem;
  height: 30rem;
  border: 5px solid #ccc;
  border-radius: 1rem;
  padding-block: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(123, 74, 226, 0.1);
    border: 7px solid #7b4ae2;
  }

  @media (max-width: 600px) {
    width: 80%;
    height: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TitleCard = styled.p`
  text-align: start;
  font-size: 16px;
  color: ${(props) => props.theme.primaryColor};
  font-weight: 900;
  margin: 0 0 0 35px;
  margin-bottom: 1rem;

  @media (max-width: 600px) {
    margin-bottom: 0.8rem;
  }
`;

export const ContainerType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 2rem;
  padding-inline: 10px;
  background-color: rgba(123, 74, 226, 0.4);
  border-radius: 0.3rem;

  @media (max-width: 600px) {
    margin-bottom: 0.8rem;
  }
`;

export const Type = styled.p`
  text-align: center;
  font-size: 16px;
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
  margin-left: 2rem;
  padding-inline: 10px;
  background-color: rgba(74, 226, 144, 0.4);
  border-radius: 0.3rem;

  @media (max-width: 600px) {
    margin-bottom: 0.8rem;
  }
`;

export const Online = styled.p`
  text-align: center;
  font-size: 16px;
  color: #4ae290;
  font-weight: 600;
  margin: 0;

  @media (max-width: 600px) {
    font-size: 14px;
    color: #ccc;
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
