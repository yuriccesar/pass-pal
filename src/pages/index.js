import React from "react";
import Animation from "../components/Animation";
import App from "../components/App";
import styled from "styled-components";
import { Grid } from "@material-ui/core";
import "../pages/index.css";


const AppContainer = styled.div`
  height: 100vh;
  background: black;
  display: flex;
  align-items:center;
  justify-content: center;
  padding: 40px;
`;

const Content = styled.div`
content: '';
color: white;
padding: 40px;
font-size: 26px;
text-align: center;
letter-spacing: 
`

function index() {
  return (
    <Grid container>
      <Grid item xs={12} md={6}>
        <AppContainer>

          <Content>
          PassPal is a Password Management Tool desinged to simplify security and protect your sensive data. It is the easiest way to share and manage passwords within your business.
          </Content>
          <Animation />
        </AppContainer>
      </Grid>
      <Grid item xs={12} md={6}>
        <Animation />
        <App />
      </Grid>
    </Grid>
  );
}

export default index;
