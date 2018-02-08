import React from "react";

import Store from "./src/Store";

import { Header, CryptorContainer } from "./src/components";
import { View } from "react-native";
import { Provider } from "react-redux";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <View style={{ flex: 1 }}>
          <Header />
          <CryptorContainer />
        </View>
      </Provider>
    );
  }
}
