import { Image, Pressable, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { useNavigation } from "@react-navigation/native";

const Item = ({ item }) => {
  const navigation = useNavigation()
  return (
    <Pressable onPress={() => navigation.navigate("GamesScreen", {category: item.title})}>
      <Image style={styles.image} source={item.image} />
    </Pressable>
  )
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default observer(Item);
