import { Dimensions, Image, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react-lite";
import { Theme } from "../../config/Theme";
import { AirbnbRating, Rating } from "react-native-ratings";
import Ionicons from "react-native-vector-icons/Ionicons";

// const { width } = Dimensions.get("screen");
const size = Dimensions.get("screen").width - 20;
const CardScreen = ({ navigation, route: { params: { game } } }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.light}>
        <Image blurRadius={20} style={styles.background} source={game.image} />
        <Text style={styles.category}>{game.title}</Text>
        {/*<Image style={styles.light} source={Theme.light} />*/}
        <Image style={styles.logo} source={game.image} />
        <View style={styles.mask} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.text}>{game.description}</Text>
        <AirbnbRating />
      </ScrollView>
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
    alignSelf: "center",
    textAlign: "center",
    maxWidth: "75%",
    fontSize: 27,
    fontWeight: "700",
    marginVertical: 10,
    position: "absolute",
    top: 0,
  },
  light: {
    width: size,
    height: size,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    width: size - 100,
    height: size - 100,
    borderRadius: 10,
  },
  background: {
    width: size + 20,
    height: size,
    // borderRadius: 10,
    opacity: 0.3,
  },
  mask: {
    width: size + 20,
    height: 30,
    backgroundColor: Theme.bg,
    bottom: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
  },
  title: {
    color: Theme.text2,
    fontSize: 27,
    fontWeight: "700",
    marginHorizontal: 20,
    marginVertical: 5,
  },
  text: {
    color: Theme.text2,
    fontSize: 16,
    fontWeight: "400",
    marginHorizontal: 20,
  },
  backBtn: {
    position: 'absolute',
    top: 55,
    left: 10
  }
});

export default observer(CardScreen);
