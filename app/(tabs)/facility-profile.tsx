import React from "react";
import { Text, View } from "@/components/Themed";
import {
  StyleSheet,
  Animated,
  Image,
  ImageBackground,
  Pressable,
} from "react-native";
import { useEffect, useState, useRef } from "react";
import { LinearGradient } from "expo-linear-gradient";

const maxLineNumber = 5;
const reviewMaxLines = 2;

const blobimage = { uri: "/assets/images/blob.png" };

function Review() {
  return (
    <View style={styles.review}>
      <Image
        style={{ height: 60, width: 60, borderRadius: 40 }}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg",
        }}
      />
      <Text style={[styles.paragraph, { fontWeight: "bold" }]}>Username</Text>
      <Image
        style={{ height: 15, width: 15, alignSelf: "center" }}
        source={require("@/assets/images/star_filled.png")}
      />
      <Image
        style={{ height: 15, width: 15, alignSelf: "center" }}
        source={require("@/assets/images/star_filled.png")}
      />
      <Image
        style={{ height: 15, width: 15, alignSelf: "center" }}
        source={require("@/assets/images/star_filled.png")}
      />
      <Image
        style={{ height: 15, width: 15, alignSelf: "center" }}
        source={require("@/assets/images/star_filled.png")}
      />
      <Image
        style={{ height: 15, width: 15, alignSelf: "center" }}
        source={require("@/assets/images/star_filled.png")}
      />
      <Text style={styles.paragraph} numberOfLines={reviewMaxLines}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
}

function CollapseView() {
  const [collapsed, setCollapsed] = useState(true);
  const [maxLines, setMaxLines] = useState(2);
  const animationHeight = useRef(new Animated.Value(0)).current;

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const collapseView = () => {
    Animated.timing(animationHeight, {
      duration: 100,
      toValue: 80,
      useNativeDriver: false,
    }).start();
  };

  const expandView = () => {
    setMaxLines(maxLineNumber);
    Animated.timing(animationHeight, {
      duration: 1000,
      toValue: 1000,
      useNativeDriver: false,
    }).start();
  };

  useEffect(() => {
    if (collapsed) {
      collapseView();
    } else {
      expandView();
    }
  }, [collapsed]);

  const changeText = () => {
    if (collapsed) {
      return "Expand";
    } else {
      return "Collapse";
    }
  };

  return (
    <View style={{ overflow: "hidden", backgroundColor: "none" }}>
      <Animated.View style={{ maxHeight: animationHeight }}>
        <Text
          style={[
            styles.paragraph,
            { backgroundColor: "#CDEEEA", padding: 20 },
          ]}
          numberOfLines={maxLines}
        >
          Hours: ##:## - ##:## {"\n"}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </Animated.View>
      <LinearGradient
        // Button Linear Gradient
        colors={["#6da798", "#40a4a9"]}
        end={{ x: 0.1, y: 0.2 }}
        style={styles.button}
      >
        <Pressable style={[]} onPress={toggleCollapsed}>
          <Text style={[styles.body, { fontWeight: "bold" }]}>
            {changeText()}
          </Text>
        </Pressable>
      </LinearGradient>

      <View
        style={styles.separator}
        lightColor="#aaa"
        darkColor="rgba(255,255,255,0.1)"
      />
      <LinearGradient
        // Button Linear Gradient
        colors={["#6da798", "#40a4a9"]}
        end={{ x: 0.1, y: 0.2 }}
        style={[styles.image, { padding: 20, borderRadius: 15 }]}
      >
        <View style={[styles.row, { padding: 10 }]}>
          <Review />
          <View
            style={[{ width: "10%", margin: 10, justifyContent: "flex-start" }]}
          >
            <LinearGradient
              colors={["#F9FEFD", "#DEF4EF"]}
              end={{ x: 0.1, y: 0.2 }}
              style={[styles.button]}
            >
              <Pressable style={[styles.smallbutton]}>
                <Text style={[{ color: "#000000" }]}>{"See more"}</Text>
              </Pressable>
              <View style={styles.row}></View>
            </LinearGradient>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

export default function TabFacilityProfileScreen() {
  return (
    <View style={styles.container}>
      <View
        style={[{ flex: 0.9, alignItems: "center", backgroundColor: "none" }]}
      >
        <ImageBackground
          source={blobimage}
          style={{
            width: 953,
            height: 1069,
            position: "absolute",
            top: 0,
            left: -200,
          }}
          imageStyle={{
            resizeMode: "cover",
            alignSelf: "flex-end",
          }}
        ></ImageBackground>
        <Text style={styles.title}>Facility Name</Text>
        <Image
          source={{
            uri: "https://images.adsttc.com/media/images/6179/94c7/f91c/81a4/f700/00c2/newsletter/WMC-Expo-2---Architectural-Photographer-Michael-Tessler---11.jpg?1635357877",
          }}
          style={{ height: 250, width: 250 }}
        />
        <View
          style={[
            {
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "none",
            },
          ]}
        >
          <Image
            style={{ height: 30, width: 30 }}
            source={require("@/assets/images/star_filled.png")}
          />
          <Image
            style={{ height: 30, width: 30 }}
            source={require("@/assets/images/star_filled.png")}
          />
          <Image
            style={{ height: 30, width: 30 }}
            source={require("@/assets/images/star_filled.png")}
          />
          <Image
            style={{ height: 30, width: 30 }}
            source={require("@/assets/images/star_filled.png")}
          />
          <Image
            style={{ height: 30, width: 30 }}
            source={require("@/assets/images/star_filled.png")}
          />
          <Text style={styles.body}> 5.0 stars</Text>
        </View>
      </View>
      <View
        style={[{ flex: 1, marginHorizontal: 40, backgroundColor: "none" }]}
      >
        <CollapseView />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF8F7",
  },
  image: {
    flex: 1,
  },
  outer_body_container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 40,
  },

  body_container: {
    flex: 0.5,
    alignItems: "flex-start",
    justifyContent: "center",
    marginHorizontal: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 20,
  },
  body: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "100%",
    alignSelf: "center",
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
  },
  row: {
    flex: 0.1,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "none",
  },
  review: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundColor: "none",
  },
  button: {
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingHorizontal: 60,
    paddingVertical: 10,
    width: "80%",
  },
  smallbutton: {
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 4,
  },
});
