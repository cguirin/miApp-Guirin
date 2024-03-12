import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navegador from './components/navbar/Navbar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import FormularioRegistro from './components/formulario/Formulario';
import Cart from './components/cart/Cart';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navegador />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting="Destacadas" />} />
          <Route path='/Home' element={<ItemListContainer greeting="Destacadas" />} />
          <Route path='/item/:id' element={<ItemDetailContainer />} />
          <Route path= '/cart' element={<Cart/>}/> 
          <Route path= '/semas/:categoryId'element ={ <ItemListContainer greeting='Semas:'/>}/>
          <Route path='/Registrate' element={<FormularioRegistro />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};


export default App;

