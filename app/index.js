import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Redirect } from "expo-router";

// ";
if (typeof window !== 'undefined') {
    // Safe: use window here.
    window.navigator.userAgent = "ReactNative";
  }
  
const index = () => {
  return <Redirect href="/(authenticate)/login" />;
};

export default index;

const styles = StyleSheet.create({});

// -> "/"


// -> 10.7.2
// -> npx expo start -c