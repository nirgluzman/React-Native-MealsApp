import { FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
    />
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES} // an array (or array-like list) of items to render.
      keyExtractor={item => item.id} // used to extract a unique key for a given item at the specified index.
      renderItem={renderCategoryItem} // function called for each item in the data array and returns a React component (JSX) to be rendered.
      numColumns={2} // number of columns to display.
    />
  );
}

export default CategoriesScreen;
