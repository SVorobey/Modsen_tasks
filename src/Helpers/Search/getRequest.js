import SearchData from '../../APIs/yandexMaps';

const getRequest = async (input, setData) => {
  setData(await SearchData(input));
};

export default getRequest;
