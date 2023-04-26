// import React, { useState } from "react";
// import PhotoSS from "../../Asset/ss.png";
// import PhotoExercito from "../../Asset/exercito.png";

// import HorizontalTimeline from "react-horizontal-timeline";
// import {
//   Container,
//   ContainerTitle,
//   Title,
//   HighlightedText,
//   Text,
// } from "./styles";
// import { Row, Col } from "antd";

// /*
// Formato: DD/MM/YYYY
// Observação: Certifique-se de que as datas estejam ordenadas em ordem crescente
// */
// const VALUES = [
//   "2022-05-02", // Início da carreira em 2008
//   "2017-02-01", // Marco importante em 2010
//   "2013-06-01", // Conquista significativa em 2013
//   "2015-03-01", // Novo marco em 2015
//   "2019-01-01", // Novo ano de referência em 2019
//   "2019-06-17", // Evento especial em 17 de junho de 2019
//   "2019-08-01", // Mais uma conquista em agosto de 2019
// ];

// const VALUE_TEXTS = [
//   <>
//     <Row>
//       <Col span={6}>
//         <img src={PhotoSS} width={"350px"} height={"350px"} alt="logo SS" />
//       </Col>
//       <Col span={18}>
//         <h1>Dev Junior Full stack</h1>
//         <h2 style={{ marginInline: "3%" }}>SS Soluções</h2>

//         <Text>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
//           text of the printing and typesetting industry. Lorem Ipsum has been
//           the industry's standard dummy text ever since the 1500s, when an
//           unknown printer took a galley of type and scrambled it to make a type
//           specimen book. Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's standard
//           dummy text ever since the 1500s, when an unknown printer took a galley
//           of type and scrambled it to make a type specimen book.{" "}
//         </Text>
//       </Col>
//     </Row>
//   </>,
//   <>
//     <Row>
//       <Col span={4}>
//         <img
//           src={PhotoExercito}
//           width={"220px"}
//           height={"350px"}
//           alt="logo SS"
//         />
//       </Col>
//       <Col span={18}>
//         <h1>3º Sargento Tec. Contabilidade</h1>
//         <h2 style={{ marginInline: "3%" }}>Exercito Brasileiro</h2>

//         <Text>
//           Lorem Ipsum is simply dummy text of the printing and typesetting
//           industry. Lorem Ipsum has been the industry's standard dummy text ever
//           since the 1500s, when an unknown printer took a galley of type and
//           scrambled it to make a type specimen book. Lorem Ipsum is simply dummy
//           text of the printing and typesetting industry. Lorem Ipsum has been
//           the industry's standard dummy text ever since the 1500s, when an
//           unknown printer took a galley of type and scrambled it to make a type
//           specimen book. Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry. Lorem Ipsum has been the industry's standard
//           dummy text ever since the 1500s, when an unknown printer took a galley
//           of type and scrambled it to make a type specimen book.{" "}
//         </Text>
//       </Col>
//     </Row>
//   </>,
//   "Conquista significativa em 2013",
//   "Novo marco em 2015",
//   "Novo ano de referência em 2019",
//   "Evento especial em 17 de junho de 2019",
//   "Mais uma conquista em agosto de 2019",
// ];

// export default function Career() {
//   const [value, setValue] = useState(0);
//   const [previous, setPrevious] = useState(0);

//   const handleIndexClick = (index) => {
//     setValue(index);
//     setPrevious(value);
//   };

//   return (
//     <Container>
//       <ContainerTitle>
//         <Title>Carreira</Title>
//       </ContainerTitle>
//       <HighlightedText>Trajetória até aqui</HighlightedText>

//       {/* Bounding box for the Timeline */}
//       <div
//         style={{
//           display: "flex",
//           alignItems: "center",
//           width: "80vw",
//           height: "110px",
//           margin: "2rem",
//           marginInline: "0",
//           color: "#FFF",
//         }}
//       >
//         <HorizontalTimeline
//           index={value}
//           indexClick={handleIndexClick}
//           values={VALUES}
//           styles={{
//             background: "transparent",
//             foreground: "#FFF",
//             outline: " #7b4ae2",
//             outlineColor: "blue",
//             color: "#FFF",
//             width: "80vw",

//             backgroundColor: "blue",
//           }}
//         />
//       </div>
//       <Text>
//         {/* Exibindo o texto correspondente ao valor atual de value */}
//         {VALUE_TEXTS[value]}
//       </Text>
//     </Container>
//   );
// }
