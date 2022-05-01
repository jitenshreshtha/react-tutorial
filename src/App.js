import './App.css';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Home />
      <Profile text="Hello" data={{name:'Jiten'}}/>
    </div>
  );
}

export default App;
