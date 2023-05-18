import { Dimensions, FlatList, Image, Platform, Pressable, SafeAreaView, StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { Theme } from "../../config/Theme";
import Item from "./Item";
import { Categories } from "../../config/Categories";
import Carousel from "react-native-banner-carousel";
import Ionicons from "react-native-vector-icons/Ionicons";

const {width} = Dimensions.get("screen")
const MainScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        autoplay
        autoplayTimeout={3000}
        loop
        index={0}
        pageSize={width}>
        {Theme.banners.map((item, index) => <Image key={index} source={item} style={styles.banner} />)}
      </Carousel>
      <FlatList
        data={Categories}
        numColumns={2}
        columnWrapperStyle={{justifyContent: "space-evenly"}}
        renderItem={({ item, index }) => <Item item={item} key={index} />} />
      <Pressable
        onPress={() => navigation.navigate("SettingsScreen")}
        style={styles.settingsBtn}>
        <Ionicons name="settings-outline" size={24} color={Theme.text} />
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg,
  },
  banner: {
    width: width - 20,
    height: (width - 20) * 0.45,
    alignSelf: 'center'
  },
  settingsBtn: {
    position: 'absolute',
    top: 55,
    right: 10
  }
});

export default observer(MainScreen);
