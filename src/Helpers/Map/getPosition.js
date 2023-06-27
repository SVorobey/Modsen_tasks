function getPosition(setCoords, setIsMapReady, setError) {
  navigator.geolocation.getCurrentPosition((position) => {
    setCoords([position.coords.latitude, position.coords.longitude]);
    setIsMapReady(true);
    localStorage.setItem('lat', position.coords.latitude);
    localStorage.setItem('lng', position.coords.longitude);
  }, (error) => {
    if (error.PERMISSION_DENIED) {
      setError(true);
    }
  });
}

export default getPosition;
