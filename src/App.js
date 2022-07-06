import logo from './assets/svg/logo.svg';
import switchIcon from './assets/svg/switch.svg';
import './App.css';
import Language from './components/Language/Language';

function App() {
  return (
    <div className="wrapper">
      <header className="header">
        <img src={logo} className="header__logo" alt="logo" />
      </header>
      <main>
        <div className='container'>
          <div className='switch'>
            <Language text={'Русский'}/>
            <button className='switch__btn' type='button'>
              <img src={switchIcon} className="switch__btn-icon" alt="switch" />
            </button>
            <Language text={'Осетинский'}/>
          </div>
          
        </div>
      </main>
    </div>
  );
}

export default App;
