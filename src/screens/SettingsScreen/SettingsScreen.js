import { Pressable, SafeAreaView, StyleSheet, View } from "react-native";
import Item from "../../components/Item";
import { Theme } from "../../config/Theme";
import Ionicons from "react-native-vector-icons/Ionicons";

export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        onPress={() => navigation.goBack()}
        style={styles.backBtn}>
        <Ionicons name="md-return-down-back-outline" size={24} color={Theme.text} />
      </Pressable>
      <View style={{padding: 20, flex: 1, marginTop: 15}}>
        <Item
          title={'Privacy'}
          onPress={() => navigation.navigate('WebViewScreen', {uri: 'https://www.google.com.ua/'})}/>
        <Item
          title={'Cookie Policy'}
          onPress={() => navigation.navigate('WebViewScreen', {uri: 'https://www.google.com.ua/'})}/>
        <Item
          title={'Legal Information'}
          onPress={() => navigation.navigate('WebViewScreen', {uri: 'https://www.google.com.ua/'})}/>
        <Item
          title={'Contacts and Help'}
          onPress={() => navigation.navigate('WebViewScreen', {uri: 'https://www.google.com.ua/'})}/>
        <Item
          title={'Rules'}
          onPress={() => navigation.navigate('WebViewScreen', {uri: 'https://www.google.com.ua/'})}/>
      </View>
    </SafeAreaView>
  )
};

// region ---styles---
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.bg
  },
  backBtn: {
    position: 'absolute',
    top: 55,
    left: 10
  }
})
