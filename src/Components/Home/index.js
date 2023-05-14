import { useEffect } from "react";
import { Row } from "antd";
import Slider from "react-slick";
import lottie from "lottie-web";
import img from "../../Asset/63487-programming-computer.gif";
import animationData from "../../Asset/63487-programming-computer.json";
import { RiReactjsLine, RiGithubLine } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { BsDownload, BsWhatsapp } from "react-icons/bs";
import { SiCsharp } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandReactNative,
  TbBrandKotlin,
} from "react-icons/tb";
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
  ContainerPhotoMobile,
  ContainerSalutationMobile,
  ContainerBtnMobile,
  IconLinkedin,
  IconGitHub,
} from "./styles";

export default function Home({ mobileScreen }) {
  const settings = {
    autoplay: true,
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
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],

    style: {
      maxWidth: "80vw",
    },
  };

  const cards = [
    <div>
      <ProfessionCard>
        <TbBrandJavascript
          size={mobileScreen === true ? 35 : 70}
          color={"#ccc"}
        />
        <TitleCardProfession>Javascript</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <RiReactjsLine size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>React</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <SiCsharp size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>C#</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <SiMicrosoftsqlserver
          size={mobileScreen === true ? 35 : 70}
          color={"#ccc"}
        />
        <TitleCardProfession>SQL Server</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <TbBrandReactNative
          size={mobileScreen === true ? 35 : 70}
          color={"#ccc"}
        />
        <TitleCardProfession>React Native</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <TbBrandHtml5 size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>HTML</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <TbBrandCss3 size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>CSS</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <TbBrandFigma size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>Figma</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <BsGit size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>Git</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <RiGithubLine size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>GitHub</TitleCardProfession>
      </ProfessionCard>
    </div>,
    <div>
      <ProfessionCard>
        <TbBrandKotlin size={mobileScreen === true ? 35 : 70} color={"#ccc"} />
        <TitleCardProfession>Kotlin</TitleCardProfession>
      </ProfessionCard>
    </div>,
  ];

  const text = {
    salutation: "👋🏽Ola, meu nome é",
    name: "Edevaldo,",
    text: (
      <SubText>
        sou um desenvolvedor Full Stack com experiência em C# e React.
        <br />
        <br />
        Bem-vindo ao meu portfólio!
        <br />
        <br />
        Sinta-se à vontade para explorar e se desejar, estou aberto a conversar,
        ouvir suas opiniões e receber seu valioso feedback.
        <br />
        <br />
        Será um prazer tê-lo por aqui!😉
      </SubText>
    ),
    secondText: (
      <SubText>
        Não hesite em clicar nos links de WhatsApp e currículo para descobrir
        mais sobre mim e meu trabalho!
        <br />
        Estou animado para compartilhar minhas habilidades e experiências com
        você e ver como posso ajudar em seu próximo projeto.
        <br />
        <br />
        Não perca a oportunidade de se conectar e explorar como podemos
        trabalhar juntos
      </SubText>
    ),
    technologyAndSkillText:
      "Abaixo você encontrará uma lista de tecnologias com as quais trabalho diariamente, assim como outras com as quais desenvolvi projetos anteriormente.",
    link: (
      <>
        <LinkCurriculum href="https://1drv.ms/b/s!AtWvlvg_BPqhlNdJIECkJIiKiAxd-A?e=X2EA3G">
          Curriculo
          <BsDownload size={25} style={{ marginLeft: "10px" }} />
        </LinkCurriculum>
        <Row>
          <BtnWhatsapp
            style={{}}
            href="https://wa.me/32988634755?text=Oii,%20acabei%20de%20ver%20seu%20portfólio,%20pode%20conversar?"
          >
            <BsWhatsapp />
            Vamos conversar
          </BtnWhatsapp>
        </Row>
      </>
    ),
    socialNetwork: (
      <SocialNetwork>
        <BtnSocial
          href="https://www.linkedin.com/in/edevaldo-cruz-8586a8a4/"
          target="_blank"
        >
          <IconLinkedin size={25} />
        </BtnSocial>
        <BtnSocial href="https://github.com/Edevaldo-Cruz" target="_blank">
          <IconGitHub size={25} />
        </BtnSocial>
      </SocialNetwork>
    ),
  };

  useEffect(() => {
    const container = document.getElementById("animation-container");
    const anim = lottie.loadAnimation({
      container: container,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
    return () => {
      anim.destroy();
    };
  }, []);

  return (
    <>
      {mobileScreen === true ? (
        <Container>
          <ContainerPhotoMobile>
            <img
              src={img}
              style={{
                width: "80vw",
                height: "250px",
              }}
              alt="logo"
            />
          </ContainerPhotoMobile>

          <ContainerSalutationMobile>
            <Text>{text.salutation}</Text>
            <HighlightedText>{text.name}</HighlightedText>
            {text.text}
            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
              }}
            >
              {text.socialNetwork}
            </div>
          </ContainerSalutationMobile>

          <ContainerBtnMobile>
            <div>
              {text.secondText}
              {text.link}
            </div>
          </ContainerBtnMobile>

          <ContainerCard>
            <HighlightedText>Tecnologias e habilidades</HighlightedText>
            <SubText>{text.technologyAndSkillText}</SubText>
            <Slider {...settings}>{cards}</Slider>
          </ContainerCard>
        </Container>
      ) : (
        <>
          <Container>
            <ContainerSalutation span={6}>
              <Text>{text.salutation}</Text>
              <HighlightedText>{text.name}</HighlightedText>
              {text.text}
              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
                {text.socialNetwork}
              </div>
            </ContainerSalutation>
            <ContainerPhoto span={12}>
              <div id="animation-container"></div>
            </ContainerPhoto>
            <ContainerBtn span={6}>
              <div>
                {text.secondText}
                {text.link}
              </div>
            </ContainerBtn>

            <ContainerCard>
              <HighlightedText>Tecnologias e habilidades</HighlightedText>
              <SubText>{text.technologyAndSkillText}</SubText>
              <Slider {...settings}>{cards}</Slider>
            </ContainerCard>
          </Container>
        </>
      )}
    </>
  );
}
