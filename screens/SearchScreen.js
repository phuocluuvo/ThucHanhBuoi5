import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import GridProduct from "../components/GridProduct";
import {
  ArrowLeftIcon,
  EllipsisHorizontalIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { SearchBar } from "react-native-screens";

export default function SearchScreen() {
  const nav = useNavigation();
  useLayoutEffect(() => {
    nav.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row fixed top-0 left-0 bg-cyan-500 z-10 w-full h-12 mt-10 justify-between  items-center">
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
          className="px-5"
        >
          <ArrowLeftIcon color={"white"} fontSize={20} />
        </TouchableOpacity>
        <View className=" flex-1 flex-row bg-white p-1">
          <MagnifyingGlassIcon color={"black"} fontSize={20} />
          <TextInput
            placeholder="Search..."
            value="Dây Cáp usb"
            className="flex-1"
          />
        </View>
        <View className="flex-[0.3] flex-row">
          <TouchableOpacity onPress={() => {}} className="flex-1 items-center">
            <ShoppingCartIcon color={"white"} fontSize={20} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <EllipsisHorizontalIcon color={"white"} fontSize={20} />
          </TouchableOpacity>
        </View>
      </View>
      <GridProduct />
    </View>
  );
}
