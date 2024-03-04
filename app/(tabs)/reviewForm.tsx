import React from "react";
import { StyleSheet, TextInput, ImageBackground } from "react-native";
import MainButton from "@/components/main_button";

import { Text, View } from "@/components/Themed";
import { useState } from "react";
import RNPickerSelect from "react-native-picker-select";
import StarRating from "react-native-star-rating-widget";

export default function TabReviewForm() {
  // location
  const [, setLocation] = useState("");

  // getting current date and time
  const currentDate = new Date();

  // description
  const [description, setDescription] = useState("");

  // add photo

  // rating
  const [rating, setRating] = useState(0);

  // post rating (submit button)
  const circleimage = { uri: "/assets/images/circle.png" };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={circleimage}
        style={{
          width: 1000,
          height: 1000,
          position: "absolute",
          top: 500,
          left: -200,
        }}
        imageStyle={{
          resizeMode: "cover",
          alignSelf: "flex-end",
        }}
      ></ImageBackground>
      <Text style={styles.title}>New Bathroom Rating</Text>

      <View style={styles.dropdown}>
        <RNPickerSelect
          placeholder={{
            label: "select a location",
            value: null,
          }}
          onValueChange={(newLocation) => setLocation(newLocation)}
          items={[
            { label: "Location 1", value: "location1" },
            { label: "Location 2", value: "location2" },
          ]}
        />
      </View>

      <Text style={styles.subtext}>{currentDate.toLocaleString()}</Text>

      <TextInput
        style={styles.input}
        placeholder="write your description..."
        placeholderTextColor="#6da798"
        value={description}
        onChangeText={setDescription}
        multiline={true}
      />

      <Text style={styles.subtext}>Rate Your Experience:</Text>
      <StarRating
        style={styles.starRating}
        rating={rating}
        onChange={setRating}
        enableHalfStar={false}
      />

      {MainButton("Post Rating", null)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#EEF8F7",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  dropdown: {
    flexDirection: "row",
    color: "white",
    fontSize: 17,
    marginTop: 20,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CDEEEA",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  icon: {
    marginLeft: "auto",
  },
  subtext: {
    fontSize: 17,
    marginBottom: 20,
    color: "#6da798",
  },
  input: {
    backgroundColor: "#CDEEEA",
    borderRadius: 20,
    padding: 10,
    width: "85%",
    minHeight: 150,
    marginBottom: 20,
  },
  button: {
    fontSize: 17,
    backgroundColor: "#6da798",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  starRating: {
    marginBottom: 20,
  },
});
