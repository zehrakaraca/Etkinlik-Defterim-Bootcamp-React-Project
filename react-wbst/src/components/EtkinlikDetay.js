import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import eventsData from '../events.json';
import '../styles/EtkinlikDetay.css';

function EtkinlikDetay() {
  const { Id } = useParams();
  console.log('Received Id:', Id);

  const event = eventsData.find((event) => event.Id === parseInt(Id, 10));
  console.log('Found Event:', event);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <div className="etkinlikDetay">
      
      <h1>{event.Adi}</h1>
      <p>Tür: {event.Tur}</p>
      <img src={event.KucukAfis} />
      <p> {event.KisaAciklama}</p>
      <p>Başlangıç Tarihi: {event.EtkinlikBaslamaTarihi}</p>
      <p>Bitiş Tarihi: {event.EtkinlikBitisTarihi}</p>
      <p>Konum: {event.EtkinlikMerkezi}</p><p>Etkinlik Linki:</p>
      <a href={event.EtkinlikUrl} target="_blank" rel="noopener noreferrer">{event.EtkinlikUrl}</a>
      <p>{event.UcretsizMi ? 'Ücretsiz' : 'Ücretli'}</p>
      <a href={event.BiletSatisLinki} target="_blank" rel="noopener noreferrer">
          <button>Biletini Al</button>
      </a>
      </div>
      
  );
}

export default EtkinlikDetay;
