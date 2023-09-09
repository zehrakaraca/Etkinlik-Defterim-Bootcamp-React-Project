import React, { useState, useEffect } from 'react'
import '../styles/Etkinlik.css';
import Events from '../events.json';
import {Link} from "react-router-dom";
import EtkinlikDetay from '../components/EtkinlikDetay';

function Etkinlik() {
  const [events, setEvents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    
    fetch("../events.json") 
      .then((response) => response.json())
      .then((data) => setEvents(data))
      .catch((error) => console.error('Error loading data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className="etkinlik">
        <h1 className="etkinlikTitle">Etkinlikler</h1>
        <input
        type="text"
        placeholder="Etkinlik ara..."
        value={searchTerm}
        onChange={handleSearch}
        />
        <br/>
        <div className="activityButtons">
        <Link to="/konser">
          <button> KONSER </button>
        </Link>
        <Link to="/sinema">
          <button> SİNEMA </button>
        </Link>
        <Link to="/tiyatro">
          <button> TİYATRO </button>
        </Link>
        <Link to="/sergi">
          <button> SERGİ </button>
        </Link>
        </div>
        <br/>
        <h1 className="etkinlikSubTitle">Tüm Etkinlikler</h1>

        

        <div className="etkinlikList">
          {Events.filter((events) => {
            return (
              events.Tur.toLowerCase().includes(searchTerm.toLowerCase()) ||
              events.Adi.toLowerCase().includes(searchTerm.toLowerCase())
            );
          }).map((events) => {

            return (
              
            <div className="etkinlikItem" key={events.Id}>
              <strong>{ events.Tur }</strong><br></br>
              { events.Adi }<br></br>
              { events.EtkinlikBitisTarihi }<br></br>
              <Link to={`/etkinlik/${events.Id}`} key={events.Id}><img src={events.KucukAfis} /></Link>
              <strong>{ events.EtkinlikMerkezi }</strong><br></br>
              
              { events.EtkinlikUrl }<br></br>
              { events.EtkinlikBitisTarihi }<br></br>
            </div>
            
            );
        })}
        </div>
        <EtkinlikDetay events={events} />
    </div>
  );
}

export default Etkinlik