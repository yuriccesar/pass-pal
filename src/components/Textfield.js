import React from "react";
import { TextField } from "@material-ui/core";
import styled from "styled-components";

const PasswordTextFieldWrapper = styled.div`
  margin-top: 20px;
`;

const PasswordTextField = ({ text, setText, password }) => (
  <PasswordTextFieldWrapper>
    <TextField variant="outlined" label="Enter text" value={text} onChange={(e) => setText(e.target.value)} />
    <TextField variant="outlined" label="Generated Password" value={password} InputProps={{ readOnly: true }} />
  </PasswordTextFieldWrapper>
);

export default PasswordTextField;
