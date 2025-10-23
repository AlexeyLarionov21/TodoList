import React, { useState } from "react";
import {
  FormWrapper,
  FormBlock,
  FormLabel,
  FormField,
  FormControl,
} from "./Form.styled";
import plusIcon from "../../assets/images/plus.png";

export const Form = (props: { createNewToDo: Function }) => {
  const [text, setText] = useState<string>("");

  const formSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (text) {
      props.createNewToDo(text);
      setText("");
    }
  };

  return (
    <FormWrapper>
      <FormBlock action="#" onSubmit={formSubmit}>
        <FormLabel>
          <FormField
            type="text"
            onChange={(event) => setText(event?.target.value)}
            value={text}
          />
          <FormControl icon={plusIcon} />
        </FormLabel>
      </FormBlock>
    </FormWrapper>
  );
};
