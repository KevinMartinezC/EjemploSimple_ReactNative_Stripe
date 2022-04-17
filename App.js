import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import StripeApp from "./src/StripeApp";
import { StripeProvider } from "@stripe/stripe-react-native";
export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51KpKXaDdll6nZtIJkmLLPKeEE2dETq0ybqkFo1O8mYRZRkKGgsQoaGpdqrxh4uAzVcm65g78AneOFyd4jtEJYPw200NCb3JKpE">
      <StripeApp />
    </StripeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
