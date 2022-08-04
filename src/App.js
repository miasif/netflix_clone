import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header.jsx';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Banner />

      <Routes>
        {/* <Route path="/" element={<Header />} /> */}

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
