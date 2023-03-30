import React from "react";
import { Checkbox, FormControlLabel } from "@material-ui/core";
import styled from "styled-components";

const Label = styled(FormControlLabel)`
  color: white;
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
    <>
      <Label
        control={<Checkbox checked={uppercaseChecked} onChange={handleUppercaseChange} />}
        label="Uppercase"
      />
      <Label
        control={<Checkbox checked={lowercaseChecked} onChange={handleLowercaseChange} />}
        label="Lowercase"
      />
      <Label
        control={<Checkbox checked={numbersChecked} onChange={handleNumbersChange} />}
        label="Numbers"
      />
      <Label
        control={<Checkbox checked={specialCharsChecked} onChange={handleSpecialCharsChange} />}
        label="Special Characters"
      />
    </>
  );
}

export default Checkboxes;
