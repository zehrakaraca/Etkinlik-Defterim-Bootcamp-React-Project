import React, {useState} from 'react'
import Logo from "../assets/ticket.png";
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import "../styles/Navbar.css";

function Navbar() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () =>{
    setOpenLinks(!openLinks);
  };

  return (
    <div className="navbar">
        <div className="leftSide" id={openLinks ? "open" : "close"}>
            <img src={Logo} />
            <div className="class">  Etkinlik Defterim</div>
            <div className="hiddenLinks">
              <Link to="/">Ana Sayfa</Link>
              <Link to="/etkinlik">Etkinlikler</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/iletisim">İletişim</Link>
            </div>
        </div>
        <div className="rightSide">
          <Link to="/">Ana Sayfa</Link>
          <Link to="/etkinlik">Etkinlikler</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/iletisim">İletişim</Link>
          <button onClick={toggleNavbar}>
            <ReorderIcon />
          </button>
        </div>
      
    </div>
  )
}

export default Navbar
