import * as Font from 'expo-font';

export const loadFonts = async () => {
  await Font.loadAsync({
    // Specify the name and path of your custom font files
    'Roboto-Regular': require('./Roboto-Regular.ttf'),
    'Roboto-Bold': require('./Roboto-Bold.ttf'),
  });
};
