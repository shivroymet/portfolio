import { GoogleMap, useLoadScript } from "@react-google-maps/api";  
import { useMemo } from 'react';
import "../../components/utils/Map.css";
import {MarkerF} from '@react-google-maps/api'
import { GOOGLE_MAP_API_KEY } from "../../constants/Constant";

  export function Map(location){const { isLoaded } = useLoadScript({
    googleMapsApiKey: GOOGLE_MAP_API_KEY,
  });
  const center = useMemo(() => (location), []);

  return (
    <div>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}>
          <MarkerF position={center} />
        </GoogleMap>
      )}
    </div>
  );
  }