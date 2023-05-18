import { Dimensions, Image, Pressable, StyleSheet, Text } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { Theme } from "../config/Theme";

const size = Dimensions.get("screen").width - 40
export default ({title, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={styles.container}>
      <Image blurRadius={3} style={styles.bg} source={require("../assets/images/line.png")} />
      <Text style={styles.title}>{title}</Text>
      <AntDesign name="right" size={23} color={Theme.text}/>
    </Pressable>
  )
};

// region ---styles---
const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    color: Theme.text,
    fontSize: 15,
    fontWeight: '500'
  },
  bg: {
    position: 'absolute',
    height: 35,
    width: size,
    borderRadius: 10,
  }
})
