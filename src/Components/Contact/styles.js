import styled from "styled-components";

export const Container = styled.div`
  padding-inline: 10%;
  z-index: 1;
  padding-block: 8%;
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
  width: 50rem;
  font-size: 56px;
  color: #ffffff;
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 2rem;
  text-align: start;
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
`;

export const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
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
  color: #ccc;
  margin: 0 0 0 35px;
  margin-bottom: 0.8rem;
`;
