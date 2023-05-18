import WebView from "react-native-webview";
import { Pressable, SafeAreaView, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Theme } from "../../config/Theme";

export default ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: route.params.uri }} />
      <Pressable
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 80, left: 10 }}>
        <View style={{ padding: 5, borderRadius: 10, backgroundColor: Theme.bg }}>
          <Ionicons name="md-return-down-back" size={24} color={Theme.text} />
        </View>
      </Pressable>
    </SafeAreaView>
  );
}
