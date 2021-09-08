import * as React from "react";
import {
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";

import constants from "../../constants";

const { height, width } = Dimensions.get("screen");

const Card = (props): JSX.Element => {
  const {
    id,
    mass,
    onPress,
    kind,
    name,
    agency,
    image,
    cost_per_launch,
    description,
  } = props;

  return (
    <TouchableOpacity
      disabled={kind === "rocket"}
      onPress={() => onPress && onPress(id)}
      key={id}
      style={styles.container}
    >
      {kind === "rocket" && (
        <>
          <Text>{"Name: " + name}</Text>
          <Text>{constants.rockets.mass + mass.kg}</Text>
          <Text>{"Const per launch: " + cost_per_launch}</Text>
          <Text>{"Description: " + description}</Text>
        </>
      )}
      {kind === "members" && (
        <>
          <Text>{constants.members.name + name}</Text>
          <Text>{constants.members.agency + agency}</Text>
        </>
      )}
      {kind === "member" && (
        <>
          <Text>{constants.members.name + name}</Text>
          <Text>{constants.members.agency + agency}</Text>
          <Image style={styles.image} source={{ uri: image }} />
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderWidth: 1,
    elevation: 5,
    margin: 10,
    minHeight: height / 8,
    padding: 10,
    width: width / 1.25,
  },
  image: {
    height: height / 4,
    width: width / 4,
  },
});

export default Card;
