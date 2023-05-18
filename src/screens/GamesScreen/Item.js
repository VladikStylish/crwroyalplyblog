import { Image, Pressable, StyleSheet, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";
import { Theme } from "../../config/Theme";

const Item = ({ item }) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("CardScreen", {game: item})}>
      <Image style={styles.image} source={item.image} />
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 190,
    height: 190,
    borderRadius: 10,
    marginVertical: 10,
    alignSelf: 'center',
  },
  title: {
    color: Theme.text2,
    fontSize: 27,
    fontWeight: "700",
    marginHorizontal: 20,
    // marginVertical: 5,
    alignSelf: 'center',
    marginBottom: 15,
    maxWidth: 190,
    textAlign: 'center'
  },
});

export default observer(Item);
