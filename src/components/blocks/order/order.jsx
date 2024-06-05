import React, { useState } from "react";
import { TitleSize } from "/src/components/ui/title/title";
import RadioButton from "/src/components/ui/radio-button/radio-button";
import Accordion from "/src/components/ui/accordion/accordion";
import { Ul, Li } from "/src/components/styled";
import { Form, Label } from "/src/components/styled";
import {
  StyledSection,
  StyledTitle,
  StyledPrice,
  StyledButton,
  Fieldset,
  StyledUl,
  StyledLi,
  RadioLabelForTime,
  RadioLabelForType,
} from "./styles";

function Order({ options: { durationOptions = [], ticketOptions = [] } }) {
  const canBuy = durationOptions.length && ticketOptions.length;
  const [duration, setDuration] = useState(durationOptions[0]);
  const [selectType, setSelectType] = useState(ticketOptions[0].id);
  const type = ticketOptions.find((option) => option.id === selectType);
  const price = type.price * duration;

  const handleBuy = () => {
    alert(
      `Спасибо за покупкую
      Вы приобрели билет класса: ${type.title}.
      Продолжительность посещения (часов): ${duration}.
      Цена билета: ${price} руб.`
    );
  };
  const accordionContent =
    canBuy &&
    ticketOptions.map((option) => ({
      id: option.id,
      title: (
        <RadioButton
          labelComponent={RadioLabelForType}
          selectValue={selectType}
          value={option.id}
          text={option.title}
          onChange={(evt) => {
            setSelectType(Number(evt.target.value));
          }}
        />
      ),
      description: option.description,
    }));
  return (
    <StyledSection>
      <StyledTitle level={2} size={TitleSize.BIG}>
        Купить билет
      </StyledTitle>
      {canBuy ? (
        <Form
          $width={540}
          onSubmit={(evt) => {
            evt.preventDefault();
            handleBuy();
          }}
        >
          <Fieldset>
            <Label $margin={12}>Продолжительность (часов)</Label>
            <StyledUl>
              {durationOptions.map((option) => (
                <Li key={option}>
                  <RadioButton
                    labelComponent={RadioLabelForTime}
                    selectValue={duration}
                    value={option}
                    text={option}
                    onChange={(evt) => {
                      setDuration(Number(evt.target.value));
                    }}
                  />
                </Li>
              ))}
            </StyledUl>
          </Fieldset>
          <Fieldset>
            <Label $margin={12}>Тип билета</Label>
            <Accordion content={accordionContent} isHtml />
          </Fieldset>
          <Fieldset>
            <Label $small $margin={8}>
              Цена
            </Label>
            <StyledPrice>{price} руб</StyledPrice>
          </Fieldset>
          <StyledButton type="submit">Купить билет</StyledButton>
        </Form>
      ) : (
        <p>Покупка билетов временно недоступна</p>
      )}
    </StyledSection>
  );
}

export default Order;
