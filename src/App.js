import React from 'react'; //en cada componente importo React
import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'

//importamos react y cada componente de la pagina 

function App() { //armamos la función para poder traer todos juntos los componentes (para traer a todos de una uso React.Fragment)
    return ( 
   <React.Fragment> 
       
       
        <Categories/> 
        <Footer/>

    </React.Fragment>
   
    );
  }
  
  export default App; //con esto exportamos toda la data de App.js
