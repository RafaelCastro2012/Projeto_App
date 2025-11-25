import MorangodoAmor from "../screens/MorangodoAmor";
import Home from "../screens/Home";
import BalaBaiana from "../screens/BalaBaiana";
import BalaBaianadeMaracuja from "../screens/BalaBaianadeMaracuja";
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Esse container de navegação serve para o usuário navegar entre as principais telas do app (depois de escolher o tipo de usuário)
export default function MainNavigation() {

    const Stack = createNativeStackNavigator();


    return (
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="MorangodoAmor" component={MorangodoAmor} options={{ headerShown: false }} />
             <Stack.Screen name="BalaBaiana" component={BalaBaiana} options={{ headerShown: false }} />
            <Stack.Screen name="BalaBaianadeMaracuja" component={BalaBaianadeMaracuja} options={{ headerShown: false }} />
          </Stack.Navigator>
    )
    // TODO: Criar userSelectScreen para definir navegação do usuário
}