import { Routes, Route } from 'react-router-dom';
import { Home } from './components/home/Home';
import './App.css';
import { Question } from './components/question/Question';
import { Result } from './components/result/Result';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Question />} />
        <Route path="/result" element={<Result />} />
        <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
      </Routes>
    </div>
  );
}

export default App;
