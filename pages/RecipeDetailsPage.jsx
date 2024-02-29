import { useState } from "react";
import {
  Text,
  View,
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
      <Text style={styles.title}>{recipeDetails.title}</Text>
      <ScrollView style={(flex = 1)}>
        <Image source={{ uri: imgUrl }} style={styles.image} />
        <View style={styles.contentContainer}>
          <Text style={styles.subtext}>
            Prep Time: {recipeDetails.time} • Difficulty:{" "}
            {recipeDetails.difficulty}
          </Text>
          {/* Displaying the ingredients */}
          <CheckList
            onCheck={(id) => handleCheck(`ingredient-${id}`)}
            checkedItems={checkedItems}
            itemType="ingredient"
            items={recipeDetails.ingredients}
            key={`ingredient${recipeDetails.id}`}
          />
          {/* Displaying the steps */}
          <CheckList
            onCheck={(id) => handleCheck(`step-${id}`)}
            checkedItems={checkedItems}
            itemType="step"
            items={recipeDetails.steps}
            key={`step${recipeDetails.id}`}
          />
          {/* Displaying the timer */}
          <TimerControl />
        </View>
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
    marginVertical: 20,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#333",
    padding: 10,
  },
  subtext: {
    fontSize: 14,
    color: "green",
    paddingHorizontal: 10,
    fontStyle: "italic",
  },
  description: {
    fontSize: 20,
    color: "#666",
  },
});
