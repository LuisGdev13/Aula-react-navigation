import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Services from "../screens/Services";
import { Feather } from "@expo/vector-icons"

const Drawer = createDrawerNavigator()

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="home" component={Home} 
            options={{
                title:"Inicio",
                drawerIcon:()=><Feather name="home"/>

            }}/>
            <Drawer.Screen name="login" component={Login} />
            <Drawer.Screen name="servicos" component={Services} />
        </Drawer.Navigator>
    )
}