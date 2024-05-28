## React Native - Meals App

### GitHub repo

- https://github.com/nirgluzman/React-Native-MealsApp.git

- https://github.com/academind/react-native-practical-guide-code.git (course)

### Start a new React Native project with Expo

https://reactnative.dev/docs/environment-setup, https://docs.expo.dev/

```bash
npx create-expo-app <project name> --template blank
```

### Expo Application Services (EAS)

https://expo.dev/eas

- EAS is a cloud build service used to build and publish React Native apps.

### React Navigation

https://reactnavigation.org/docs/getting-started

- Mandatory installations:

```bash
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

- Native Stack Navigator:

```bash
npm install @react-navigation/native-stack
```

- Bottom Tabs Navigator:

```bash
npm install @react-navigation/bottom-tabs
```

### Environment variables in Expo

https://docs.expo.dev/guides/environment-variables/

- The Expo CLI will automatically load environment variables with an `EXPO_PUBLIC_` prefix from .env
  files for use within your JavaScript code.

- Do not store sensitive info, such as private keys, in `EXPO_PUBLIC_` variables. These variables
  will be visible in plain-text in your compiled application.

### Expo SplashScreen (Loading Screen)

https://docs.expo.dev/versions/latest/sdk/splash-screen/

- Library to tell the splash screen to remain visible until it has been explicitly told to hide.

- This is useful to do tasks that will happen behind the scenes such as making API calls,
  pre-loading fonts, animating the splash screen and so on.
