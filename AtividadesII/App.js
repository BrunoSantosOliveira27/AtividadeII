import {SafeAreaView} from 'react-native';

import CalculoHoraExtra from './Components/CalculoHoraExtra'
import Pedagio from './Components/Pedagio';
import TarifaLuz from './Components/ContaDeLuz';
import Tabuleiro from './Components/Tabuleiro';

export default function App() {
  return (
    <SafeAreaView>
      <CalculoHoraExtra/>
    </SafeAreaView>
  );
}

