"use client";
import { useEffect, useRef } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

const MAP_TILER_KEY = process.env.NEXT_PUBLIC_MAP_TILER_KEY!;
const MAP_OPENWEATHER = process.env.NEXT_PUBLIC_OPENWEATHER_KEY!;

export const Map = () => {
  const mapContainer = useRef<any>(null);
  const map = useRef<any>(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/outdoor-v2/style.json?key=${MAP_TILER_KEY}`,
      center: [-52.0986, -32.0332],
      zoom: 3,
    });

    map.current.once("load", () => {
      map.current.addSource("weather", {
        type: "raster",
        tiles: [
          `https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${MAP_OPENWEATHER}`,
        ],
      });

      map.current.addSource("clouds", {
        type: "raster",
        tiles: [
          `https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${MAP_OPENWEATHER}`,
        ],
      });

      map.current.addLayer({
        id: "weather-raster",
        type: "raster",
        source: "weather",
      });

      map.current.addLayer({
        id: "clouds-raster",
        type: "raster",
        source: "clouds",
      });
    });
  }, []);

  return (
    <div className="z-0 w-screen h-screen">
      <div ref={mapContainer} className="absolute h-full w-full" />
    </div>
  );
};
