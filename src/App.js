import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './Componenets/Game';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuizApp from './Componenets/QuizApp';
import Weather from './Componenets/weather';
import LoginForm from './Componenets/LoginFome';
import PasswordGen from './Componenets/PasswordGen';

function App() {
  return (
    <Router>
      <div className="App">
      
        <Routes>
        <Route path="/" element={<LoginForm />} />
          <Route path="/QuizApp" element={<QuizApp />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/PasswordGen" element={<PasswordGen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
