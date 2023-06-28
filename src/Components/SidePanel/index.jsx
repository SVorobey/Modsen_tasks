/* eslint-disable react/prop-types */
import React from 'react';
import
{
  Panel, PanelCard, CardName, CardTime, CardURL, CardAddress, Wrapper, Button, CardWrapper,
} from './style';
import moveToMarker from '../../Helpers/SidePanel/moveToMarker';

export default function SidePanel({
  data, map, setInputTo, setInputFrom,
}) {
  const routeFromMe = (location) => {
    setInputTo(location);
    setInputFrom(`${localStorage.getItem('lat')},${localStorage.getItem('lng')}`);
  };
  return (
    <Wrapper>
      <Panel>
        {
          data.map(({ properties, geometry }) => (
            <CardWrapper key={properties.CompanyMetaData.id}>
              <PanelCard type="button" onClick={() => moveToMarker(map, geometry.coordinates)}>
                <CardName>{properties.name}</CardName>
                <CardAddress>{properties.CompanyMetaData.address}</CardAddress>
                <CardTime>
                  {(properties.CompanyMetaData.Hours && properties.CompanyMetaData.Hours.text) || 'Нет данных'}
                </CardTime>
                <CardURL href={properties.CompanyMetaData.url}>
                  {properties.CompanyMetaData.url ? properties.CompanyMetaData.url : 'Сайт отсутсвует' }
                </CardURL>
              </PanelCard>
              <Button type="button" onClick={() => routeFromMe(geometry.coordinates)}>Установить маршрут</Button>
            </CardWrapper>
          ))
        }
      </Panel>
    </Wrapper>
  );
}
