import React from "react";
import { Switch, FormGroup, FormControlLabel } from "@material-ui/core";
import styled from "styled-components";

const Label = styled(FormControlLabel)`
  color: black!important;
`;

function Checkboxes(props) {
  const {
    uppercaseChecked,
    setUppercaseChecked,
    lowercaseChecked,
    setLowercaseChecked,
    numbersChecked,
    setNumbersChecked,
    specialCharsChecked,
    setSpecialCharsChecked,
  } = props;

  const handleUppercaseChange = (event) => {
    setUppercaseChecked(event.target.checked);
  };

  const handleLowercaseChange = (event) => {
    setLowercaseChecked(event.target.checked);
  };

  const handleNumbersChange = (event) => {
    setNumbersChecked(event.target.checked);
  };

  const handleSpecialCharsChange = (event) => {
    setSpecialCharsChecked(event.target.checked);
  };

  return (
    <FormGroup>
      <Label
        control={<Switch checked={uppercaseChecked} onChange={handleUppercaseChange} />}
        label="Uppercase"
      />
      <Label
        control={<Switch checked={lowercaseChecked} onChange={handleLowercaseChange} />}
        label="Lowercase"
      />
      <Label
        control={<Switch checked={numbersChecked} onChange={handleNumbersChange} />}
        label="Numbers"
      />
      <Label
        control={<Switch checked={specialCharsChecked} onChange={handleSpecialCharsChange} />}
        label="Special Characters"
      />
    </FormGroup>
  );
}

export default Checkboxes;
