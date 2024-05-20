import { StyleSheet, View, FlatList } from 'react-native';

import MealItem from './MealItem.js';

function MealsList({ items }) {
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
        data={items} // an array (or array-like list) of items to render.
        keyExtractor={item => item.id} // used to extract a unique key for a given item at the specified index.
        renderItem={renderMealItem} // function called for each item in the data array and returns a React component (JSX) to be rendered.
      />
    </View>
  );
}

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
});
