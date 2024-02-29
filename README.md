# RecipeApp

A basic recipe app for a technical assignment by yourbeet.

## Key Features

- **Home Page**: View a list of different recipes and a brief description.
- **Recipe Details Page**: View the details of the recipe, including the full ingredients list and steps to make it.
- **Checkboxes**: Check off boxes of each ingredient/step.
- **Timer**: Manage a countdown timer to keep track of cooking process.

## Requirements

- React Native 0.63 or higher
- Node.js 12 or higher
- Yarn or npm installed
- Expo CLI install
- Android Studio(Windows) or Xcode(Mac) for running the mobile application on an emulator/simulator or a physical device

## Quickstart

Follow these steps to get the project up and running on your local machine.

1. **Clone the repository**

```sh
git clone https://github.com/c-wenlong/recipe-app-your-beet.git
cd recipe-app-your-beet
```

2. **Install dependencies**

Using npm:

```sh
npm install
```

Or using Yarn:

```sh
yarn
```

3. **Start the server**

Using node:

```sh
node index.js
```

Or using nodeon:

```sh
npm install nodemon
nodemon index.js
```

4. **Start the Metro bundler**

```sh
npx expo start
```

5. **Run the app**

On Android:

```sh
npx expo run-android
```

On iOS:

```sh
npx expo run-ios
```

## Usage

Once you enter the app, you will see an automatically generated list of recipes, exactly 4 in total. These are the default recipes, but you can change it by changing the .json file at `/assets/recipes.json`.

You can view an individual recipe by clicking into it and use the checkbox and timer functions to keep track of progress while cooking.
