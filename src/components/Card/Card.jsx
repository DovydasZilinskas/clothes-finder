import React from "react";
import * as S from "./Card.style";

function Card({ title, image, loading, handleClick }) {
  title = title || "Fashion Item";

  if (loading) {
    return <S.LoadingCard>Loading...</S.LoadingCard>;
  }

  return (
    <S.Card onClick={handleClick}>
      {image && <S.Image src={image} alt={title} />}
      <S.Title> {title}</S.Title>
    </S.Card>
  );
}

export default Card;
