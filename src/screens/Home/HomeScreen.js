import React, { useLayoutEffect } from "react";
import { FlatList, Text, View, TouchableHighlight, Image } from "react-native";
import styles from "./styles";
import {categories, recipes} from "../../data/dataArrays";
import MenuImage from "../../components/MenuImage/MenuImage";
import {getCategoryName, getNumberOfRecipes} from "../../data/MockDataAPI";

export default function HomeScreen(props) {
  const { navigation } = props;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <MenuImage
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
      headerRight: () => <View />,
    });
  }, []);

  const onPressRecipe = (item) => {
    navigation.navigate("Recipe", { item });
  };

  const renderRecipes = ({ item }) => (
    <TouchableHighlight underlayColor="rgba(73,182,77,0.9)" onPress={() => onPressRecipe(item)}>
      <View>
        <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.title}>Full Livestream</Text>
        <Text style={styles.desc}>Mixi Gaming 378 N lượt xem </Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={{backgroundColor: "#FFFFFF",flex:6}}>
      <FlatList data={recipes} renderItem={renderRecipes} keyExtractor={(item) => `${item.id}`} />
    </View>
  );
}
