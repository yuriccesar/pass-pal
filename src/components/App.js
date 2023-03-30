import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Checkboxes from "./Checkbox";
import PasswordTextField from "./TextField";
import DataTable from "./Table";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: blue;
  color: white;
  padding: 10px;
  margin-right: 10px;
`;

const AppContainer = styled.div`
  background-color: teal;
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
`;

function App() {
  const [password, setPassword] = useState("");
  const [text, setText] = useState("");
  const [tableData, setTableData] = useState([]);
  const [uppercaseChecked, setUppercaseChecked] = useState(false);
  const [lowercaseChecked, setLowercaseChecked] = useState(false);
  const [numbersChecked, setNumbersChecked] = useState(false);
  const [specialCharsChecked, setSpecialCharsChecked] = useState(false);

  const generatePassword = () => {
    const PASSWORDLENGTH = 16;
    let charset = "";
    if (uppercaseChecked) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lowercaseChecked) charset += "abcdefghijklmnopqrstuvwxyz";
    if (numbersChecked) charset += "0123456789";
    if (specialCharsChecked) charset += "!@#$%^&*()_+-={}[]|\\:;\"'<>,.?/";

    let password = "";
    for (let i = 0; i < PASSWORDLENGTH; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(password);
  };

  const handleAddClick = () => {
    setTableData([...tableData, { text: text, password: password }]);
    setText("");
    setPassword("");
  };

  return (
    <AppContainer>
        <Checkboxes
          uppercaseChecked={uppercaseChecked}
          setUppercaseChecked={setUppercaseChecked}
          lowercaseChecked={lowercaseChecked}
          setLowercaseChecked={setLowercaseChecked}
          numbersChecked={numbersChecked}
          setNumbersChecked={setNumbersChecked}
          specialCharsChecked={specialCharsChecked}
          setSpecialCharsChecked={setSpecialCharsChecked}
        />
        <PasswordTextField text={text} setText={setText} password={password} />
        <StyledButton variant="contained" onClick={generatePassword}>
          Generate
        </StyledButton>
        <StyledButton
          variant="contained"
          onClick={handleAddClick}
          disabled={!text || !password}
        >
          Add
        </StyledButton>
        <DataTable tableData={tableData} />
    </AppContainer>
  );
}

export default App;
