import {useRef, useEffect, useState} from 'react';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs, faMagnifyingGlassLocation } from '@fortawesome/free-solid-svg-icons';

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
  margin: 15px 0 0 20px;
  cursor: pointer;
`
const SearchButton = styled.button`
  font-size: 18px;
  width: 40px;
  border-radius: 5px;
  height: 35px;
  margin-left: 10px;
  margin-top: 20px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const SearchInput = styled.input`
  height: 25px;
  width: 200px;
  font-size: 16px;
  margin-top: 23px;
  border-radius: 8px;
  outline: none;
  padding-left: 10px;
  &:focus {
    border: 1px solid #00FFFF;
  }
`


export default function Map() {
  const mapContainerRef = useRef(null);
  const mapBox = useRef(null);
  const [inputRequest, setInputRequest] = useState('Кафе');
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
  const searchData = async() => {
    try {
      const response = await fetch(`https://search-maps.yandex.ru/v1/?text=${inputRequest}&type=biz&ll=${localStorage.getItem('lng')},${localStorage.getItem('lat')}&lang=ru_RU&apikey=57c08b98-7586-46c2-856a-5e039c0958ec`)
        .then((response) => response.json())
        .then (data => data.features);
      return response;
    }
    catch (error) {
      console.log(error);
    }
  }
  const inputSearch = async(event) => {
    event.preventDefault();
    const data = await searchData();
    console.log(data);
  }
  
  useEffect(() => {
    mapInit();
    getPosition();
    return () => {
      mapBox.current.remove();
    }
  },[])
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
    }}><LocationButton onClick={returnToLocation}>
      <FontAwesomeIcon icon={faLocationCrosshairs} />
    </LocationButton>
      <form className="searchForm">
        <SearchInput type="text" placeholder="Search" value={inputRequest} onChange={e => setInputRequest(e.target.value)}/>
        <SearchButton onClick={(e) => inputSearch(e)} type="button">
          <FontAwesomeIcon icon={faMagnifyingGlassLocation} />
        </SearchButton>
      </form>
    </div>
  )
}
