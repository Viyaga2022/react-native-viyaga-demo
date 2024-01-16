import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from './screens/homeScreen/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import WebviewScreen from './screens/webviewScreen/WebviewScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
// ANDROID APP ID: viyagamohan.reactnativeviyagademo

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='auto' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title:"Viyaga WebView"}}/>
          <Stack.Screen name="WebView" component={WebviewScreen} 
          options={{ title: "Viyaga Software Solutions",  headerTitleAlign: 'center'}} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({

});
