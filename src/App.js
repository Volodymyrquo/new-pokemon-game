import { useState } from "react";
import './App.css'
import GamePage from "./routings/GamePage/GamePage";
import HomePage from "./routings/HomePage";


const App = () =>{
const [page, setPage] = useState('app')

const handleChangePage =(page)=>{
  console.log('#####: <Main />')
  setPage(page)
}
  
  switch (page) {
    case 'app':
      return <HomePage onChangePage={handleChangePage}  />
      case 'game':
        return <GamePage onChangePage={handleChangePage} />
        default:
          return <HomePage />
  }


} 

export default App;
           
