import { React, useState, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
  Text,
  View,
  StatusBar,
} from "react-native";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/recipes")
      .then((response) => response.json())
      .then((data) => setRecipes(data.recipes))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.title}>Here are some recipes.</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        {recipes.map((recipe) => {
          return (
            <RecipeCard
              recipeId={recipe.id}
              imgName={recipe.image}
              key={recipe.id}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
export default HomePage;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures SafeAreaView fills the entire screen
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight, // Adjust top margin for Android
    backgroundColor: "white",
  },
  header: {
    justifyContent: "centre",
    alignItems: "left",
    flexDirection: "column",
    paddingTop: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "blue",
    paddingLeft: 20,
  },
  scrollView: {
    flex: 1,
    backgroundColor: "white",
  },
});
