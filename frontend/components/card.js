import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Card = () => {
    return(
  <View style={styles.container}>
    <TouchableOpacity style={styles.btnImagen}>
      <Image />
    </TouchableOpacity>
    <View style={styles.containerText}>
      <View style={styles.containerBtntext}>
        <TouchableOpacity style={{ width: 177 }}>
          <Text
            style={{
              fontFamily: "Arial",
              color: "#000000",
              fontSize: 16,
            }}
          >
            Kimi ni Todoke
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Arial",
            color: "#000000",
            fontSize: 16,
          }}
        >
          10/10
        </Text>
      </View>
      <Text
        style={{
          fontFamily: "Arial",
          color: "#9f9c9c",
          fontSize: 12,
        }}
      >
        lorem ipsum
        kadbgvkjafbgkjgawbgkjaebvkjbadfkjbdsahvbasdkfbvsdkjafbkjdsbvaajsdbvjadsbvkjasdvjadsbvkjadbvjadbvjdabvjdshjfhWJKFGdsfgadshgfdshgfadshgfadshg
      </Text>
      <TouchableOpacity
        style={{
          width: 22,
          height: 22,
          position: "absolute",
          right: 0,
          bottom: 0,
        }}
      >
        <FontAwesomeIcon icon={faHeart} style={{ color: "#e8546f" }} />
      </TouchableOpacity>
    </View>
  </View>);
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    display: "flex",
    flexDirection: "row",
    padding: 10,
    borderWidth: 1,
    borderColor: "#9f9c9c",
    borderRadius: 3,
    justifyContent: "center",
  },
  btnImagen: {
    backgroundColor: "#9f9c9c",
    width: 100,
    height: 100,
  },
  containerText: {
    display: "flex",
    flexDirection: "column",
    width: 240,
    height: 100,
    paddingLeft: 10,
  },
  containerBtntext: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
