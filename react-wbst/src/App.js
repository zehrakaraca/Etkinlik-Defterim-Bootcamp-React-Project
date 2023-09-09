
import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Etkinlik from "./pages/Etkinlik";
import Blog from "./pages/Blog";
import Iletisim from "./pages/Iletisim";
import Konser from "./pages/Konser";
import Sinema from "./pages/Sinema";
import Tiyatro from "./pages/Tiyatro";
import Sergi from "./pages/Sergi";
import EtkinlikDetay from "./components/EtkinlikDetay";


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' ;

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes> 
          <Route path="/" exact element={<Home />} />
          <Route path="/etkinlik" exact element={<Etkinlik />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/iletisim" exact element={<Iletisim />} />
          <Route path="/konser" exact element={<Konser/>} />
          <Route path="/sinema" exact element={<Sinema />} />
          <Route path="/tiyatro" exact element={<Tiyatro />} />
          <Route path="/sergi" exact element={<Sergi />} />
          <Route path="etkinlik/:Id" element={<EtkinlikDetay />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
