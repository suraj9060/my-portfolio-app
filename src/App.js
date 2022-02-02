
import './App.css';
import Home from './components/Home';
import { ThemeProvider} from './components/toggle/context'

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
