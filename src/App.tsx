import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AppContextProvider } from './components/AppContext/AppContext';
import MainRouts from './routes';
import { createLocalStorage, getAllLocalStorage } from './services/storage';

function App() {

  !getAllLocalStorage() && createLocalStorage();

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Layout>
            <MainRouts />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
