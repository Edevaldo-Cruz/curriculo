import {
  BsLinkedin,
  BsGithub,
  BsDownload,
  BsWhatsapp,
  BsDisplay,
} from "react-icons/bs";
import { SiMicrosoftsqlserver } from "react-icons/si";
import Slider from "react-slick";
import lottie from "lottie-web";
import animationData from "../../Asset/63487-programming-computer.json";
import { RiReactjsLine, RiGithubLine } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandFigma,
} from "react-icons/tb";
import { SiCsharp } from "react-icons/si";
import { Col, Row } from "antd";
import {
  Container,
  ContainerSalutation,
  ContainerPhoto,
  ContainerBtn,
  Text,
  HighlightedText,
  SubText,
  SocialNetwork,
  BtnSocial,
  LinkCurriculum,
  BtnWhatsapp,
  ContainerCard,
  ProfessionCard,
  TitleCardProfession,
} from "./styles";
import { useEffect } from "react";

export function Home() {
  const settings = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 500,
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

  useEffect(() => {
    const container = document.getElementById("animation-container");
    lottie.loadAnimation({
      container: container, // Elemento HTML onde a animação será renderizada
      renderer: "svg", // Tipo de renderização (pode ser svg, canvas, html)
      loop: true, // Define se a animação deve ser executada em loop
      autoplay: true, // Define se a animação deve ser executada automaticamente ao carregar
      animationData: animationData, // Dados da animação (arquivo JSON importado)
    });
  }, []);

  return (
    <Container>
      <ContainerSalutation span={6}>
        <Text>Ola, meu nome é </Text>
        <HighlightedText>Edevaldo</HighlightedText>
        <SubText>Full Stack Developer C# React</SubText>
        <SocialNetwork>
          <BtnSocial
            href="https://www.linkedin.com/in/edevaldo-cruz-8586a8a4/"
            target="_blank"
          >
            <BsLinkedin
              size={25}
              color={"#CCC"}
              style={{ marginRight: "1rem" }}
            />
          </BtnSocial>
          <BtnSocial href="https://github.com/Edevaldo-Cruz" target="_blank">
            <BsGithub size={25} color={"#CCC"} />
          </BtnSocial>
        </SocialNetwork>
      </ContainerSalutation>
      <ContainerPhoto span={12}>
        {/* <div id="animation-container"></div> */}
      </ContainerPhoto>
      <ContainerBtn span={6}>
        <LinkCurriculum href="https://1drv.ms/b/s!AtWvlvg_BPqhlNdJIECkJIiKiAxd-A?e=X2EA3G">
          Curriculo
          <BsDownload size={25} style={{ marginLeft: "10px" }} />
        </LinkCurriculum>
        <Row>
          <BtnWhatsapp href="https://wa.me/32988634755?text=Oii,%20acabei%20de%20ver%20seu%20portfólio,%20pode%20conversar?">
            <BsWhatsapp />
            Vamos conversar
          </BtnWhatsapp>
        </Row>
      </ContainerBtn>
      <HighlightedText>Tecnologias e habilidades</HighlightedText>

      <ContainerCard>
        <Slider {...settings}>
          <div>
            <ProfessionCard>
              <TbBrandJavascript size={70} color={"#ccc"} />
              <TitleCardProfession>Javascript</TitleCardProfession>
            </ProfessionCard>
          </div>
          <div>
            <ProfessionCard>
              <RiReactjsLine size={70} color={"#ccc"} />
              <TitleCardProfession>React/React Native</TitleCardProfession>
            </ProfessionCard>
          </div>

          <div>
            <ProfessionCard>
              <SiCsharp size={70} color={"#ccc"} />
              <TitleCardProfession>C#</TitleCardProfession>
            </ProfessionCard>
          </div>
          <div>
            <ProfessionCard>
              <SiMicrosoftsqlserver size={70} color={"#ccc"} />
              <TitleCardProfession>SQL Server</TitleCardProfession>
            </ProfessionCard>
          </div>
          <div>
            <ProfessionCard>
              <TbBrandHtml5 size={70} color={"#ccc"} />
              <TitleCardProfession>HTML</TitleCardProfession>
            </ProfessionCard>
          </div>
          <div>
            <ProfessionCard>
              <TbBrandCss3 size={70} color={"#ccc"} />
              <TitleCardProfession>CSS</TitleCardProfession>
            </ProfessionCard>
          </div>
          <div>
            <ProfessionCard>
              <TbBrandFigma size={70} color={"#ccc"} />
              <TitleCardProfession>Figma</TitleCardProfession>
            </ProfessionCard>
          </div>
          <div>
            <ProfessionCard>
              <BsGit size={70} color={"#ccc"} />
              <TitleCardProfession>Git</TitleCardProfession>
            </ProfessionCard>
          </div>
          <div>
            <ProfessionCard>
              <RiGithubLine size={70} color={"#ccc"} />
              <TitleCardProfession>GitHub</TitleCardProfession>
            </ProfessionCard>
          </div>
        </Slider>
      </ContainerCard>
    </Container>
  );
}
