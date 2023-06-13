import { StatusBar } from 'expo-status-bar';
import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { Container, Text } from "./src/component";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default () => {
  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.dark}>
        <Container>
          <StatusBar style="light" />
          <Text style={{textTransform: 'lowercase'}}>Open up App.js to start working on your app!</Text>
        </Container>
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
