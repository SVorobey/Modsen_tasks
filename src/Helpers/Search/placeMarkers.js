let count = 0;

function placeMarkers(data, ymaps, map) {
  if (count !== 0) {
    map.current.geoObjects.splice(1, count);
    count = 0;
  }
  data.forEach((item) => {
    const { coordinates } = item.geometry;
    const { name } = item.properties;
    const { description } = item.properties;
    const marker = new ymaps.Placemark(coordinates.reverse(), {
      balloonContent: `<strong>${name}</strong><br>${description}`,
      iconCaption: `${name}`,
    }, {
      preset: 'islands#dotIcon',
      iconColor: '#000000',
    });
    map.current.geoObjects.add(marker);
    marker.events
      .add('mouseenter', (e) => {
        e.get('target').options.set('iconColor', '#A9A9A9');
      })
      .add('mouseleave', (e) => {
        e.get('target').options.set('iconColor', '#000000');
      });
    count += 1;
  });
}

export default placeMarkers;
