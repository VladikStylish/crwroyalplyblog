import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "../screens/MainScreen/MainScreen";
import GamesScreen from "../screens/GamesScreen/GamesScreen";
import CardScreen from "../screens/CardScreen/CardScreen";
import SettingsScreen from "../screens/SettingsScreen/SettingsScreen";
import WebViewScreen from "../screens/WebViewScreen/WebViewScreen";

const Stack = createStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GamesScreen" component={GamesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CardScreen" component={CardScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WebViewScreen" component={WebViewScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
