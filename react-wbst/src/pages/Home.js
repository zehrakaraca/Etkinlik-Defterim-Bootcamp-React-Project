import React from 'react';
import {Link} from "react-router-dom";
import BannerImage from '../assets/stage.jpg';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
      <div className="headerContainer" >
        <h1>Anın Tadını Birlikte Çıkar</h1>
        <p>Güncel Etkinliklere Hemen Göz Atın</p>
        <Link to="/etkinlik">
          <button> ŞİMDİ BİLET AL </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
