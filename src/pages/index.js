import React from "react";
import {Link} from "gatsby"
import Animation from "../components/Animation"
import styled from "styled-components";
import "../pages/index.css"


const AppContainer = styled.div`
  padding: 20px;
  max-width: 1024px;
  margin: 0 auto;
`;

const Hero = styled.div`
  background: black;
  content: '';
  height: 25vh;
  padding: 0;
  margin: 0;
`

function index() {
  return (
    <>
    <Hero />
    <Animation/>
    <AppContainer>  
      <Link to = "generate">Generate</Link>
    </AppContainer>
    </>
  );
}

export default index;
