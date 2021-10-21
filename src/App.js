import  React from "react";

import { Provider } from "react-redux";
import Layout from "./componenets/layout";
import { useStore } from "./store";
import Movies from "./screens/Movies";
export default function App() {
  const store = useStore();

  return (
    <Provider store={store}>
      <Layout>
        <Movies/>
      </Layout>
     
    </Provider>
  );
}
