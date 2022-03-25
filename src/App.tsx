import './styles.css';

// @ts-ignore
import Mockman from 'mockman-js';
import { Home } from 'pages';
import {
  Route,
  Routes,
} from 'react-router-dom';

import {
  Footer,
  Navbar,
} from './components';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}
