import { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MealsList from '../components/MealsList/MealsList.js';
import { FavoritesContext } from '../store/context/favorites-context.js';

import { MEALS } from '../data/dummy-data.js';

function FavoritesScreen() {
  // import context provider for favorites
  const favMealsCtx = useContext(FavoritesContext);

  // get favorites meals
  const favoriteMeals = MEALS.filter(meal => favMealsCtx.ids.includes(meal.id));

  if (favoriteMeals.length === 0) {
    // no favorites
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You have no favorite meals yet</Text>
      </View>
    );
  } else return <MealsList items={favoriteMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
});
