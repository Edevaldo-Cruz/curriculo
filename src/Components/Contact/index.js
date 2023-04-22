import { useRef } from "react";
import { Row } from "antd";
import { MdContentCopy } from "react-icons/md";
import {
  Container,
  ContainerTitle,
  Title,
  HighlightedText,
  BtnWhatsapp,
  Email,
} from "./styles";

export default function Contact() {
  const emailRef = useRef(null);

  const handleCopy = () => {
    const emailElement = emailRef.current;
    const range = document.createRange();
    range.selectNode(emailElement);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
  };

  return (
    <Container>
      <ContainerTitle>
        <Title>Contato</Title>
      </ContainerTitle>
      <HighlightedText>Vamos conversar!</HighlightedText>
      <Row>
        <BtnWhatsapp href="https://wa.me/32988634755?text=Oii,%20acabei%20de%20ver%20seu%20portfólio,%20pode%20conversar?">
          Vamos conversar
        </BtnWhatsapp>
      </Row>

      <Email ref={emailRef} onClick={handleCopy}>
        <MdContentCopy />
        edevaldo_cruz@hotmail.com
      </Email>
    </Container>
  );
}
