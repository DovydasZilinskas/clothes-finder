import React, { useState, useContext } from "react";
import { Section, InputField, Button } from "../../components";
import * as S from "./Home.style";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../context/user.context";

function createUser(name, company, address, history, user) {
  fetch("http://localhost:8080/add-user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, company, address }),
  })
    .then((data) => data.json())
    .then((data) => {
      console.log(data);
      user.setState({ data });
      history.push("/order");
    })
    .catch((err) => console.log(err));
}

function Home() {
  const [name, setName] = useState();
  const [company, setCompany] = useState();
  const [address, setAddress] = useState();
  const user = useContext(UserContext);

  const history = useHistory();

  return (
    <Section>
      <h1>To order, please fill in the information:</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          createUser(name, company, address, history, user);
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
              { id: 1, name: "CodeAcademy", value: "ca" },
              { id: 2, name: "IBM", value: "ibm" },
              { id: 3, name: "Ernst&Young", value: "ey" },
            ]}
            handleChange={(e) => setCompany(e.target.value)}
          />
        </S.StyleInputField>
        <S.StyleInputField>
          <InputField
            type="longtext"
            placeholder="Enter your address"
            handleChange={(e) => setAddress(e.target.value)}
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
