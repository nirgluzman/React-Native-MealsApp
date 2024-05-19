import { FlatList } from 'react-native';

// useNavigation is a hook which gives access to navigation object. It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
// useNavigation() returns the navigation prop of the screen it's inside.
// import { useNavigation } from '@react-navigation/native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(navigation, itemData) {
  const pressHandler = () => {
    navigation.navigate(
      'MealsOverview', // name of the route to push onto the stack.
      {
        //  screen params to pass to the destination route using the 'route' prop, https://reactnavigation.org/docs/route-prop
        categoryId: itemData.item.id
      }
    );
  };
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
}

function CategoriesScreen({ navigation }) {
  return (
    <FlatList
      data={CATEGORIES} // an array (or array-like list) of items to render.
      keyExtractor={item => item.id} // used to extract a unique key for a given item at the specified index.
      renderItem={renderCategoryItem.bind(this, navigation)} // function called for each item in the data array and returns a React component (JSX) to be rendered.
      numColumns={2} // number of columns to display.
    />
  );
}

export default CategoriesScreen;
