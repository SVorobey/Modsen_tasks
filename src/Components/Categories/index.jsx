import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Column, Text, Wrapper } from './style';
import categories from './categories';
import getRequest from '../../Helpers/Search/getRequest';

// eslint-disable-next-line react/prop-types
export default function Categories({ setData, setInputRequest }) {
  const categoryClick = (query) => {
    getRequest(query, setData);
    setInputRequest(query);
  };
  return (
    <Wrapper>
      {categories.map((item) => (
        <Column key={item.id} type="button" onClick={() => categoryClick(item.description)}>
          <FontAwesomeIcon
            icon={item.icon}
            style={{
              color: '#FFF',
            }}
          />
          <Text>{item.description}</Text>
        </Column>
      ))}
    </Wrapper>
  );
}
