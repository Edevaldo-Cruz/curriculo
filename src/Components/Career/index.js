import { useState } from "react";
import Slider from "react-slick";
import PhotoSS from "../../Asset/ss.png";
import PhotoExercito from "../../Asset/exercito.png";
import PhotoDossie from "../../Asset/dossie.jpg";
import PhotoSandra from "../../Asset/contabilidade.png";
import PhotoIndica from "../../Asset/indica.webp";
import { IoIosBusiness } from "react-icons/io";
import {
  Container,
  ContainerTitle,
  ContainerCompanies,
  Title,
  HighlightedText,
  Text,
  ContainerInfoMobile,
  TitleMobile,
  SubtitleMobile,
  TextMobile,
  ContainerInfo,
  Company,
  DateCompany,
} from "./styles";
import { Col } from "antd";

export default function Career({ mobileScreen }) {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);

  const Info = [
    {
      title: "Dev Junior Full stack",
      subtitle: "SS Business",
      text: "Eu sou responsável pelo desenvolvimento FullStack de aplicações web. No back-end, trabalho com Framework ASP.NET, EFCore, arquitetura MVC, SQL Server, WebAPI, REST. Já no front-end, utilizo React, Razor, HTML, CSS, Javascript, Bootstrap. \n \n Entre as minhas atividades, estão a implementação de novas funcionalidades, identificação e correção de bugs, manipulação de bancos de dados, criação de designs UX funcionais. Tudo isso com o objetivo de desenvolver soluções que atendam às necessidades dos usuários e da empresa, mantendo sempre a qualidade do código e da arquitetura do sistema.",
    },
    {
      title: "3° Sargento técnico de Contabilidade",
      subtitle: "Exército Brasileiro",
      text: "Na posição de 3° Sargento e desempenhei diversas funções de liderança e coordenação. Dentre as minhas principais responsabilidades, destaca-se a elaboração e controle das notas de empenho, documentos que registram as despesas realizadas pela unidade militar. Além disso, monitorava as notas de crédito e os indicadores de desempenho do setor de Aquisições. Outra importante função era prestar apoio ao setor de Licitação e ao setor de Contratos. Em síntese, como 3° Sargento no Exército, eu exercia atividades de liderança e coordenação, elaborando e controlando notas de empenho, acompanhando as notas de crédito e oferecendo apoio ao setor de Licitação e ao setor de Contratos. Era um trabalho desafiador e de grande importância para o bom funcionamento das unidades militares.",
    },
    {
      title: "Suporte Técnico",
      subtitle: "Dossie Sistema",
      text: "Na Dossiê Sistemas, eu exercia a função de fornecer assistência técnica remota e por telefone aos programas contábeis, fiscais e de departamento pessoal utilizados pelos clientes. Durante meu trabalho, gerava relatórios acerca dos erros encontrados nos programas e sugestões de melhorias. Também realizava testes nas correções de erros e na implantação de novas funcionalidades para assegurar a qualidade e eficiência dos sistemas utilizados pelos clientes. Essas atividades tinham como propósito garantir o adequado funcionamento dos sistemas e a satisfação dos clientes da empresa.",
    },
    {
      title: "Auxiliar Contabil",
      subtitle: "Escritório de Contabilidade Sandra Sant'anna",
      text: "Na empresa Contabilidade Sandra Sant'anna, eu era responsável por realizar a organização e escrituração dos documentos na sua respectiva classificação contábil. Além disso, eu realizava a conciliação bancária, emitia o Balancete, Balanço e DRE, fazia o encerramento do exercício, lançava notas fiscais e realizava a apuração e emissão de guias de impostos municipais, estaduais e federais. Essas atividades eram executadas com o objetivo de garantir a correta contabilização das informações financeiras e fiscais dos clientes da empresa, bem como cumprir com as obrigações legais e tributárias.",
    },
    {
      title: "Estagio Contabilidade",
      subtitle: "Indica Assesoria Empresarial",
      text: "Durante o meu estágio na empresa Indica, eu era responsável por realizar a organização e escrituração dos documentos de acordo com a sua respectiva classificação contábil. Além disso, eu realizava a conciliação bancária para garantir a correta conciliação entre as movimentações financeiras da empresa e as informações registradas nos extratos bancários. Essas atividades eram executadas com o objetivo de garantir a organização e correta contabilização das informações financeiras da empresa, bem como o correto fluxo de caixa e a identificação de possíveis erros ou inconsistências nas movimentações bancárias.",
    },
  ];

  const VALUE_TEXTS = [
    <>
      {mobileScreen === true ? (
        <ContainerInfoMobile>
          <div>
            <TitleMobile>{Info[0].title}</TitleMobile>
            <SubtitleMobile>{Info[0].subtitle}</SubtitleMobile>
            <TextMobile>{Info[0].text}</TextMobile>
          </div>
        </ContainerInfoMobile>
      ) : (
        <ContainerInfo>
          <Col span={6}>
            <img src={PhotoSS} width={"350px"} height={"350px"} alt="logo SS" />
          </Col>
          <Col span={18}>
            <h1>{Info[0].title}</h1>
            <h2 style={{ marginInline: "3%" }}>{Info[0].subtitle}</h2>
            <Text>{Info[0].text}</Text>
          </Col>
        </ContainerInfo>
      )}
    </>,
    <>
      {mobileScreen === true ? (
        <ContainerInfoMobile>
          <div>
            <TitleMobile>{Info[1].title}</TitleMobile>
            <SubtitleMobile>{Info[1].subtitle}</SubtitleMobile>
            <TextMobile>{Info[1].text}</TextMobile>
          </div>
        </ContainerInfoMobile>
      ) : (
        <ContainerInfo>
          <Col span={6}>
            <img
              src={PhotoExercito}
              width={"350px"}
              height={"350px"}
              alt="logo SS"
            />
          </Col>
          <Col span={18}>
            <h1>{Info[1].title}</h1>
            <h2 style={{ marginInline: "3%" }}>{Info[1].subtitle}</h2>
            <Text>{Info[1].text}</Text>
          </Col>
        </ContainerInfo>
      )}
    </>,
    <>
      {mobileScreen === true ? (
        <ContainerInfoMobile>
          <div>
            <TitleMobile>{Info[2].title}</TitleMobile>
            <SubtitleMobile>{Info[2].subtitle}</SubtitleMobile>
            <TextMobile>{Info[2].text}</TextMobile>
          </div>
        </ContainerInfoMobile>
      ) : (
        <ContainerInfo>
          <Col span={6} style={{ display: "flex", justifyContent: "center" }}>
            {/* <img
              src={PhotoDossie}
              width={"350px"}
              height={"350px"}
              alt="logo SS"
            /> */}
            <IoIosBusiness size={250} />
          </Col>
          <Col span={18}>
            <h1>{Info[2].title}</h1>
            <h2 style={{ marginInline: "3%" }}>{Info[2].subtitle}</h2>
            <Text>{Info[2].text}</Text>
          </Col>
        </ContainerInfo>
      )}
    </>,
    <>
      {mobileScreen === true ? (
        <ContainerInfoMobile>
          <div>
            <TitleMobile>{Info[3].title}</TitleMobile>
            <SubtitleMobile>{Info[3].subtitle}</SubtitleMobile>
            <TextMobile>{Info[3].text}</TextMobile>
          </div>
        </ContainerInfoMobile>
      ) : (
        <ContainerInfo>
          <Col span={6}>
            <img
              src={PhotoSandra}
              width={"350px"}
              height={"350px"}
              alt="logo SS"
            />
          </Col>
          <Col span={18}>
            <h1>{Info[3].title}</h1>
            <h2 style={{ marginInline: "3%" }}>{Info[3].subtitle}</h2>
            <Text>{Info[3].text}</Text>
          </Col>
        </ContainerInfo>
      )}
    </>,
    <>
      {mobileScreen === true ? (
        <ContainerInfoMobile>
          <div>
            <TitleMobile>{Info[4].title}</TitleMobile>
            <SubtitleMobile>{Info[4].subtitle}</SubtitleMobile>
            <TextMobile>{Info[4].text}</TextMobile>
          </div>
        </ContainerInfoMobile>
      ) : (
        <ContainerInfo>
          <Col
            span={6}
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <img
              src={PhotoIndica}
              width={"350px"}
              height={"150px"}
              alt="logo SS"
            />
          </Col>
          <Col span={18}>
            <h1>{Info[4].title}</h1>
            <h2 style={{ marginInline: "3%" }}>{Info[4].subtitle}</h2>
            <Text>{Info[4].text}</Text>
          </Col>
        </ContainerInfo>
      )}
    </>,
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
              <Company>SS Business</Company>
              <DateCompany>05/22</DateCompany>
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
              <Company>Exército Brasileiro</Company>
              <DateCompany>02/17-01/22</DateCompany>
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
              <Company>Dossiê Sistemas</Company>
              <DateCompany>06/15-02/17</DateCompany>
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
              <Company>Contabilidade Sandra Sant'anna</Company>
              <DateCompany>01/14-06/15</DateCompany>
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
              <div style={{ backgroundColor: "red" }}>
                <img
                  src={PhotoIndica}
                  width={"150px"}
                  height={"50px"}
                  alt="logo SS"
                  style={{ marginInline: "auto" }}
                />
              </div>

              <Company>Indica Assessoria Empresarial</Company>
              <DateCompany>01/13-01/14</DateCompany>
            </ContainerCompanies>
          </div>
        </Slider>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Text>{VALUE_TEXTS[value]}</Text>
      </div>
    </Container>
  );
}
