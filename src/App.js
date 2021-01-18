import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import {BrowserRouter as Router} from 'react-router-dom'

    function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Main />
        </Router>
    </div>
  );
}

export default App;
