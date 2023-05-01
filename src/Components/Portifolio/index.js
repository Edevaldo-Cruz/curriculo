import { Col, Row } from "antd";
import Slider from "react-slick";
import { BsArrowRightShort } from "react-icons/bs";
import {
  Container,
  Contents,
  ContainerTitle,
  Title,
  Subtitle,
  ContainerCard,
  CardJob,
  Text,
  Image,
  TitleCard,
  ContainerType,
  Type,
  ContainerOnline,
  Online,
  BtnFilter,
  LinkGitHub,
} from "./styles";

export default function Portifolio({ mobileScreen }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    adaptiveHeight: true,
    variableWidth: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
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

  const portifolio = [
    {
      title: "AdoptPetAPI",
      language: "C#",
      online: false,
      description:
        "API que cria pets fictícios dando nome e imagems automaticamente para uma adoção, alem de salvar as informações do adotante.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/adopt-pet",
    },
    {
      title: "APIPokemon",
      language: "React Native",
      online: false,
      description:
        "Projeto React que utiliza a biblioteca Axios para buscar informações da API PokéAPI e exibir dados de pokemons, como imagem, tipo e habilidades.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/APIPokemon",
    },
    {
      title: "BuscaCep",
      language: "React Native",
      online: false,
      description:
        "Esse app React Native utiliza uma API para retornar o endereço completo de um usuário a partir do CEP inserido, facilitando a busca por informações de endereço de maneira rápida e fácil.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/buscaCEP",
    },
    {
      title: "ContactList",
      language: "Kotlin",
      online: false,
      description:
        "App Kotlin lista de contatos com efeitos visuais personalizados, busca e detalhes dos contatos cadastrados, tornando a interação mais atraente e intuitiva.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/contactList",
    },
    {
      title: "IMCKotlin",
      language: "Kotlin",
      online: false,
      description:
        "Esse projeto em Kotlin calcula o índice de massa corporal (IMC) a partir do peso e altura fornecidos pelo usuário, exibindo uma classificação do resultado. Ideal para quem busca monitorar sua saúde de forma simples e rápida.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/APIPokemon",
    },
    {
      title: "LanchesMac",
      language: "C#",
      online: false,
      description:
        "Essa loja virtual de lanches foi desenvolvida em ASP.NET 6 e possui um módulo administrativo para gerenciar produtos e pedidos.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/LanchesMac",
    },
    {
      title: "ListaDeContatoSQLlite",
      language: "Kotlin",
      online: false,
      description:
        "Este aplicativo Android em Kotlin apresenta efeitos visuais personalizados em uma lista de contatos que utiliza o SQLite como banco de dados, permitindo adicionar, editar e excluir contatos com facilidade e eficiência.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/ListaDeContatosSQLite",
    },
    {
      title: "LocadoraAPI",
      language: "C#",
      online: false,
      description:
        "API de locadora desenvolvida em ASP.NET e Entity Framework, permitindo a gestão de filmes e clientes através de endpoints RESTful.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/LocadoraAPI",
    },
    {
      title: "LocadoraWeb",
      language: "C#",
      online: false,
      description:
        "Web app de locadora com ASP.NET 6 e EF para gerenciar locação de filmes, incluindo cadastro de clientes, filmes e devoluções.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/LocadoraWeb",
    },
    {
      title: "LojaTenis",
      language: "React Native",
      online: false,
      description:
        "Este aplicativo React Native apresenta uma interface para compra de tênis online, com imagens, detalhes e preços dos produtos disponíveis.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/lojaTenis",
    },
    {
      title: "MobileTask",
      language: "React Native",
      online: false,
      description:
        "Este aplicativo React Native permite que os usuários cadastrem e gerenciem tarefas de forma simples e intuitiva.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/lojaTenis",
    },
    {
      title: "Netflix_Clone",
      language: "React",
      online: true,
      description:
        "Projeto React que replica a interface da Netflix, exibindo títulos em destaque.",
      image: "",
      url: "https://ecrz-clone-netflix.netlify.app/",
    },
    {
      title: "Spotify_Clone",
      language: "React Native",
      online: false,
      description:
        "Este projeto é um clone do aplicativo Spotify, desenvolvido com React Native e Typescript, permitindo ao usuário ouvir músicas.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/playMusic",
    },
    {
      title: "PokedexReact",
      language: "React",
      online: false,
      description:
        "Este projeto React consome a API PokéAPI para exibir informações de um Pokémon específico, incluindo sua imagem, tipo,",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/pokedexReact",
    },
    {
      title: "Portal_MSN_Clone",
      language: "React",
      online: false,
      description:
        "Portal de notícia baseado no site MSN, criado com o React, Bootstrap/Bootstrap React e Axios para consumir a API_News para obter notícias reais e a API OpenWeather para informações de previsão do tempo do local do usuário.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/portal_de_noticias",
    },
    {
      title: "WebTask",
      language: "React",
      online: false,
      description:
        "Este projeto em React permite o cadastro e gerenciamento de tarefas, com opções para adicionar, editar, excluir e marcar tarefas como concluídas, oferecendo uma interface intuitiva e responsiva para os usuários.",
      image: "",
      url: "https://github.com/Edevaldo-Cruz/webTask",
    },
  ];

  return (
    <Container>
      <Contents>
        <ContainerTitle>
          <Title>Portifólio</Title>
        </ContainerTitle>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Col span={18}>
            <Subtitle>Projetos</Subtitle>
          </Col>

          {mobileScreen === false ? (
            <Col span={6}>
              <Row>
                <BtnFilter>Filtro 1</BtnFilter>
                <BtnFilter>Filtro 2</BtnFilter>
                <BtnFilter>Filtro 3</BtnFilter>
              </Row>
            </Col>
          ) : (
            <div style={{ margin: "-55px 0 1rem 0" }}>
              <Row>
                <BtnFilter>Filtro 1</BtnFilter>
                <BtnFilter>Filtro 2</BtnFilter>
                <BtnFilter>Filtro 3</BtnFilter>
              </Row>
            </div>
          )}
        </Row>

        <ContainerCard>
          <Slider {...settings}>
            {portifolio.map((card, index) => {
              return (
                <div key={index}>
                  <CardJob>
                    <TitleCard>{card.title}</TitleCard>
                    <Row>
                      {card.online === true ? (
                        <ContainerOnline>
                          <Online>online</Online>
                        </ContainerOnline>
                      ) : (
                        <></>
                      )}
                      <ContainerType>
                        <Type>{card.language}</Type>
                      </ContainerType>
                    </Row>
                    <Text>{card.description}</Text>
                    <Image />
                  </CardJob>
                </div>
              );
            })}
          </Slider>
        </ContainerCard>
        <LinkGitHub href="https://github.com/Edevaldo-Cruz">
          Veja todos meus projetos
          {mobileScreen === true ? (
            <BsArrowRightShort size={25} style={{ marginLeft: "10px" }} />
          ) : (
            <BsArrowRightShort size={45} style={{ marginLeft: "10px" }} />
          )}
        </LinkGitHub>
      </Contents>
    </Container>
  );
}
