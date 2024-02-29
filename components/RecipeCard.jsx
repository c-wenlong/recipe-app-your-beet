import { React, useEffect, useState } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

function RecipeCard({ recipeId, imgName }) {
  const [recipe, setRecipe] = useState({});
  const PORT = process.env.PORT || 3000; // PORT
  const imgUrl = `http://localhost:${PORT}/images/${imgName}`;

  useEffect(() => {
    fetch(`http://localhost:${PORT}/api/recipes/${recipeId}`)
      .then((response) => response.json())
      .then((data) => {
        setRecipe(data);
      })
      .catch((error) => console.error(error));
  }, [recipeId]); // Depend on recipeId to refetch if it changes

  // handles navigation
  const navigation = useNavigation();

  function handleOpenRecipe() {
    console.log("passed recipe: ", recipe);
    console.log("passed img: ", imgUrl);
    navigation.navigate("RecipeDetails", {
      recipeDetails: recipe,
      imgUrl: imgUrl,
    });
  }

  return (
    // Card view of the brief description of recipes
    <TouchableOpacity style={styles.container} onPress={handleOpenRecipe}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.description}>
          Prep Time: {recipe.time} • Difficulty: {recipe.difficulty}
        </Text>
        {/* Displaying the first few ingredients as a preview */}
        <Text style={styles.description}>
          Ingredients:
          {recipe.ingredients &&
            recipe.ingredients.slice(0, 2).join(", ") + "..."}
        </Text>
        {/* Displaying the first few steps as a preview */}
        <Text style={styles.description}>
          Steps:
          {recipe.steps && recipe.steps.slice(0, 2).join(", ") + "..."}
        </Text>
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
    marginBottom: 16,
    elevation: 3, // for Android shadow
    shadowOpacity: 0.1, // for iOS shadow
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    borderWidth: 1,
    borderColor: "lightgrey",
  },
  image: {
    width: "100%",
    height: 200, // Fixed height for consistency
  },
  contentContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: "lightgrey",
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
