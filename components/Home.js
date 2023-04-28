import { View, StatusBar } from "react-native";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";

const Home = () => {
  return (
    <View style={{ backgroundColor: "black", height: "100%" }}>
      <Header />
      <Hero />
      <StatusBar />
    </View>
  );
};

export default Home;
