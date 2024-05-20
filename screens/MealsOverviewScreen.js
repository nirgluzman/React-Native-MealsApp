import { useLayoutEffect } from 'react';

// useRoute is a hook which gives access to route object. It's useful when you cannot pass the route prop into the component directly, or don't want to pass it in case of a deeply nested child.
// useRoute() returns the route prop of the screen it's inside.
// import { useRoute } from '@react-navigation/native';

import MealsList from '../components/MealsList/MealsList.js';

import { MEALS, CATEGORIES } from '../data/dummy-data';

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
  // we can move categoryTitle outside useLayoutEffect block and wrap it in the useMemo hook; see https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/31197708?%24deeplink_path=udemy%3A%2F%2Fdiscover%3Fredirect%3Ddiscussions%26courseId%3D1436092%26discussionId%3D21822106&~channel=email&~stage=published&utm_campaign=email&utm_medium=email&utm_source=sendgrid.com&_branch_match_id=1321085568133348184&_branch_referrer=H4sIAAAAAAAAA02P62rDMAyFn8b5l6R1SnaBMAZbYX8Ge4Kg2losajvGl4a9%2FeR2bAODrE%2FH1jkm55Ae%2B75odF8dhNBZ8uf%2BHbePginT6p%2BEPGjEUPkcIJvpqhXDs5BHPpqSWi8YxXCMqCmiymJ4qbSkxO%2BTkKNaS0z4pnmwPwzj7kEy%2FJNcB3J%2FL%2BV%2BNzbi7lUZ8B7thA7IVpAyLDiFcrKUDOqGPX2CtSdQ57lEO5ka49fStm3dLZBaHfe39XyJCCq3HjJdsM0G2xAZkALbLoV0lViE6Lk2JbtZgQtAi%2F8xUpHjjMX9A4k%2FVzgl9HqJpOvKb3%2FMC9NVAQAA#questions/21822106/
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(category => category.id === catId).title;

    // update the screen's options, https://reactnavigation.org/docs/navigation-prop/
    navigation.setOptions({
      title: categoryTitle
    });
  }, [catId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
