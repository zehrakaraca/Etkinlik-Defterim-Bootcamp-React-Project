import React from 'react'
import BannerImage from '../assets/telephone.png';
import "../styles/Iletisim.css";

function Iletisim() {
  return (
    <div className="iletisim">
        <div className="leftSide" style={{backgroundImage: `url(${BannerImage})`}}>  </div>
        <div className="rightSide">
            <h1>Fikirleriniz Bizim İçin Önemli</h1>

            <form id="iletisim-form" method="POST">
                <label htmlFor="name">İsim Soyisim</label>
                <input placeholder="İsminizi giriniz..." name="name"></input>
                <label htmlFor="email">E-mail</label>
                <input name="email" placeholder="E-mail giriniz..." type="email" />
                <label htmlFor="message">Mesaj</label>
                <textarea rows="6" placeholder="Mesajınızı girin..." name="message" required></textarea>
                <button type="submit">GÖNDER</button>
            </form>
        </div>
      
    </div>
  )
}

export default Iletisim
