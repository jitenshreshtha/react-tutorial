import './App.css';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Toggle from './Components/Toggle/Toggle';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Home />
      <Profile text="Hello" data={{name:'Jiten'}}/>
      <Toggle />
    </div>
  );
}

export default App;
