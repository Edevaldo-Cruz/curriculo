import { Col, Row } from "antd";
import { BsArrowRightShort } from "react-icons/bs";
import {
  Container,
  Contents,
  ContainerTitle,
  Title,
  Subtitle,
  ContainerCard,
  CardJob,
  Text,
  Image,
  TitleCard,
  ContainerType,
  Type,
  ContainerOnline,
  Online,
  BtnFilter,
  LinkGitHub,
} from "./styles";

export default function Portifolio() {
  return (
    <Container>
      <Contents>
        <ContainerTitle>
          <Title>Portifólio</Title>
        </ContainerTitle>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col span={17}>
            <Subtitle>Projetos</Subtitle>
          </Col>
          <Col>
            <BtnFilter>Filtro 1</BtnFilter>
          </Col>
          <Col>
            <BtnFilter>Filtro 2</BtnFilter>
          </Col>
          <Col>
            <BtnFilter>Filtro 3</BtnFilter>
          </Col>
        </Row>

        <ContainerCard>
          <CardJob>
            <TitleCard>Titulo Projeto</TitleCard>
            <Row>
              <ContainerOnline>
                <Online>online</Online>
              </ContainerOnline>
              <ContainerType>
                <Type>React</Type>
              </ContainerType>
            </Row>
            <Text>
              Vestibulum feugiat nec sem ut venenatis. Vestibulum venenatis
              tellus aliquet convallis viverra.
            </Text>
            <Image />
          </CardJob>
          <CardJob>
            <TitleCard>Titulo Projeto</TitleCard>
            <Row>
              <ContainerOnline>
                <Online>online</Online>
              </ContainerOnline>
              <ContainerType>
                <Type>React</Type>
              </ContainerType>
            </Row>
            <Text>
              Vestibulum feugiat nec sem ut venenatis. Vestibulum venenatis
              tellus aliquet convallis viverra.
            </Text>
            <Image />
          </CardJob>
          <CardJob>
            <TitleCard>Titulo Projeto</TitleCard>
            <Row>
              <ContainerOnline>
                <Online>online</Online>
              </ContainerOnline>
              <ContainerType>
                <Type>React</Type>
              </ContainerType>
            </Row>
            <Text>
              Vestibulum feugiat nec sem ut venenatis. Vestibulum venenatis
              tellus aliquet convallis viverra.
            </Text>
            <Image />
          </CardJob>
          <CardJob>
            <TitleCard>Titulo Projeto</TitleCard>
            <Row>
              <ContainerOnline>
                <Online>online</Online>
              </ContainerOnline>
              <ContainerType>
                <Type>React</Type>
              </ContainerType>
            </Row>
            <Text>
              Vestibulum feugiat nec sem ut venenatis. Vestibulum venenatis
              tellus aliquet convallis viverra.
            </Text>
            <Image />
          </CardJob>
        </ContainerCard>
        <LinkGitHub href="https://github.com/Edevaldo-Cruz">
          Veja todos meus projetos
          <BsArrowRightShort size={45} style={{ marginLeft: "10px" }} />
        </LinkGitHub>
      </Contents>
    </Container>
  );
}
