import logo from "./asstes/imgs/logo.svg";
import cassanic from "./asstes/imgs/cassanic.svg";
import Winers from './components/Winers';
import Faq from './components/Faq';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <div className="cassanic"><img src={cassanic} className="cassanic" alt="cassanic" /></div> */}
      <div className="resgatar-bonus">
        <div>
          <h2>RECEBA JA $600 EM BONUS + 200 GIROS</h2>
          <h2>GRATIS !</h2>
        </div>
        <button className="resgatar-bonus-btn">RESGATAR BONUS</button>
      </div>
      <Faq/>
      <Winers/>
      <Form />
    </div>
  );
}

export default App;
