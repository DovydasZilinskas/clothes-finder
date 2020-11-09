import React from "react";
import * as S from "./InputField.style";

function InputField({ value, placeholder, type, handleChange, options, name }) {
  switch (type) {
    case "number":
      return (
        <S.Input
          type="number"
          step="0.1"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
    case "longtext":
      return (
        <S.TextArea
          placeholder={placeholder}
          onChange={handleChange}
        ></S.TextArea>
      );
    case "radio":
      return (
        <S.Radio
          type="radio"
          value={value}
          name={name}
          onChange={handleChange}
        />
      );
    case "dropdown":
      return (
        <S.Dropdown onChange={handleChange} defaultValue>
          <option disabled value>
            Select
          </option>
          {options.map((e) => (
            <option value={e.value} key={e.id}>
              {e.name}
            </option>
          ))}
        </S.Dropdown>
      );
    default:
      return (
        <S.Input
          type="text"
          placeholder={placeholder}
          onChange={handleChange}
        />
      );
  }
}

export default InputField;
