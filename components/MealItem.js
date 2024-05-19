import { StyleSheet, Image, Pressable, Text, View, Platform } from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability, onPress }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }} // enable a visual touch feedback effect in Android devices.
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)} // enable opacity effect when pressed.
        onPress={onPress}>
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{duration}m</Text>
            <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
          </View>
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
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8
  },

  detailItem: {
    marginHorizontal: 4,
    fontSize: 12
  }
});
