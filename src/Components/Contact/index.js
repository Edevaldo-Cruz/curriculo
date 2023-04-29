import { useRef, useState } from "react";
import { BsLinkedin, BsGithub, BsWhatsapp } from "react-icons/bs";
import { MdContentCopy, MdCheck } from "react-icons/md";
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
} from "./styles";
import { Footer } from "antd/es/layout/layout";
import { notification } from "antd";

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
            Vamos conversar
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
      <Footer
        style={{
          textAlign: "center",
          backgroundColor: "#1e1e1e",
          borderTop: "3px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <Text>Desenvolvido por Edevaldo Cruz Antonio</Text>
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
      </Footer>
    </>
  );
}
