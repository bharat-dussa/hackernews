import GlobalStyle from "./globalStyles";
import './App.css';
import Wrapper from "./components/Wrapper";
// import config from 'config'
import ScrollToTop from "react-scroll-to-top";


function App() {

  return (

    <div className="App">
      <ScrollToTop smooth />
      <GlobalStyle />
      <Wrapper />
    </div>

  );
}

export default App;
