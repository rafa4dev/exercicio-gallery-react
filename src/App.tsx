import { Footer } from './components/Footer';
import { Header } from './components/Header/Header';
import * as C from './GlobalStyles';
import {RouterList} from './Routes';

function App() {

  return (
      <C.Container>
        <Header />
        <RouterList />
        <Footer />
      </C.Container>
  )
}

export default App
