import {useRef, useEffect} from 'react';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from 'mapbox-gl-geocoder';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

mapboxgl.accessToken = 'pk.eyJ1Ijoic3Rhc3Zvcm9iZXkiLCJhIjoiY2xpdmdnNmpiMThrYjNobzdtcDlmemg0NCJ9.-KBLbzC4OJdmWsTROPBGYQ';


const LocationButton = styled.button`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 40px;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
`



export default function Map() {
  const mapContainerRef = useRef(null);
  const mapBox = useRef(null);
  const mapInit = function() {
    mapBox.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [0,0],
      zoom: 12,
  })
  }
  const getPosition = function() {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      localStorage.setItem('lat', lat);
      localStorage.setItem('lng', lng);
      mapBox.current.setCenter([lng, lat]);
      mapBox.current.on("load", () => {
        const marker = new mapboxgl.Marker({
          draggable: false,
        }).setLngLat([lng,lat]).addTo(mapBox.current);
      })
    });
  }
  const addSearchPanel = function() {
mapBox.current.addControl(
new MapboxGeocoder({
accessToken: mapboxgl.accessToken,
mapboxgl: mapboxgl
})
);
  }
  useEffect(() => {
    mapInit();
    getPosition();
    addSearchPanel();
    return () => {
      mapBox.current.remove();
    }
  },)
  const returnToLocation = () => {
    mapBox.current.flyTo({
      center: [localStorage.getItem('lng'), localStorage.getItem('lat')],
      zoom: 12,
      essential: true
    });
  }
  return (
    <div ref={mapContainerRef} style={{
      position: "absolute", 
      top: "0", 
      bottom: "0", 
      width: "100%"
    }}><LocationButton onClick={() => returnToLocation()}>
      <FontAwesomeIcon icon={faLocationCrosshairs} />
    </LocationButton></div>
  )
}
