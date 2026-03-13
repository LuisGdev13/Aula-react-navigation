import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Services from "../screens/Services";

const Stack = createNativeStackNavigator()

export default function StackRoutes(){
    return(
        <Stack.Navigator initialRouteName="home" screenOptions={{
            headerStyle:{backgroundColor:"gray"},
            headerTitleAlign:"center",
            headerTintColor:"white",
            headerTitleStyle:{fontSize:25}
            }}>
            <Stack.Screen name="home" component={Home} options={{title:"Inicio"}}/>
            <Stack.Screen name="login" component={Login} options={{title:"Login"}}/>
            <Stack.Screen name="services" component={Services} options={{title:"Serviços"}}/>
        </Stack.Navigator>
    )
}