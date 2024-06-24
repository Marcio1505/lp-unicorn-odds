import logo from "./asstes/imgs/logo.svg";
import slotMachine from "./asstes/imgs/slot-machine.svg";
import Winers from './components/Winers';
import Faq from './components/Faq';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <div className="slot-machine"><img src={slotMachine} className="slot-machine" alt="slot-machine" /></div> */}
      <div className="resgatar-bonus">
        <div>
          <h3>RECEBA JA $600 EM BONUS + 200 GIROS </h3>
          <h3 className="gratis">GRATIS !</h3>
         
        </div>
        <button className="resgatar-bonus-btn">RESGATAR BONUS</button>
      </div>
      <div className="boxes">
      <Faq/>
      <Winers/>
      <Form />
      </div>
    </div>
  );
}

export default App;
