import './App.css';
import { Aside } from './Components/Aside';
import MainContent from './Components/Body';
import PlayBar from './Components/PlayBar';

function App() {
  return (
    <div className="App">
      <Aside/>
      <MainContent/>
      <PlayBar/>
    </div>
  );
}

export default App;
