import { useState } from "react";
import Slider from "react-slick";
import PhotoSS from "../../Asset/ss.png";
import PhotoExercito from "../../Asset/exercito.png";
import PhotoDossie from "../../Asset/dossie.jpg";
import { useRef } from "react";

import {
  Container,
  ContainerTitle,
  ContainerCompanies,
  Title,
  HighlightedText,
  Text,
  Btn,
} from "./styles";
import { Row, Col } from "antd";

const VALUE_TEXTS = [
  <>
    <Row>
      <Col span={6}>
        <img src={PhotoSS} width={"350px"} height={"350px"} alt="logo SS" />
      </Col>
      <Col span={18}>
        <h1>Dev Junior Full stack</h1>
        <h2 style={{ marginInline: "3%" }}>SS Soluções</h2>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.{" "}
        </Text>
      </Col>
    </Row>
  </>,
  <>
    <Row>
      <Col span={4}>
        <img
          src={PhotoExercito}
          width={"220px"}
          height={"350px"}
          alt="logo SS"
        />
      </Col>
      <Col span={18}>
        <h1>3º Sargento Tec. Contabilidade</h1>
        <h2 style={{ marginInline: "3%" }}>Exercito Brasileiro</h2>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.{" "}
        </Text>
      </Col>
    </Row>
  </>,
  <>
    <Row>
      <Col span={4}>
        <img src={PhotoDossie} width={"220px"} height={"350px"} alt="logo SS" />
      </Col>
      <Col span={18}>
        <h1>3º Sargento Tec. Contabilidade</h1>
        <h2 style={{ marginInline: "3%" }}>Exercito Brasileiro</h2>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.{" "}
        </Text>
      </Col>
    </Row>
  </>,
  "Novo marco em 2015",
  "Novo ano de referência em 2019",
  "Evento especial em 17 de junho de 2019",
  "Mais uma conquista em agosto de 2019",
];

export default function Career() {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
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

  const handleIndexClick = (index) => {
    setValue(index);
    setPrevious(value);
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Carreira</Title>
      </ContainerTitle>
      <HighlightedText>Trajetória até aqui</HighlightedText>

      <div
        style={{
          width: "100%",
          height: "5rem",
          borderBottom: "5px solid #ccc",
          marginBottom: "6rem",
        }}
      >
        <Slider {...settings}>
          <div>
            <ContainerCompanies onClick={() => handleIndexClick(0)}>
              <img
                src={PhotoSS}
                width={"75px"}
                height={"75px"}
                alt="logo SS"
                style={{ marginInline: "auto" }}
              />
              <p
                style={{
                  textAlign: "center",
                  color: "#FFF",
                  marginBottom: "0",
                }}
              >
                SS Soluções
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                Maio/2022
              </p>
            </ContainerCompanies>
          </div>
          <div>
            <ContainerCompanies onClick={() => handleIndexClick(1)}>
              <img
                src={PhotoExercito}
                width={"75px"}
                height={"75px"}
                alt="logo SS"
                style={{ marginInline: "auto" }}
              />
              <p
                style={{
                  textAlign: "center",
                  color: "#FFF",
                  marginTop: "5px",
                  marginBottom: "0",
                }}
              >
                Exército Brasileiro
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                Fev/2017 Jan/2022
              </p>
            </ContainerCompanies>
          </div>
          <div>
            <ContainerCompanies onClick={() => handleIndexClick(2)}>
              <img
                src={PhotoDossie}
                width={"75px"}
                height={"75px"}
                alt="logo SS"
                style={{ marginInline: "auto" }}
              />
              <p
                style={{
                  textAlign: "center",
                  color: "#FFF",
                  marginTop: "5px",
                  marginBottom: "0",
                }}
              >
                Dossiê Sistemas
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                Fev/2017 Jan/2022
              </p>
            </ContainerCompanies>
          </div>
          <div>
            <Btn onClick={() => handleIndexClick(3)}>Novo marco 2015</Btn>
          </div>
          <div>
            <Btn onClick={() => handleIndexClick(4)}>
              Ano de referência 2019
            </Btn>
          </div>
          <div>
            <Btn onClick={() => handleIndexClick(5)}>
              Evento especial 17/06/2019
            </Btn>
          </div>
          <Btn onClick={() => handleIndexClick(6)}>Conquista agosto/2019</Btn>
          {/* </div> */}
        </Slider>
      </div>
      <Text>{VALUE_TEXTS[value]}</Text>
    </Container>
  );
}
