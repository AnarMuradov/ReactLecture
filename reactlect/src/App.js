
import './App.css';
import Axios from './components/Axios';
import HookCounter from './components/HookCounter';
import MyLogin from './components/MyLogin';
import UseMemo from './components/Usememo';

function App() {
  return (
    <div className="App">
  <Axios/>
  <HookCounter/>
  <MyLogin/>
  <UseMemo/>
    </div>
  );
}

export default App;
