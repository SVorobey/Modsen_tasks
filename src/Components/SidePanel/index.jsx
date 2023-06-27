/* eslint-disable react/prop-types */
import React from 'react';
import
{
  Panel, PanelCard, CardName, CardTime, CardURL, CardAddress, Wrapper,
} from './style';
import moveToMarker from '../../Helpers/SidePanel/moveToMarker';

export default function SidePanel({ data, map }) {
  return (
    <Wrapper>
      <Panel>
        {
          data.map(({ properties, geometry }) => (
            <PanelCard key={properties.CompanyMetaData.id} type="button" onClick={() => moveToMarker(map, geometry.coordinates)}>
              <CardName>{properties.name}</CardName>
              <CardAddress>{properties.CompanyMetaData.address}</CardAddress>
              <CardTime>
                {(properties.CompanyMetaData.Hours && properties.CompanyMetaData.Hours.text) || 'Нет данных'}
              </CardTime>
              <CardURL href={properties.CompanyMetaData.url}>
                {properties.CompanyMetaData.url ? properties.CompanyMetaData.url : 'Сайт отсутсвует' }
              </CardURL>
            </PanelCard>
          ))
        }
      </Panel>
    </Wrapper>
  );
}
