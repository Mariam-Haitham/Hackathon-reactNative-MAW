import React, { Component } from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "native-base";
import image from "../../photo2.jpg";

// NativeBase Components
import { Container } from "native-base";

// Style
import styles from "./styles";

const Welcome = () => {
  return (
    <Container>
      <View style={styles.overlay} />

      <ImageBackground style={{ width: "100%", height: "100%" }} source={image}>
        <Text
          style={{
            color: "white",
            fontSize: "50",
            fontWeight: "bold",
            textAlign: "center",
            paddingTop: 90,
            fontFamily: "Cochin"
          }}
        >
          WELCOME TO CHATR
        </Text>

        <Button
          rounded
          warning
          style={{
            width: "40%",
            height: "9%",
            marginTop: 250,
            marginLeft: 120
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: "20",
              fontWeight: "bold",
              textAlign: "center",
              marginLeft: 33
            }}
          >
            Join Now!
          </Text>
        </Button>
      </ImageBackground>
    </Container>
  );
};

export default Welcome;
