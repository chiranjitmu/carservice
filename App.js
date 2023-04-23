import React from "react";
import { View, StatusBar, SafeAreaView, StyleSheet } from "react-native";
import Header from "./components/Header";
import Hero from "./components/Hero";


function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{ paddingHorizontal: 20, flex: 1, backgroundColor: "#030306" }}
      >
        <Header />
        <Hero />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default App;
