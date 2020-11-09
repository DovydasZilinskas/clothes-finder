import React, { useContext } from "react";
import { Section, Card } from "../../components";
import * as S from "./ProductSelection.style";
import products from "../../utils/products";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user.context";

function createOrder(user, product, history) {
  fetch("http://localhost:8080/add-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userid: user.state.data.id, value: product.id }),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      history.push("/confirm");
    })
    .catch((err) => console.log(err));
}

function Home() {
  const history = useHistory();
  const user = useContext(UserContext);
  return (
    <>
      <Section>
        <h1>Please select your preference:</h1>
        <S.TwoGridDesktop>
          {products &&
            products.map((product) => (
              <S.CardWrapper key={product.id}>
                <Card
                  handleClick={() => {
                    createOrder(user, product, history);
                  }}
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
