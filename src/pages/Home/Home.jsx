import React, { useState } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./Home.style";
import { useHistory } from "react-router-dom";

function Home() {
  const [name, setName] = useState();
  const [drop, setDrop] = useState();
  const [long, setLong] = useState();

  const history = useHistory();

  return (
    <Section>
      <h1>To order, please fill in the information:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          history.push("/order");
          console.log(name, long, drop);
        }}
      >
        <S.StyleInputField>
          <InputField
            type="text"
            placeholder="Full name"
            handleChange={(e) => setName(e.target.value)}
          />
        </S.StyleInputField>
        <S.StyleInputField>
          <InputField
            type="dropdown"
            options={[
              { id: 0, name: "Diena", value: "day" },
              { id: 1, name: "Vakaras", value: "evening" },
              { id: 3, name: "Naktis", value: "night" },
            ]}
            handleChange={(e) => setDrop(e.target.value)}
          />
        </S.StyleInputField>
        <S.StyleInputField>
          <InputField
            type="longtext"
            placeholder="Enter your address"
            handleChange={(e) => setLong(e.target.value)}
          />
        </S.StyleInputField>
        <Button type="submit" color="primary">
          Next: Select outfit
        </Button>
      </form>
    </Section>
  );
}

export default Home;
