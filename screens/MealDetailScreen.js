import { Image, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';

import MealDetails from '../components/MealDetails.js';

function MealDetailScreen({ route }) {
  // get the mealId from the route params; see route prop reference, https://reactnavigation.org/docs/route-prop
  const { mealId } = route.params;

  // find the meal with the given id.
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} />
      <Text>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
      />
      <Text>Ingredients</Text>
      {selectedMeal.ingredients.map(ingredient => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Steps</Text>
      {selectedMeal.steps.map(step => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealDetailScreen;
