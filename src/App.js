import './App.css';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import UseEffect from './Components/Hooks/UseEffect';
import UseState from './Components/Hooks/UseState';
import Profile from './Components/Profile/Profile';
import Toggle from './Components/Toggle/Toggle';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Home />
      <Profile text="Hello" data={{name:'Jiten'}}/>
      <Toggle />
      <UseState />
      <UseEffect />
      <Form />
      
    </div>
  );
}

export default App;
