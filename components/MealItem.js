import { StyleSheet, Image, Pressable, Text, View, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import MealDetails from '../components/MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  // useNavigation hook to give access to navigation object.
  // It's useful when you cannot pass the navigation prop into the component directly, or don't want to pass it in case of a deeply nested child.
  // useNavigation() returns the navigation prop of the screen it's inside.
  const navigation = useNavigation();

  // navigate to MealDetail screen.
  function selectMealHandler() {
    navigation.navigate('MealDetail', {
      mealId: id // pass the mealId to the MealDetail screen.
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }} // enable a visual touch feedback effect in Android devices.
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)} // enable opacity effect when pressed.
        onPress={selectMealHandler}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    // 'overflow' propery depends on the platform !
    // iOS - must be 'visible' for the shadow effect to be noticed.
    // Android - 'hidden' to make sure that no content is going outside the rounded corners (such as shadow and ripple effect).
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    // Android - shadow
    elevation: 4,
    // iOS - shadow
    backgroundColor: 'white', // we must define this property to get the shadow effect in iOS.
    shadowColor: 'black',
    shadowOpacity: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 16
  },

  // to enable rounded corners on iOS (since overflow: 'visible' in mealItem on this platform).
  innerContainer: {
    borderRadius: 8,
    overflow: 'hidden'
  },

  buttonPressed: {
    opacity: 0.5
  },

  image: {
    width: '100%',
    height: 200
  },

  title: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    margin: 8
  }
});
