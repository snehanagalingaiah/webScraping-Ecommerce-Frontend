
import {Routes,Route} from "react-router-dom"
import Products from './components/Products'
import ErrorPage from './components/ErrorPage'

function App() {
  return (
   <>
   <Routes>
   <Route path = "/" element = {<Products />} />
   <Route path = "*" element = {<ErrorPage />} />
   </Routes>
   </>
  );
}

export default App;
