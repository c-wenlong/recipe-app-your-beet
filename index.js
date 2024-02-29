const express = require("express");
const app = express(); // CRUD requests using express
const PORT = process.env.PORT || 3000; // PORT

// Assuming recipes.json is in the same directory as your server
const recipes = require("./assets/recipes.json");

// takes url, request and response
app.get("/api/recipes", (req, res) => {
  res.json(recipes);
});

app.get("/api/recipes/:id", (req, res) => {
  const id = req.params.id;
  const recipe = recipes.recipes.find((recipe) => recipe.id === id);
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ error: "Recipe not found" });
  }
});

app.use("/images", express.static("assets/images"));

app.listen(PORT, () => {
  console.log(`Recipe API running at http://localhost:${PORT}`);
});

module.exports = { PORT };
