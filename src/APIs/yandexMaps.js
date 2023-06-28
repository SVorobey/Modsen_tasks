import calculateRadius from '../Helpers/Map/calculateRadius';

// eslint-disable-next-line consistent-return
const searchData = async (inputRequest, radiusInput) => {
  const URL = 'https://search-maps.yandex.ru/v1/?';
  const radius = calculateRadius(radiusInput);
  try {
    const response = await fetch(`${URL}text=${inputRequest}&type=biz&ll=${localStorage.getItem('lng')},${localStorage.getItem('lat')}&lang=ru_RU&apikey=${process.env.REACT_APP_YANDEX_KEY}&spn=${radius}&rspn=1&results=100`)
      .then((result) => result.json())
      .then((data) => data.features);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Ответ от сервера не получен. Пожалуйста, попробуйте позже.');
  }
};
export default searchData;
