import logo from "./asstes/imgs/logo.svg";
import Winers from './components/Winers';
import Faq from './components/Faq';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      {/* <div className="slot-machine"><img src={slotMachine} className="slot-machine" alt="slot-machine" /></div> */}
      <div className="resgatar-bonus">
        <div>
          <h3>
            RECEBA JA $600 EM
            <br></br>
            BONUS + 200 GIROS
          </h3>
          <h3 className="gratis">GRATIS !</h3>
          <button className="resgatar-bonus-btn">RESGATAR BONUS</button>
        </div>
      </div>
      <div className="boxes">
        <Faq />
        <Winers />
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
