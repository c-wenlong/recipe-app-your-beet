import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./HomePage";
import RecipeDetailsPage from "./RecipeDetailsPage";

const Stack = createStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen name="Home" component={HomePage} />
    <Stack.Screen name="Recipe" component={RecipeDetailsPage} />
  </Stack.Navigator>
);

export default StackNavigator;
