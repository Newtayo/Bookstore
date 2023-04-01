import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Booklist from './components/Booklist';
import Category from './components/Category';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Booklist />} exact />
          <Route path="/category" element={<Category />} exact />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
