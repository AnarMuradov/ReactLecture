
import './App.css';
import Axios from './components/Axios';
import HookCounter from './components/HookCounter';
import MyLogin from './components/MyLogin';
import Usereduce from './components/UseReduce';
import Useref from './components/UseRef';
import UseMemo from './components/Usememo';

function App() {
  return (
    <div className="App">
  <Axios/>
  <HookCounter/>
  <MyLogin/>
  <UseMemo/>
  <Useref/>
  <hr/>
  <br/>
  <br/>
  <br/>
  <Usereduce/>
    </div>
  );
}

export default App;
