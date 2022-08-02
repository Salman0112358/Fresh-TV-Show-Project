import { greet } from "./utils/greet";
import {GlobalStyle} from './GlobalStyles'

// import components
import Home from "./Home/Home";

function App(): JSX.Element {
  return (
    <>
    <Home/>
    <GlobalStyle/>
    </>
    
  )
  
  
}

export default App;
