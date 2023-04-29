import { Row } from "antd";
import Slider from "react-slick";
import lottie from "lottie-web";
import animationData from "../../Asset/63487-programming-computer.json";
import { useEffect } from "react";
import { RiReactjsLine, RiGithubLine } from "react-icons/ri";
import { BsGit } from "react-icons/bs";
import { BsLinkedin, BsGithub, BsDownload, BsWhatsapp } from "react-icons/bs";
import { SiCsharp } from "react-icons/si";
import { SiMicrosoftsqlserver } from "react-icons/si";
import {
  TbBrandJavascript,
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandFigma,
  TbBrandReactNative,
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
            <div id="animation-container"></div>
          </ContainerPhotoMobile>

          <ContainerSalutationMobile>
            <Text>👋🏽Ola, meu nome é </Text>
            <HighlightedText>Edevaldo,</HighlightedText>
            <SubText>
              sou um desenvolvedor Full Stack com experiência em C# e React.
              <br />
              <br />
              Bem-vindo ao meu portfólio!
              <br />
              <br />
              Sinta-se à vontade para explorar e se desejar, estou aberto a
              conversar, ouvir suas opiniões e receber seu valioso feedback.
              <br />
              <br />
              Será um prazer tê-lo por aqui!😉
            </SubText>

            <div
              style={{
                display: "flex",
                justifyContent: "end",
                width: "100%",
              }}
            >
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
                <BtnSocial
                  href="https://github.com/Edevaldo-Cruz"
                  target="_blank"
                >
                  <BsGithub size={25} color={"#CCC"} />
                </BtnSocial>
              </SocialNetwork>
            </div>
          </ContainerSalutationMobile>

          <ContainerBtnMobile>
            <div>
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
            </div>
          </ContainerBtnMobile>

          <ContainerCard>
            <HighlightedText>Tecnologias e habilidades</HighlightedText>
            <SubText>
              Abaixo você encontrará uma lista de tecnologias com as quais
              trabalho diariamente, assim como outras com as quais desenvolvi
              projetos anteriormente.
            </SubText>
            <Slider {...settings}>
              <div>
                <ProfessionCard>
                  <TbBrandJavascript size={35} color={"#ccc"} />
                  <TitleCardProfession>Javascript</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <RiReactjsLine size={35} color={"#ccc"} />
                  <TitleCardProfession>React</TitleCardProfession>
                </ProfessionCard>
              </div>

              <div>
                <ProfessionCard>
                  <SiCsharp size={35} color={"#ccc"} />
                  <TitleCardProfession>C#</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <SiMicrosoftsqlserver size={35} color={"#ccc"} />
                  <TitleCardProfession>SQL Server</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <TbBrandReactNative size={35} color={"#ccc"} />
                  <TitleCardProfession>React Native</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <TbBrandHtml5 size={35} color={"#ccc"} />
                  <TitleCardProfession>HTML</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <TbBrandCss3 size={35} color={"#ccc"} />
                  <TitleCardProfession>CSS</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <TbBrandFigma size={35} color={"#ccc"} />
                  <TitleCardProfession>Figma</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <BsGit size={35} color={"#ccc"} />
                  <TitleCardProfession>Git</TitleCardProfession>
                </ProfessionCard>
              </div>
              <div>
                <ProfessionCard>
                  <RiGithubLine size={35} color={"#ccc"} />
                  <TitleCardProfession>GitHub</TitleCardProfession>
                </ProfessionCard>
              </div>
            </Slider>
          </ContainerCard>
        </Container>
      ) : (
        <>
          <Container>
            <ContainerSalutation span={6}>
              <Text>👋🏽Ola, meu nome é </Text>
              <HighlightedText>Edevaldo,</HighlightedText>
              <SubText>
                sou um desenvolvedor Full Stack com experiência em C# e React.
                <br />
                <br />
                Bem-vindo ao meu portfólio!
                <br />
                <br />
                Sinta-se à vontade para explorar e se desejar, estou aberto a
                conversar, ouvir suas opiniões e receber seu valioso feedback.
                <br />
                <br />
                Será um prazer tê-lo por aqui!😉
              </SubText>

              <div
                style={{
                  display: "flex",
                  justifyContent: "end",
                  width: "100%",
                }}
              >
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
                  <BtnSocial
                    href="https://github.com/Edevaldo-Cruz"
                    target="_blank"
                  >
                    <BsGithub size={25} color={"#CCC"} />
                  </BtnSocial>
                </SocialNetwork>
              </div>
            </ContainerSalutation>
            <ContainerPhoto span={12}>
              <div id="animation-container"></div>
            </ContainerPhoto>
            <ContainerBtn span={6}>
              <div>
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
              </div>
            </ContainerBtn>

            <ContainerCard>
              <HighlightedText>Tecnologias e habilidades</HighlightedText>
              <SubText>
                Abaixo você encontrará uma lista de tecnologias com as quais
                trabalho diariamente, assim como outras com as quais desenvolvi
                projetos anteriormente.
              </SubText>
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
                    <TitleCardProfession>React</TitleCardProfession>
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
                    <TbBrandReactNative size={70} color={"#ccc"} />
                    <TitleCardProfession>React Native</TitleCardProfession>
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
        </>
      )}
    </>
  );
}
