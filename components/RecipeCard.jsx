import { React, useEffect, useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";

function RecipeCard(recipeId) {
  console.log(recipeId);
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3000/api/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((data) => setRecipe(data))
      .catch((error) => console.error(error));
  }, [recipeId]); // Depend on recipeId to refetch if it changes
  /**const handleOpenRecipe = () => {
    navigation.navigate("recipeDetails", { recipeDetails: recipeDetails });
  };
  */
  console.log(recipe);
  return (
    // Card view of the brief description of recipes
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log("You have pressed the recipe!")}
    >
      <Image
        source={
          recipe.image
            ? { uri: recipe.image }
            : require("../assets/default.jpg")
        }
        style={styles.image}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>
          Time: {recipe.time} • Difficulty: {recipe.difficulty}
        </Text>
        {/* Displaying the first few ingredients as a preview */}
        <Text style={styles.description}>
          Ingredients: {recipe.ingredients}
        </Text>
        {/* Optionally, display a preview of steps or other details */}
      </View>
    </TouchableOpacity>
  );
}

export default RecipeCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 8,
    elevation: 3, // for Android shadow
    shadowOpacity: 0.1, // for iOS shadow
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: "100%",
    height: 200, // Fixed height for consistency
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
});
