let mapHasRoute = false;

const createRoute = (type, map, ymaps, inputTo, inputFrom) => {
  if (mapHasRoute) {
    map.current.geoObjects.each((item) => {
    // eslint-disable-next-line no-underscore-dangle
      if (item.options && item.options._name === 'multiRoute') {
        map.current.geoObjects.remove(item);
      }
    });
    mapHasRoute = false;
  }
  const multiRoute = new ymaps.multiRouter.MultiRoute({
    referencePoints: [
      inputFrom,
      inputTo,
    ],
    params: {
      routingMode: type,
    },
  }, {
    boundsAutoApply: true,
  });
  map.current.geoObjects.add(multiRoute);
  mapHasRoute = true;
};

export default createRoute;
