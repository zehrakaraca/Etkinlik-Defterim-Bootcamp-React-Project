import React, { useState, useEffect } from 'react'
import '../styles/Etkinlik.css'
import Events from '../events.json';
import {Link} from "react-router-dom";
import { useParams } from 'react-router-dom';

function Konser() {
    const { Tur } = useParams();
    const [konserEvents, setKonserEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      const filteredEvents = Events.filter((event) => event.Tur === "KONSER");
      setKonserEvents(filteredEvents);
    }, [Tur]);

    const handleSearch = (e) => {
      setSearchTerm(e.target.value);
    };
  
    return (
      <div className="etkinlik">
        <h1>Konser Etkinlikleri</h1>
        <input
        type="text"
        placeholder="Etkinlik ara..."
        value={searchTerm}
        onChange={handleSearch}
        />
        <div className="etkinlikList">
        {konserEvents
          .filter((event) => {
            return (
              event.Tur.toLowerCase().includes(searchTerm.toLowerCase()) ||
              event.Adi.toLowerCase().includes(searchTerm.toLowerCase())
            );
          })
          .map((event) => (
            <div className="etkinlikItem" key={event.Id}>
              <strong>{event.Tur}</strong><br />
              {event.Adi}<br />
              {event.EtkinlikBitisTarihi}<br />
              <Link to={`/etkinlik/${event.Id}`} key={event.Id}><img src={event.KucukAfis} /></Link>
              <strong>{event.EtkinlikMerkezi}</strong><br />
              {event.EtkinlikUrl}<br />
              {event.EtkinlikBitisTarihi}<br />
            </div>
          ))}
        </div>
      </div>
    );
  
}

export default Konser
