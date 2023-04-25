import {
  Container,
  ContainerPhoto,
  ContainerContents,
  ContainerTitle,
  Title,
  Name,
  Text,
  ContainerPhotoMobile,
  ContainerMobile,
  ContainerContentsMobile,
} from "./styles";

export default function About({ mobileScreen }) {
  return (
    <>
      {mobileScreen === true ? (
        <ContainerMobile>
          <ContainerPhotoMobile />
          <ContainerContentsMobile>
            <div>
              <ContainerTitle>
                <Title>Sobre mim</Title>
              </ContainerTitle>

              <Name>Edevaldo Cruz Antonio</Name>
              <Text>
                Sou um estudante de Análise e Desenvolvimento de Sistemas com
                formação técnica em contabilidade e uma paixão pela tecnologia e
                por desafios. Estou em busca de oportunidades para mostrar todo
                o meu potencial.
              </Text>
              <Text>
                Tenho experiência de 4 anos na área contábil, onde desempenhei
                as funções de auxiliar contábil/fiscal e suporte técnico. Além
                disso, trabalhei por 5 anos como Sargento técnico em
                contabilidade, liderando, coordenando e sendo a ligação da tropa
                com os Oficiais e o Comando.
              </Text>
              <Text>
                Recentemente, decidi fazer uma transição de carreira e
                atualmente trabalho como Full Stack Junior. Nessa posição, sou
                responsável por implementar novas funcionalidades, identificar e
                corrigir bugs, manipular bancos de dados, elaborar designs UX
                funcionais e realizar modelagem Entidade-Relacionamento (ER),
                aplicando conceitos de metodologias ágeis. Estou empenhado em
                aprender e crescer constantemente nesse novo desafio, utilizando
                minha sólida formação em contabilidade e minha paixão pela
                tecnologia para contribuir de forma significativa para o
                desenvolvimento de projetos. Estou animado para aplicar minha
                experiência diversificada em diferentes áreas e me dedicar a
                novos projetos que me permitam explorar todo o meu potencial.
              </Text>
            </div>
          </ContainerContentsMobile>
        </ContainerMobile>
      ) : (
        <>
          <Container>
            <ContainerPhoto span={9}></ContainerPhoto>
            <ContainerContents span={15}>
              <div>
                <ContainerTitle>
                  <Title>Sobre mim</Title>
                </ContainerTitle>

                <Name>Edevaldo Cruz Antonio</Name>
                <Text>
                  Sou um estudante de Análise e Desenvolvimento de Sistemas com
                  formação técnica em contabilidade e uma paixão pela tecnologia
                  e por desafios. Estou em busca de oportunidades para mostrar
                  todo o meu potencial.
                </Text>
                <Text>
                  Tenho experiência de 4 anos na área contábil, onde desempenhei
                  as funções de auxiliar contábil/fiscal e suporte técnico. Além
                  disso, trabalhei por 5 anos como Sargento técnico em
                  contabilidade, liderando, coordenando e sendo a ligação da
                  tropa com os Oficiais e o Comando.
                </Text>
                <Text>
                  Recentemente, decidi fazer uma transição de carreira e
                  atualmente trabalho como Full Stack Junior. Nessa posição, sou
                  responsável por implementar novas funcionalidades, identificar
                  e corrigir bugs, manipular bancos de dados, elaborar designs
                  UX funcionais e realizar modelagem Entidade-Relacionamento
                  (ER), aplicando conceitos de metodologias ágeis. Estou
                  empenhado em aprender e crescer constantemente nesse novo
                  desafio, utilizando minha sólida formação em contabilidade e
                  minha paixão pela tecnologia para contribuir de forma
                  significativa para o desenvolvimento de projetos. Estou
                  animado para aplicar minha experiência diversificada em
                  diferentes áreas e me dedicar a novos projetos que me permitam
                  explorar todo o meu potencial.
                </Text>
              </div>
            </ContainerContents>
          </Container>
        </>
      )}
    </>
  );
}
