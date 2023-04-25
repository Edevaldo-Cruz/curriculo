import { Col, Row } from "antd";
import Slider from "react-slick";
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

export default function Portifolio({ mobileScreen }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    adaptiveHeight: true,
    variableWidth: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],

    style: {
      maxWidth: "80vw",
    },
  };
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
          <Col span={18}>
            <Subtitle>Projetos</Subtitle>
          </Col>

          {mobileScreen === false ? (
            <Col span={6}>
              <Row>
                <BtnFilter>Filtro 1</BtnFilter>
                <BtnFilter>Filtro 2</BtnFilter>
                <BtnFilter>Filtro 3</BtnFilter>
              </Row>
            </Col>
          ) : (
            <div style={{ margin: "-55px 0 1rem 0" }}>
              <Row>
                <BtnFilter>Filtro 1</BtnFilter>
                <BtnFilter>Filtro 2</BtnFilter>
                <BtnFilter>Filtro 3</BtnFilter>
              </Row>
            </div>
          )}
        </Row>

        <ContainerCard>
          <Slider {...settings}>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
            <div>
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
            </div>
          </Slider>
        </ContainerCard>
        <LinkGitHub href="https://github.com/Edevaldo-Cruz">
          Veja todos meus projetos
          {mobileScreen === true ? (
            <BsArrowRightShort size={25} style={{ marginLeft: "10px" }} />
          ) : (
            <BsArrowRightShort size={45} style={{ marginLeft: "10px" }} />
          )}
        </LinkGitHub>
      </Contents>
    </Container>
  );
}
