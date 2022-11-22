import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import Routes from './src/routes/index'

registerRootComponent(App);
export default function App() {
  return (
    <Routes/>
  );
}


