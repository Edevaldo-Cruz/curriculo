import { useState } from "react";
import Slider from "react-slick";
import PhotoSS from "../../Asset/ss.png";
import PhotoExercito from "../../Asset/exercito.png";
import PhotoDossie from "../../Asset/dossie.jpg";
import PhotoSandra from "../../Asset/contabilidade.png";
import PhotoIndica from "../../Asset/indica.webp";
import { useRef } from "react";

import {
  Container,
  ContainerTitle,
  ContainerCompanies,
  Title,
  HighlightedText,
  Text,
  Btn,
  ContainerInfo,
  TitleMobile,
  SubtitleMobile,
  TextMobile,
} from "./styles";
import { Row, Col } from "antd";

export default function Career({ mobileScreen }) {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  const VALUE_TEXTS = [
    <>
      {mobileScreen === true ? (
        <ContainerInfo>
          <div>
            <TitleMobile>Dev Junior Full stack</TitleMobile>
            <SubtitleMobile style={{ marginInline: "3%" }}>
              SS Business
            </SubtitleMobile>
            <TextMobile>
              Eu sou responsável pelo desenvolvimento FullStack de aplicações
              web. No back-end, trabalho com Framework ASP.NET, EFCore,
              arquitetura MVC, SQL Server, WebAPI, REST. Já no front-end,
              utilizo React, Razor, HTML, CSS, Javascript, Bootstrap,
              DevExpress, JQuery e AJAX.
              <br />
              <br />
              Entre as minhas atividades, estão a implementação de novas
              funcionalidades, identificação e correção de bugs, manipulação de
              bancos de dados, criação de designs UX funcionais e aplicação de
              conceitos de metodologias ágeis como Scrum e Kanban, Clean Code e
              Clean Architecture. Tudo isso com o objetivo de desenvolver
              soluções que atendam às necessidades dos usuários e da empresa,
              mantendo sempre a qualidade do código e da arquitetura do sistema.
            </TextMobile>
          </div>
        </ContainerInfo>
      ) : (
        <Row style={{ marginInline: "5%" }}>
          <Col span={6}>
            <img src={PhotoSS} width={"350px"} height={"350px"} alt="logo SS" />
          </Col>
          <Col span={18}>
            <h1>Dev Junior Full stack</h1>
            <h2 style={{ marginInline: "3%" }}>SS Business</h2>

            <Text>
              Eu sou responsável pelo desenvolvimento FullStack de aplicações
              web. No back-end, trabalho com Framework ASP.NET, EFCore,
              arquitetura MVC, SQL Server, WebAPI, REST. Já no front-end,
              utilizo React, Razor, HTML, CSS, Javascript, Bootstrap,
              DevExpress, JQuery e AJAX.
              <br />
              <br /> Entre as minhas atividades, estão a implementação de novas
              funcionalidades, identificação e correção de bugs, manipulação de
              bancos de dados, criação de designs UX funcionais e aplicação de
              conceitos de metodologias ágeis como Scrum e Kanban, Clean Code e
              Clean Architecture. Tudo isso com o objetivo de desenvolver
              soluções que atendam às necessidades dos usuários e da empresa,
              mantendo sempre a qualidade do código e da arquitetura do sistema.
            </Text>
          </Col>
        </Row>
      )}
    </>,
    <>
      {mobileScreen === true ? (
        <ContainerInfo>
          <div>
            <TitleMobile>Dev Junior Full stack</TitleMobile>
            <SubtitleMobile style={{ marginInline: "3%" }}>
              Exército Brasileiro
            </SubtitleMobile>
            <TextMobile>
              Na posição de 3° Sargento e desempenhei diversas funções de
              liderança e coordenação. Como responsável por uma unidade militar,
              era minha tarefa garantir que todas as atividades fossem
              realizadas em conformidade com as diretrizes e orientações
              recebidas do Comando. Dentre as minhas principais
              responsabilidades, destaca-se a elaboração e controle das notas de
              empenho, documentos que registram as despesas realizadas pela
              unidade militar. Além disso, monitorava as notas de crédito e os
              indicadores de desempenho do setor de Aquisições, visando avaliar
              o desempenho da equipe e assegurar que os objetivos fossem
              alcançados. Outra importante função era prestar apoio ao setor de
              Licitação e ao setor de Contratos, ajudando a identificar as
              necessidades da unidade militar em termos de aquisições de
              materiais e serviços, e colaborando na elaboração de editais e
              contratos. Em síntese, como 3° Sargento no Exército, eu exercia
              atividades de liderança e coordenação, elaborando e controlando
              notas de empenho, acompanhando as notas de crédito e os
              indicadores de desempenho do setor de Aquisições, e oferecendo
              apoio ao setor de Licitação e ao setor de Contratos. Era um
              trabalho desafiador e de grande importância para o bom
              funcionamento da unidade militar.
            </TextMobile>
          </div>
        </ContainerInfo>
      ) : (
        <Row>
          <Col span={6}>
            <img src={PhotoSS} width={"350px"} height={"350px"} alt="logo SS" />
          </Col>
          <Col span={18}>
            <h1>3° Sargento técnico de Contabilidade</h1>
            <h2 style={{ marginInline: "3%" }}>Exército Brasileiro</h2>

            <Text>
              Na posição de 3° Sargento e desempenhei diversas funções de
              liderança e coordenação. Como responsável por uma unidade militar,
              era minha tarefa garantir que todas as atividades fossem
              realizadas em conformidade com as diretrizes e orientações
              recebidas do Comando. Dentre as minhas principais
              responsabilidades, destaca-se a elaboração e controle das notas de
              empenho, documentos que registram as despesas realizadas pela
              unidade militar. Além disso, monitorava as notas de crédito e os
              indicadores de desempenho do setor de Aquisições, visando avaliar
              o desempenho da equipe e assegurar que os objetivos fossem
              alcançados. Outra importante função era prestar apoio ao setor de
              Licitação e ao setor de Contratos, ajudando a identificar as
              necessidades da unidade militar em termos de aquisições de
              materiais e serviços, e colaborando na elaboração de editais e
              contratos. Em síntese, como 3° Sargento no Exército, eu exercia
              atividades de liderança e coordenação, elaborando e controlando
              notas de empenho, acompanhando as notas de crédito e os
              indicadores de desempenho do setor de Aquisições, e oferecendo
              apoio ao setor de Licitação e ao setor de Contratos. Era um
              trabalho desafiador e de grande importância para o bom
              funcionamento da unidade militar.
            </Text>
          </Col>
        </Row>
      )}
    </>,
    <>
      <Row>
        <Col span={4}>
          <img
            src={PhotoDossie}
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
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.{" "}
          </Text>
        </Col>
      </Row>
    </>,
    "Novo marco em 2015",
    "Novo ano de referência em 2019",
    "Evento especial em 17 de junho de 2019",
    "Mais uma conquista em agosto de 2019",
  ];
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
          slidesToShow: 2,
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
          height: "5rem",
          borderBottom: "5px dotted #ccc",
          marginBottom: "6rem",
          marginInline: "10%",
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
                SS Business
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                05/22
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
                  marginBottom: "0",
                }}
              >
                Exército Brasileiro
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                02/17-01/22
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
                  marginBottom: "0",
                }}
              >
                Dossiê Sistemas
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                06/15-02/17
              </p>
            </ContainerCompanies>
          </div>
          <div>
            <ContainerCompanies onClick={() => handleIndexClick(3)}>
              <img
                src={PhotoSandra}
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
                Contabilidade Sandra Sant'anna
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                01/14-06/15
              </p>
            </ContainerCompanies>
          </div>
          <div>
            <ContainerCompanies
              onClick={() => handleIndexClick(4)}
              style={{
                width: "175px",
                paddingTop: "25px",
              }}
            >
              <img
                src={PhotoIndica}
                width={"150px"}
                height={"50px"}
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
                Indica Assessoria Empresarial
              </p>
              <p style={{ textAlign: "center", color: "#FFF", marginTop: "0" }}>
                01/13-01/14
              </p>
            </ContainerCompanies>
          </div>
        </Slider>
      </div>
      <Text>{VALUE_TEXTS[value]}</Text>
    </Container>
  );
}
