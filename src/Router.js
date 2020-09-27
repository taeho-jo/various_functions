import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import MainPage from "./views/MainPage";
import RadioButton from "./views/functionViews/RadioButton";
import FileUploadAndPreview from "./views/functionViews/FileUploadAndPreview";

class Routes extends React.Component {
  render() {
    return (
        <Router>
            <Switch>
              <Main>
                <MainContainer>
                  <Route exact path="/" component={MainPage} />
                  <Route exact path="/radiobutton" component={RadioButton} />
                  <Route exact path="/imgpreview" component={FileUploadAndPreview} />
                </MainContainer>
              </Main>
            </Switch>
        </Router>
    );
  }
}
export default Routes;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  @media (max-width: 400px) {
    width: 100%;
  }
`

const MainContainer = styled.div`
  padding: 30px;
  width: 100%;
  max-width: 1200px;
  //border: 1px solid yellow;
  @media (max-width: 400px) {
    width: 100%;
    max-width: 400px;
  }
`