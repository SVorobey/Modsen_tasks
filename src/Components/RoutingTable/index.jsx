/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import
{
  Wrapper, Input, Button, ButtonWrapper, InputWrapper,
} from './style';
import routes from './routes';
import createRoute from '../../Helpers/Map/createRoute';

export default function RoutingTable({
  inputFrom, setInputFrom, inputTo, setInputTo, map, ymaps,
}) {
  return (
    <Wrapper>
      <ButtonWrapper>
        {
          routes.map((item) => (
            <Button
              key={item.id}
              onClick={() => createRoute(item.route, map, ymaps, inputTo, inputFrom)}
            >
              <FontAwesomeIcon icon={item.icon} />
            </Button>
          ))
        }
      </ButtonWrapper>
      <InputWrapper>
        <Input placeholder="Откуда" onChange={(e) => setInputFrom(e.target.value)} value={inputFrom} />
        <Input placeholder="Куда" onChange={(e) => setInputTo(e.target.value)} value={inputTo} />
      </InputWrapper>
    </Wrapper>
  );
}
