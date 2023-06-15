import { YMaps, Map, SearchControl } from '@pbe/react-yandex-maps';

const NormalMapa = () => (
<YMaps query={{ apikey: '77d83291-7d97-4390-9a87-126bba3186e1' }}>
<Map
defaultState={{
center: [55.751574, 37.573856],
zoom: 9,
controls: [],
provider: 'yandex#map',
}}
>
<SearchControl options={{ float: "right" }} />
</Map>
</YMaps>
);

export default NormalMapa;