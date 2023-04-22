import { Row } from "antd";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
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

export const Text = styled.p`
  width: 80%;
  text-align: start;
  font-size: 20px;
  color: #ccc;
  margin: 0 0 0 35px;
  margin-bottom: 0.8rem;
`;
