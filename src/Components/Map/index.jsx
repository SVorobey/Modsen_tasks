import React, { useEffect, useState, useRef } from 'react';
import { faMagnifyingGlassLocation, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Error from '../Error/index';
import {
  SearchForm, SearchInput, SearchButton, LocationButton, RadiusInput,
} from './style';
import getRequest from '../../Helpers/Search/getRequest';
import returnToLocation from '../../Helpers/Map/returnToLocation';
import Categories from '../Categories';
import getPosition from '../../Helpers/Map/getPosition';
import mapInitialize from '../../Helpers/Map/mapInitialize';
import placeMarkers from '../../Helpers/Search/placeMarkers';
import SidePanel from '../SidePanel';
import RoutingTable from '../RoutingTable';

export default function YandexMap() {
  const { ymaps } = window;

  const map = useRef(null);

  const [coords, setCoords] = useState([0, 0]);
  const [isMapReady, setIsMapReady] = useState(false);
  const [data, setData] = useState([]);
  const [inputRequest, setInputRequest] = useState('Кафе');
  const [error, setError] = useState(false);
  const [inputFrom, setInputFrom] = useState('');
  const [inputTo, setInputTo] = useState('');
  const [radiusInput, setRadiusInput] = useState('');

  useEffect(() => {
    getPosition(setCoords, setIsMapReady, setError);
  }, []);

  useEffect(() => {
    ymaps.ready(() => {
      map.current = mapInitialize(ymaps, coords);
    });
  }, [isMapReady]);

  useEffect(() => {
    placeMarkers(data, ymaps, map);
  }, [data]);
  if (error) return <Error />;

  return (
    <div id="map" ref={map}>
      <SearchForm>
        <RadiusInput type="number" value={radiusInput} onChange={(e) => setRadiusInput(e.target.value)} placeholder="Радиус" />
        <SearchInput type="text" value={inputRequest} onChange={(e) => setInputRequest(e.target.value)} />
        <SearchButton
          onClick={() => getRequest(inputRequest, setData, radiusInput)}
          type="button"
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlassLocation}
            style={{
              color: '#FFF',
            }}
          />
        </SearchButton>
      </SearchForm>
      <LocationButton onClick={() => returnToLocation(map, coords)}>
        <FontAwesomeIcon
          icon={faMapLocation}
          style={{
            color: '#FFF',
          }}
        />
      </LocationButton>
      <Categories
        setData={setData}
        setInputRequest={setInputRequest}
      />
      {
        data.length > 0
        // eslint-disable-next-line max-len
        && <SidePanel data={data} map={map} setInputTo={setInputTo} setInputFrom={setInputFrom} />
      }
      <RoutingTable
        map={map}
        ymaps={ymaps}
        inputFrom={inputFrom}
        inputTo={inputTo}
        setInputFrom={setInputFrom}
        setInputTo={setInputTo}
      />
    </div>
  );
}
