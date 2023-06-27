// eslint-disable-next-line consistent-return
const searchData = async (inputRequest) => {
  const URL = 'https://search-maps.yandex.ru/v1/?';
  try {
    const response = await fetch(`${URL}text=${inputRequest}&type=biz&ll=${localStorage.getItem('lng')},${localStorage.getItem('lat')}&lang=ru_RU&apikey=${process.env.REACT_APP_YANDEX_KEY}&spn=0.03,0.03&rspn=1&results=100`)
      .then((result) => result.json())
      .then((data) => data.features);
    return response;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Ответ от сервера не получен. Пожалуйста, попробуйте позже.');
  }
};
export default searchData;
