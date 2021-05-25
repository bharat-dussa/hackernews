import GlobalStyle from "./globalStyles";
import './App.css';
import Wrapper from "./components/Wrapper";
// import config from 'config'


function App() {

  console.log(process.env)
  return (

    <div className="App">
      <GlobalStyle />
      <Wrapper />
    </div>

  );
}

export default App;
