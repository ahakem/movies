import React from "react";

import { Provider } from "react-redux";
import Layout from "./componenets/layout";
import { useStore } from "./store";
import Movies from "./screens/Movies";
import Favorites from "./screens/Favorites"
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {  ThemeProvider,  } from '@mui/material/styles';
import {theme} from './config/theme'
export default function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <Router>
      <ThemeProvider theme={theme}>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Movies />
            </Route>
            <Route exact path="/fav">
              <Favorites/>
            </Route>
            <Route path="*">
              <center>No found page Goes here!</center>
            </Route>
          </Switch>
        </Layout>
        </ThemeProvider>
      </Router>
    </Provider>
  );
}
