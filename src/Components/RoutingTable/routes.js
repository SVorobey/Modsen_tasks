import { faWalking, faCarSide, faBusAlt } from '@fortawesome/free-solid-svg-icons';

const routes = [
  {
    id: 'walking',
    icon: faWalking,
    route: 'pedestrian',
  },
  {
    id: 'car',
    icon: faCarSide,
    route: 'auto',
  },
  {
    id: 'bus',
    icon: faBusAlt,
    route: 'masstransit',
  },
];

export default routes;
