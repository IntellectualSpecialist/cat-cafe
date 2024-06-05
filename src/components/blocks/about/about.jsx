import React from "react";
import Title, { TitleSize } from "/src/components/ui/title/title";
import { Address, Text, StyledSection, WorkTime, AboutWrapper } from "./styles";

function About() {
  return (
    <StyledSection>
      <AboutWrapper>
        <Title level={1} size={TitleSize.BIG} className="about__title">
          Первое в России котокафе
        </Title>
        <Text>
          Крупнейшее котокафе России, в котором живёт 50 кошек и котов, и каждый
          из них ищет новый дом. Животных можно гладить, фотографировать, играть
          с ними.
        </Text>
        <WorkTime>
          Рабочее время с <time datetime="08:00">8:00</time> до
          <time datetime="23:00"> 23:00</time>
        </WorkTime>
        <Address>
          Санкт-Петербург, набережная реки Карповки, дом 5, литера П
        </Address>
      </AboutWrapper>
    </StyledSection>
  );
}

export default About;
