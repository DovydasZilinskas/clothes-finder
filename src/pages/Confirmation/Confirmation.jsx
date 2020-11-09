import React from "react";
import { Section } from "../../components";
import * as S from "./Confirmation.style";

function Home() {
  return (
    <>
      <Section>
        <S.Confirmation>
          <h1>Order confirmed</h1>
        </S.Confirmation>
      </Section>
    </>
  );
}

export default Home;
