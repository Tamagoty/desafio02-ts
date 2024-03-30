import { 
  ChakraProvider,
} from '@chakra-ui/react'
import { Header } from './components/Header/Header';
import { BoxLogin } from './components/BoxLogin/BoxLogin';

function App() {
  return (
    <ChakraProvider>
      <Header />
      <BoxLogin />
    </ChakraProvider>
  );
}

export default App;
