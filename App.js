import React, { Component } from "react";

import { Spinner } from "native-base";
import Welcome from "./components/Welcome";


import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

//redux
import store from "./redux/reducers";
import { Provider } from "react-redux";

//components
import LoginForm from "./components/LoginForm";
import AddChannels from "./components/AddChannels";

export default class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
    });
    this.setState({ loading: false });
  }

  render() {

    console.disableYellowBox = true;
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Provider store={store}>
        <Welcome />
      </Provider>
    );

  }
}
