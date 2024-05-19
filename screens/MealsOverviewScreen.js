import { useLayoutEffect } from 'react';

import { StyleSheet, FlatList, View } from 'react-native';

// useRoute is a hook which gives access to route object. It's useful when you cannot pass the route prop into the component directly, or don't want to pass it in case of a deeply nested child.
// useRoute() returns the route prop of the screen it's inside.
// import { useRoute } from '@react-navigation/native';

import { MEALS, CATEGORIES } from '../data/dummy-data';
import MealItem from '../components/MealItem.js';

function MealsOverviewScreen({
  // each screen component (defined by Stack.Screen) is provided with 'route' and 'navigation' prop automatically.
  route,
  navigation
}) {
  // get the categoryId from the route params; see route prop reference, https://reactnavigation.org/docs/route-prop
  const catId = route.params.categoryId;

  // filter meals by categoryId.
  const displayedMeals = MEALS.filter(mealItem => {
    return mealItem.categoryIds.indexOf(catId) >= 0; // indexOf() method of Array instances returns the first index at which a given element can be found in the array, or -1 if it is not present.
  });

  // useLayoutEffect is a hook which is called BEFORE the component is rendered, i.e. the effect is happening simultaneously when the componet is rendered.
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catId).title;

    // update the screen's options, https://reactnavigation.org/docs/navigation-prop/
    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const { item } = itemData;

    const mealItemProps = {
      id: item.id,
      title: item.title,
      imageUrl: item.imageUrl,
      duration: item.duration,
      complexity: item.complexity,
      affordability: item.affordability
    };

    return (
      <View>
        <MealItem {...mealItemProps} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals} // an array (or array-like list) of items to render.
        keyExtractor={item => item.id} // used to extract a unique key for a given item at the specified index.
        renderItem={renderMealItem} // function called for each item in the data array and returns a React component (JSX) to be rendered.
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
