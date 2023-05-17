import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/projects" exact />
          <Route path="/team" exact />
          <Route path="/contact" exact />
          <Route path="/apply" exact />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
