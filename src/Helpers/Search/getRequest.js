import SearchData from '../../APIs/yandexMaps';

const getRequest = async (input, setData, radiusInput) => {
  setData(await SearchData(input, radiusInput));
};

export default getRequest;
