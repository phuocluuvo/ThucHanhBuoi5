import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";
import {
  ArrowUturnLeftIcon,
  Bars3Icon,
  HomeIcon,
} from "react-native-heroicons/solid";
import ListScreen from "./screens/ListScreen";
import MainScreen from "./screens/MainScreen";
import SearchScreen from "./screens/SearchScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View className="flex-1 bg-white">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MainScreen">
          <Stack.Screen name="ListScreen" component={ListScreen} />
          <Stack.Screen name="MainScreen" component={MainScreen} />
          <Stack.Screen name="SearchScreen" component={SearchScreen} />
        </Stack.Navigator>
        <View className="flex-row flex fixed bottom-0 left-0 bg-cyan-500 z-10 w-full h-14 justify-between items-center px-3 py-2">
          <TouchableOpacity>
            <Bars3Icon color={"white"} fontSize={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <HomeIcon color={"white"} fontSize={30} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ArrowUturnLeftIcon color={"white"} fontSize={30} />
          </TouchableOpacity>
        </View>
      </NavigationContainer>
    </View>
  );
}
