import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Services from "../screens/Services";
import {Feather} from "@expo/vector-icons" // importando a biblioteca de icons
import {SimpleLineIcons} from "@expo/vector-icons" 
import {MaterialIcons} from "@expo/vector-icons"


const Tab = createBottomTabNavigator()

export default function TabRoutes(){
  return(
    <Tab.Navigator screenOptions={{headerShown:false}}>
      <Tab.Screen name="home" component={Home} options={{tabBarIcon:()=><Feather name="home" color="black" size ={20} />}} /> 
      <Tab.Screen name="login" component={Login} options={{tabBarIcon:()=><SimpleLineIcons name="login" color="black" size={20} /> }} />
      <Tab.Screen name="services" component={Services} options={{tabBarIcon:()=><MaterialIcons name="miscellaneous-services" color="black" size={20} /> }} />
    </Tab.Navigator>
  )
}