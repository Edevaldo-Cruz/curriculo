import { useRef, useState } from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { MdContentCopy, MdCheck, MdOpacity } from "react-icons/md";
import { notification } from "antd";
import {
  Container,
  ContainerTitle,
  Title,
  HighlightedText,
  BtnWhatsapp,
  Email,
  ContainerBtn,
  SocialNetwork,
  BtnSocial,
  Text,
  ContainerFooter,
  IconGitHub,
  IconLinkedin,
} from "./styles";

export default function Contact() {
  const emailRef = useRef(null);
  const [btn, setBtn] = useState(false);

  const handleCopy = () => {
    const emailElement = emailRef.current;
    const range = document.createRange();
    range.selectNode(emailElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setBtn(true);
    notification.open({
      message: "E-mail copiado!",
      description: "O e-mail foi copiado para a área de transferência.",
      duration: 3,
      placement: "bottomRight",
    });
  };

  return (
    <>
      <Container>
        <ContainerTitle>
          <Title>Contato</Title>
        </ContainerTitle>
        <HighlightedText>Vamos conversar!</HighlightedText>
        <ContainerBtn>
          <BtnWhatsapp href="https://wa.me/32988634755?text=Oii,%20acabei%20de%20ver%20seu%20portfólio,%vamos%20conversar?">
            <BsWhatsapp />
          </BtnWhatsapp>
          <Email ref={emailRef} onClick={handleCopy}>
            {btn === true ? (
              <MdCheck size={30} color={"#4ae290"} />
            ) : (
              <MdContentCopy size={30} />
            )}
            edevaldo_cruz@hotmail.com
          </Email>
        </ContainerBtn>
      </Container>
      <ContainerFooter>
        <Text>Desenvolvido por Edevaldo Cruz Antonio</Text>
        <SocialNetwork>
          <BtnSocial
            href="https://www.linkedin.com/in/edevaldo-cruz-8586a8a4/"
            target="_blank"
          >
            <IconLinkedin />
          </BtnSocial>
          <BtnSocial href="https://github.com/Edevaldo-Cruz" target="_blank">
            <IconGitHub />
          </BtnSocial>
        </SocialNetwork>
        <Text style={{ fontSize: "16px", marginTop: "2rem", opacity: 0.5 }}>
          "Porque Dele e por Ele, e para Ele, são todas as coisas ..."
        </Text>
        <Text style={{ fontSize: "16px", opacity: 0.5 }}>Romanos 11:36</Text>
      </ContainerFooter>
    </>
  );
}
