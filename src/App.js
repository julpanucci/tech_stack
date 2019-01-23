import React, { Component } from "react";
import { Text, SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";
import { Header } from "./components/common";
import LibraryList from "./components/LibraryList";

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <SafeAreaView>
        <Header headerText="Tech Stack"> </Header>
        <LibraryList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
