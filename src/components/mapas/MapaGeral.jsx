import 'leaflet/dist/leaflet.css';
import {MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./mapaGeral.css"
import { useState, useEffect } from "react";
//import { UsuariosContext } from '../../context/UsuariosContext';


function MapaGeral(){

    const [locais, setLocais] = useState([]);
  //const {getLocais} = useContext(UsuariosContext)

  useEffect(() => {
    fetch("http://localhost:3000/locaisColeta")
    .then(response => response.json())
    .then(dados => setLocais(dados))
    .catch(erro => console.log(erro))
  }, [])


   

    return (
      <MapContainer
        center={[-27.593500, -48.558540]}
        zoom={13}
        scrollWheelZoom={true}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locais.map(local => (
        <Marker key={local.id} position={[local.latitude, local.longitude]}>
          <Popup>
            {local.nomeLocal} <br></br> {local.descricao}
          </Popup>
        </Marker>
      ))}
      </MapContainer>
    );
}

export default MapaGeral;