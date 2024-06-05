import React from "react";
import { TitleSize } from "/src/components/ui/title/title";
import StarCard from "/src/components/ui/star-card/star-card";
import Button from "/src/components/ui/button/button";
import { StyledSection, StarList, StyledListItem, StyledTitle } from "./styles";
import { AppRoute } from "/src/const";

function StarsList({ stars }) {
  return (
    <StyledSection>
      {stars?.length ? (
        <>
          <StyledTitle
            level={2}
            size={TitleSize.MIDDLE}
            className="stars-list__title"
          >
            Наши звезды
          </StyledTitle>
          <StarList>
            {stars.map((star) => (
              <StyledListItem className="stars-list__item" key={star.id}>
                <StarCard {...star} />
              </StyledListItem>
            ))}
          </StarList>
          <Button
            minWidth={353}
            className="stars-list__button"
            link={AppRoute.BUY}
          >
            Купить билет
          </Button>
        </>
      ) : null}
    </StyledSection>
  );
}

export default StarsList;
