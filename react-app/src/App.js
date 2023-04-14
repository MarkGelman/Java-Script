
import './App.css';


import AddToList from './components/AddToList';
import ClickAndContInputsOnList from './components/ClickAndContInputsOnList';
import CountryDetails from './components/CountryDetails';
import FilterArray from './components/FilterArray';
import ShowArray from './components/ShowArrayByMAP';
import TodoList from './components/TodoList';
import AddNumbers from './components/AddNumbers';
import Post from './components/Post';
import MuiComponent from './components/MuiComponent';
import BusinessCard from './cards/card/BusinessCard';
import Search from './mui_trening/Search';
import { Container } from '@mui/system';
import Header from './mui_trening/Header';

function App() {
  return (
    <>
       <Header/>
       <Container
          sx ={{mt: '1rem'}}
       >
          <Search
            // value = {search}
            // onChange = {handleChange}
          />
      </Container>
      
    </>


      
      

  );
}

export default App;
