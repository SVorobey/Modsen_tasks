const returnToLocation = (map, coords) => {
  map.current.setCenter(coords, 17, {
    duration: 1000,
  });
};

export default returnToLocation;
