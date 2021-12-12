import {
  useEffect,
  useState,
} from 'react';
import {
  Map,
  TileLayer,
} from 'leaflet';
import { Location } from 'const';

const useMap = (refMap) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (refMap.current !== null && map === null) {
      const instance = new Map(refMap.current, {
        center: {
          lat: Location.LAT,
          lng: Location.LNG,
        },
        zoom: Location.ZOOM,
      });

      const layer = new TileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        },
      );

      instance.addLayer(layer);
      setMap(instance);
    }
  }, [refMap, map]);

  return map;
}

export default useMap;
