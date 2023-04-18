import styled from "styled-components";
import { Anchor, Col, Row } from "antd";

export const Container = styled(Row)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 8rem;
  background-color: #1e1e1e;
  padding-inline: 5rem;
  border-bottom: 2px solid #fff;
  z-index: 9999;
`;

export const ContainerLogo = styled(Col)`
  display: flex;
  justify-content: start;
  width: 50%;

  //background-color: blue;
`;

export const ContainerAnchor = styled(Col)`
  display: flex;
  justify-content: end;
  width: 50%;
`;

export const StyledAnchor = styled(Anchor)`
  &.ant-anchor-link-active > .ant-anchor-link-title {
    color: red;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const TextLink = styled.span`
  color: #fff;
  font-weight: 700;
  font-size: 20px;
`;
