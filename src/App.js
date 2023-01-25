
import './App.css';
import ItemListContainer from './components/itemListContainer';
import Mensaje from './components/Mensaje';

import NavBar from './components/navBar';

function App() {
  return (

    <>


     <NavBar></NavBar>
     <ItemListContainer greeting="LISTA DE PRODUCTOS"></ItemListContainer>
     <Mensaje></Mensaje>

     </>
  );
}

export default App;
