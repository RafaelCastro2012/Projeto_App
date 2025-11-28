import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/screens/Login";
import Home from "./src/screens/Home";
import MorangodoAmor from "./src/screens/MorangodoAmor"
import BombomdeMorango from "./src/screens/BombomdeMorango"
import BalaBaianadeMaracuja from "./src/screens/BalaBaianadeMaracuja"
import Brownie from "./src/screens/Brownie"
import CocadaCremosa from "./src/screens/CocadaCremosa"
import CocadaCremosaMaracuja from "./src/screens/CocadaCremosaMaracuja"
import CopodaFelicidade from "./src/screens/CopodaFelicidade"
import EspetodeMorango from "./src/screens/EspetodeMorango"
import KitdeDoisDoces from "./src/screens/KitdeDoisDoces"
import KitdeTresDoces from "./src/screens/KitdeTresDoces"
import MorangodoAmordeMaracuja from "./src/screens/MorangodoAmordeMaracuja"
import OlhodeSogra from "./src/screens/OlhodeSogra"
import PaodeMel from "./src/screens/PaodeMel"
import PedeMoleque from "./src/screens/PedeMoleque"
import PedeMolequeNinho from "./src/screens/PedeMolequeNinho"
import QuebraQueixo from "./src/screens/QuebraQueixo"
import Cocada from "./src/screens/Cocada"
import MiniPudim from "./src/screens/MiniPudim"
import UvadoAmor from "./src/screens/UvadoAmor"
import BalaBaiana from "./src/screens/BalaBaiana"
import ListarDoce from "./src/screens/CadastrarDoce"


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListarDoce">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="ListarDoce" component={ListarDoce} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="MorangodoAmor" component={MorangodoAmor} options={{ headerShown: false }} />
        <Stack.Screen name="BombomdeMorango" component={BombomdeMorango} options={{ headerShown: false }} />
        <Stack.Screen name="BalaBaianadeMaracuja" component={BalaBaianadeMaracuja} options={{ headerShown: false }} />
        <Stack.Screen name="Brownie" component={Brownie} options={{ headerShown: false }} />
        <Stack.Screen name="CocadaCremosa" component={CocadaCremosa} options={{ headerShown: false }} />
        <Stack.Screen name="CocadaCremosaMaracuja" component={CocadaCremosaMaracuja} options={{ headerShown: false }} />
        <Stack.Screen name="CopodaFelicidade" component={CopodaFelicidade} options={{ headerShown: false }} />
        <Stack.Screen name="EspetodeMorango" component={EspetodeMorango} options={{ headerShown: false }} />
        <Stack.Screen name="KitdeDoisDoces" component={KitdeDoisDoces} options={{ headerShown: false }} />
        <Stack.Screen name="KitdeTresDoces" component={KitdeTresDoces} options={{ headerShown: false }} />
        <Stack.Screen name="MorangodoAmordeMaracuja" component={MorangodoAmordeMaracuja} options={{ headerShown: false }} />
        <Stack.Screen name="OlhodeSogra" component={OlhodeSogra} options={{ headerShown: false }} />
        <Stack.Screen name="PaodeMel" component={PaodeMel} options={{ headerShown: false }} />
        <Stack.Screen name="PedeMoleque" component={PedeMoleque} options={{ headerShown: false }} />
        <Stack.Screen name="PedeMolequeNinho" component={PedeMolequeNinho} options={{ headerShown: false }} />
        <Stack.Screen name="Cocada" component={Cocada} options={{ headerShown: false }} />
        <Stack.Screen name="MiniPudim" component={MiniPudim} options={{ headerShown: false }} />
        <Stack.Screen name="UvadoAmor" component={UvadoAmor} options={{ headerShown: false }} />
        <Stack.Screen name="BalaBaiana" component={BalaBaiana} options={{ headerShown: false }} />
        <Stack.Screen name="QuebraQueixo" component={QuebraQueixo} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>

  )
};
