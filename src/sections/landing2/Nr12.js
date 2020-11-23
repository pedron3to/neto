import React from "react";
import { rgba } from "polished";
import { Container, Row, Col } from "react-bootstrap";

import { Title, Button, Section, Box, Text } from "../../components/Core";

const FeatureCard = ({
  color = "primary",
  iconName,
  title,
  children,
  ...rest
}) => (
  <Box width={"100%"} bg="light" p="30px" borderRadius={10} {...rest}>
    <div className="d-flex justify-content-between align-items-start">
      <Box
        size={69}
        minWidth={69}
        minHeight={69}
        borderRadius="50%"
        color={color}
        fontSize="28px"
        className="d-flex justify-content-center align-items-center"
        mr="20px"
        css={`
          background-color: ${({ theme, color }) =>
            rgba(theme.colors[color], 0.1)};
        `}
      >
        <i className={`icon ${iconName}`}></i>
      </Box>
      <div>
        <Text
          color="heading"
          as="h3"
          fontSize={4}
          fontWeight={500}
          letterSpacing={-0.75}
          mb={2}
        >
          {title}
        </Text>
        <Text fontSize={2} lineHeight={1.75}>
          {children}
        </Text>
      </div>
    </div>
  </Box>
);

const Feature = () => (
  <>
    <Section bg="secondary">
      <Container>
        <Row className="align-items-center">
          <Col
            md="8"
            lg="6"
            className="offset-lg-1 pl-lg-5 order-lg-2"
            data-aos="fade-left"
            data-aos-duration="750"
            data-aos-once="true"
            data-aos-delay="500"
          >
            <Box>
              <Title color="light">Segurança de Máquinas e Equipamentos</Title>
              <Text color="light" opacity={0.7}>
                Adequação de um parque fabril deve ser realizada como um todo 
                e por isso os projetos de adequação de máquinas são considerados 
                como um Ciclo, uma vez que novos processos, 
                novos equipamentos e novos layouts estão constantemente sendo 
                inseridos dentro da planta da indústria.
              </Text>
              <Button mt={4}>Entre em contato</Button>
            </Box>
          </Col>
          <Col md="8" lg="5" className="order-lg-1 mt-5 mt-lg-0">
            <div>
              <Row className="justify-content-center">
                <Col
                  md="12"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="primary"
                    iconName="icon-layout-11"
                    title="Inventário de máquinas"
                  >
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="ash"
                    iconName="icon-sidebar-2"
                    title="Análise de Risco
"
                  >
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </FeatureCard>
                </Col>
                <Col
                  md="12"
                  className="mt-4"
                  data-aos="fade-right"
                  data-aos-duration="750"
                  data-aos-once="true"
                  data-aos-delay="50"
                >
                  <FeatureCard
                    color="dark"
                    iconName="icon-voice-recognition-2"
                    title="Treinamento dos procedimentos de Segurança"
                  >
                    With lots of unique blocks, you can easily build a page
                    without coding.
                  </FeatureCard>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </Section>
  </>
);

export default Feature;
