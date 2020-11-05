import React from "react";
import { Section, Card } from "../../components";
import * as S from "./Home.style";
import products from "../../utils/products";

function Home() {
  return (
    <>
      <Section>
        <h1>Please select your preference:</h1>
        <S.TwoGridDesktop>
          {products &&
            products.map((product) => (
              <S.CardWrapper key={product.id}>
                <Card
                  handleClick={() =>
                    alert(`You have selected ${product.title}`)
                  }
                  image={product.image}
                  title={product.title}
                />
              </S.CardWrapper>
            ))}
        </S.TwoGridDesktop>
      </Section>
    </>
  );
}

export default Home;
