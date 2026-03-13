import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TabRoutes from './src/routes/tab.routes';
import StackRoutes from './src/routes/stack.routes';
import { NavigationContainer } from '@react-navigation/native';
import DrawerRoutes from './src/routes/drawer.routes';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerRoutes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
