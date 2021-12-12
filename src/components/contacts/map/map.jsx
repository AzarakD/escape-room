import {
  useEffect,
  useRef,
} from 'react';
import {
  Icon,
  Marker,
} from 'leaflet';
import useMap from 'hooks/use-map';
import { ContactsMap } from './map.styled';
import {
  IconParams,
  Location,
} from 'const';
import 'leaflet/dist/leaflet.css';

const customIcon = new Icon({
  iconUrl: IconParams.URL,
  iconSize: IconParams.SIZE,
  iconAnchor: IconParams.ANCHOR,
});

const Map = () => {
  const refMap = useRef(null);
  const map = useMap(refMap);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: Location.LAT,
        lng: Location.LNG,
      });

      marker
        .setIcon(customIcon)
        .addTo(map);
    }

  }, [map]);

  return (
    <ContactsMap ref={refMap} />
  );
};

export default Map;
