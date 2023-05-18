import { Dimensions, FlatList, Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { observer } from "mobx-react-lite";
import { Theme } from "../../config/Theme";
import { Games } from "../../config/Games";
import Item from "./Item";
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get("screen");
const GamesScreen = ({ navigation, route: { params } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.category}>{params.category}</Text>
      <FlatList
        data={Games.filter(el => el.category === params.category)}
        renderItem={({ item, index }) => <Item item={item} key={index} />} />
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <Ionicons name="md-return-down-back-outline" size={24} color={Theme.text} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg,
  },
  category: {
    color: Theme.text,
    alignSelf: 'center',
    textAlign: 'center',
    maxWidth: "75%",
    fontSize: 27,
    fontWeight: '700',
    marginVertical: 10
  },
  backBtn: {
    position: 'absolute',
    top: 55,
    left: 10
  }
});

export default observer(GamesScreen);
