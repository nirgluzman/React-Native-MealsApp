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

- Configure a development build in cloud,
  https://docs.expo.dev/tutorial/eas/configure-development-build/

- Configure status bar, splash screen and app icon, https://docs.expo.dev/tutorial/configuration/

- Environment variables and secrets in EAS Build, https://docs.expo.dev/build-reference/variables/

- Build APKs for Android Emulators and devices, https://docs.expo.dev/build-reference/apk/

- Build for iOS Simulators, https://docs.expo.dev/build-reference/simulators/

- EAS Submit - Service for uploading and submitting an app binary to the app stores.
  https://docs.expo.dev/submit/introduction/

### Building for Android w/o Expo

- Add Android Splash screen:
  https://medium.com/viithiisys/android-perfect-way-to-create-splash-screen-ca3c5bee137f

- Configuring Android Apps:
  https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31405080#questions/21848652

- We can manage certain aspects of our Android app with the `AndroidManifest.xml` file. There we can
  configure three important things:

(1) The App name as it appears on the home screen:
https://stackoverflow.com/questions/5443304/how-to-change-an-android-apps-name

(2) The bundle identifier & package name of the app (also requires tweaking in other files):
https://developer.android.com/studio/build/application-id

(3) The permissions of the app:
https://developer.android.com/guide/topics/manifest/manifest-intro#perms

- You should also set an app version and change it with every app update. This is done in the
  build.gradle file, see: https://developer.android.com/studio/publish/versioning

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
