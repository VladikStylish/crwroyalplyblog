import MainNavigation from "./navigation";
import { StatusBar } from "react-native";

const MainApp = () => {
  return (
    <>
      <MainNavigation />
      <StatusBar barStyle={"light-content"} />
    </>
  )
};

export default MainApp;
