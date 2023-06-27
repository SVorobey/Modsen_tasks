function moveToMarker(map, geo) {
  map.current.setCenter(geo, 19, {
    duration: 1000,
  });
}

export default moveToMarker;
