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
          return <RecipeCard recipe={recipe.id} key={recipe.id} />;
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
    backgroundColor: "red",
  },
  header: {
    // Removed flex: 1 from here
    justifyContent: "centre",
    alignItems: "left",
    flexDirection: "column",
    backgroundColor: "white",
    paddingTop: 20, // Example padding, adjust as needed
    paddingBottom: 20, // Example padding, adjust as needed
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    color: "blue",
  },
  scrollView: {
    flex: 1, // Changed this to 1 to take up the remaining space
    backgroundColor: "black",
  },
});
