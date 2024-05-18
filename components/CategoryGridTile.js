import { StyleSheet, Pressable, Text, View, Platform } from 'react-native';

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#ccc' }} // enable a visual touch feedback effect in Android devices.
        style={({ pressed }) => [styles.button, pressed ? styles.buttonPressed : null]}
        onPress={onPress}>
        <View
          style={[
            styles.innerContainer,
            { backgroundColor: color } // use the color prop to set the background color of the inner container. it will also get the opacity effect when pressed.
          ]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1, // take up all available space.
    margin: 16,
    height: 150,
    borderRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // to make sure that the ripple effect does not go beyond the rounded corners (Android only).
    // Android - shadow
    elevation: 4,
    // iOS - shadow
    backgroundColor: 'white', // we must define this property to get the shadow effect in iOS.
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8
  },

  button: {
    flex: 1
  },

  buttonPressed: {
    opacity: 0.5
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
