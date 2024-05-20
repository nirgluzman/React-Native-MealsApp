import { useLayoutEffect, useContext } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';

import MealDetails from '../components/MealDetails.js';
import Subtitle from '../components/MealDetail/Subtitle.js';
import List from '../components/MealDetail/List.js';
import IconButton from '../components/IconButton.js';

import { FavoritesContext } from '../store/context/favorites-context.js';

import { MEALS } from '../data/dummy-data';

function MealDetailScreen({ route, navigation }) {
  // get the mealId from the route params; see route prop reference, https://reactnavigation.org/docs/route-prop
  const { mealId } = route.params;

  // find the meal with the given id.
  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  // import context provider for favorites
  const favMealsCtx = useContext(FavoritesContext);

  // check if the meal is a favorite
  const mealIsFavorite = favMealsCtx.ids.includes(route.params.mealId);

  function changeFavoriteStatusHandler() {
    // toggle favorite status
    if (mealIsFavorite) {
      favMealsCtx.removeFavorite(mealId);
    } else {
      favMealsCtx.addFavorite(mealId);
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      // function which returns a React Element to display on the right side of the header.
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? 'star' : 'star-outline'}
            color='white'
            onPress={changeFavoriteStatusHandler}
          />
        );
      }
    });
  }, [navigation, changeFavoriteStatusHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32
  },

  // we must set the image size in order to display images fetched from url.
  image: {
    width: '100%',
    height: 350
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 8,
    textAlign: 'center',
    color: 'white'
  },

  detailText: {
    color: 'white'
  },

  listOuterContainer: {
    alignItems: 'center'
  },

  listContainer: {
    width: '80%'
  }
});
