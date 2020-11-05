import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./Card";
storiesOf("Card", module)
  .add("Card with Image and Text", () => (
    <Card
      image="https://www.savethestudent.org/uploads/Online-fashion-retailers.jpg"
      title="Hello"
      handleClick={() => console.log("I got clicked")}
    />
  ))
  .add("Card with Image and NO Text", () => (
    <Card
      image="https://www.savethestudent.org/uploads/Online-fashion-retailers.jpg"
      handleClick={() => console.log("I got clicked")}
    />
  ))
  .add("Card with No Image and with Text", () => <Card title="Hello" />)
  .add("Loading Card", () => <Card loading />);
