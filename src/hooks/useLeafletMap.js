import { useEffect, useRef } from "react";
import Leaflet from "leaflet";

const useLeafletMap = (latitude, longitude, options = {}) => {
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);

  const {
    zoom = 13,
    popupText = "Location",
    iconUrl = "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconAnchor = [10, 20]
  } = options;

  useEffect(() => {
    if (mapRef.current && !mapInstanceRef.current && latitude && longitude) {
      const coordinates = [latitude, longitude];

      // Create map object with center and zoom level
      const map = Leaflet.map(mapRef.current).setView(coordinates, zoom);
      mapInstanceRef.current = map;

      // Create marker icon
      const markerIcon = Leaflet.icon({
        iconUrl,
        iconAnchor
      });

      // Add marker to map
      Leaflet.marker(coordinates, { icon: markerIcon })
        .bindPopup(popupText)
        .addTo(map);

      // Add tile layer
      Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://google.com" target="_blank">Google</a>'
      }).addTo(map);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [latitude, longitude, zoom, popupText, iconUrl]);

  return mapRef;
};

export default useLeafletMap;
