import React from "react";

import { Provider } from "react-redux";
import Layout from "./componenets/layout";
import { useStore } from "./store";
import Movies from "./screens/Movies";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Route exact path="/">
            <Movies />
          </Route>
          <Route exact path="/fav">
            <h1>will show fav here</h1>
          </Route>
        </Layout>
      </Router>
    </Provider>
  );
}
