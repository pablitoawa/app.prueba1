import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import WelcomeScreen from '../Screens/WelcomeScreen';
import RegistroGastosScreen from '../Screens/RegistroGastosScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InformacionScreen from '../Screens/InformacionScreen';
import EditarRegistrosScreen from '../Screens/EditarRegistrosScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={WelcomeScreen}/>
      <Stack.Screen name="Tabs" component={MyTabs} />
    </Stack.Navigator>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Gastos" component={RegistroGastosScreen} />
      <Tab.Screen name="Información" component={InformacionScreen} />
      <Tab.Screen name="Editar" component={EditarRegistrosScreen} />
    </Tab.Navigator>
  );
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
