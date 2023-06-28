/* eslint-disable no-mixed-operators */
function calculateRadius(radiusInMeters) {
  const metersToDegrees = 0.000009;
  const latitudeDelta = radiusInMeters * metersToDegrees;
  const longitudeDelta = radiusInMeters * metersToDegrees / Math.cos(localStorage.getItem('lat') * (Math.PI / 180));
  return `${latitudeDelta},${longitudeDelta}`;
}

export default calculateRadius;
