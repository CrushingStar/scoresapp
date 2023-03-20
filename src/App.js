import './App.css';
import Header from './components/header/header';
import Soccer from './sports/soccer/soccer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App" style={{ backgroundColor: "black" }}>
        <Header />
        <Routes>
          <Route
            path='/'
            exact element={<Navigate to='/soccer' />}
          />
          <Route path='/soccer' exact element={<Soccer />} />
          <Route path='/soccer/:id' exact element={<Soccer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
