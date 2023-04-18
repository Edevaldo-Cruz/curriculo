import { BsLinkedin, BsGithub, BsDownload } from "react-icons/bs";
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
} from "./styles";

export function Home() {
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
      <ContainerPhoto span={12}></ContainerPhoto>
      <ContainerBtn span={6}>
        <LinkCurriculum
          href="../../Asset/CurrículoEdevaldo.pdf"
          download="cvedevaldocruz.pdf"
        >
          Baixar Curriculo
          <BsDownload size={25} style={{ marginLeft: "10px" }} />
        </LinkCurriculum>
      </ContainerBtn>
    </Container>
  );
}
