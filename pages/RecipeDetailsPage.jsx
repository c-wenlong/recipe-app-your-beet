import { useState } from "react";
import {
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import CheckList from "../components/CheckList";
import TimerControl from "../components/Timer";

const RecipeDetailsPage = ({ route }) => {
  const { recipeDetails, imgUrl } = route.params;
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (key) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <ScrollView style={styles.contentContainer}>
        <Text style={styles.title}>{recipeDetails.title}</Text>
        <Text style={styles.subtext}>
          Prep Time: {recipeDetails.time} • Difficulty:{" "}
          {recipeDetails.difficulty}
        </Text>
        {/* Displaying the timer */}
        <TimerControl />
        {/* Displaying the ingredients */}
        <CheckList
          onCheck={(id) => handleCheck(`ingredient-${id}`)}
          checkedItems={checkedItems}
          itemType="ingredient"
          items={recipeDetails.ingredients}
          key={`ingredient${recipeDetails.id}`}
        />
        <CheckList
          onCheck={(id) => handleCheck(`step-${id}`)}
          checkedItems={checkedItems}
          itemType="step"
          items={recipeDetails.steps}
          key={`step${recipeDetails.id}`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RecipeDetailsPage;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensures SafeAreaView fills the entire screen
    marginTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight, // Adjust top margin for Android
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    height: 200, // Fixed height for consistency
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  subtext: {
    fontSize: 14,
    color: "#666",
  },
  description: {
    fontSize: 20,
    color: "#666",
  },
});
