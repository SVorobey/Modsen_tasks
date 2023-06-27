function mapInitialize(ymaps, coords) {
  if (coords[0] !== 0 && coords[1] !== 0) {
    const map = new ymaps.Map('map', {
      center: coords,
      zoom: 17,
      controls: [],
    });
    const myLocationMark = new ymaps.Placemark(coords, {
      balloonContent: 'Вы находитесь здесь',
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'https://i.ibb.co/cCGddF4/location.png',
      iconImageSize: [32, 32],
    });
    map.geoObjects.add(myLocationMark);
    return map;
  }
  return null;
}

export default mapInitialize;
