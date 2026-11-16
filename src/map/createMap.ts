import * as L from "leaflet";
import "leaflet/dist/leaflet.css";
import type { Feature } from "geojson";
import { COUNTRIES } from "../data/countries";
import type { CountryId } from "../types";
import rawCountries from "./geo/countries.json";
import { buildWorldData, type RawCollection } from "./geo/prepare";

// Batas seluruh peta (zoom-out maksimum): USSR sampai USA, Asia Tenggara di tengah
const WORLD_BOUNDS = L.latLngBounds([-35, -35], [78, 295]);
// Zoom-in maksimum: hanya Vietnam dan Kamboja
const VN_KH_BOUNDS = L.latLngBounds([8, 102], [23.5, 110]);
// Tampilan awal
const START_BOUNDS = L.latLngBounds([-10, 90], [42, 140]);

const BASE_STYLE: L.PathOptions = {
  fillColor: "#e2e8f0",
  fillOpacity: 1,
  color: "#94a3b8",
  weight: 0.6,
};

export interface MapApi {
  map: L.Map;
  select: (id: CountryId | null) => void;
  zoomControl: true;
  backgroundColor: "#0d5dde";
}

export function createMap(
  containerId: string,
  onCountryClick: (id: CountryId) => void,
): MapApi {
  const map = L.map(containerId, {
    zoomControl: false,
    attributionControl: false,
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    maxBoundsViscosity: 1,
  });
  L.control.zoom({ position: "bottomright" }).addTo(map);

  // ---- Lapisan negara (tanpa tile online) ----
  const idByCode = new Map<string, CountryId>();
  const colorById = new Map<CountryId, string>();
  for (const c of COUNTRIES) {
    colorById.set(c.id, c.color);
    for (const code of c.codes) idByCode.set(code, c.id);
  }

  let selected: CountryId | null = null;

  const styleFor = (feature?: Feature): L.PathOptions => {
    const id = idByCode.get(feature?.properties?.ADM0_A3 as string);
    if (!id) return BASE_STYLE;
    const isSelected = id === selected;
    return {
      ...BASE_STYLE,
      fillColor: colorById.get(id),
      fillOpacity: isSelected ? 1 : 0.75,
      color: isSelected ? "#111827" : "#ffffff",
      weight: isSelected ? 2.5 : 0.8,
    };
  };

  const worldData = buildWorldData(rawCountries as unknown as RawCollection);
  const countryLayer = L.geoJSON(worldData, {
    style: styleFor,
    interactive: false,
  }).addTo(map);

  // ---- Tombol negara ----
  for (const c of COUNTRIES) {
    const icon = L.divIcon({
      className: "country-marker",
      html: `<span class="flex h-full w-full items-center justify-center rounded-full border-2 border-white text-sm font-bold text-white shadow-lg" style="background:${c.color}">${c.short}</span>`,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
    });
    L.marker(c.marker, { icon, title: c.name, alt: c.name })
      .bindTooltip(c.name, {
        permanent: true,
        direction: "bottom",
        offset: [0, 20],
        className: "country-label",
      })
      .on("click", () => onCountryClick(c.id))
      .addTo(map);
  }

  // ---- Batas zoom mengikuti ukuran wadah (responsif) ----
  function updateZoomLimits(): void {
    const size = map.getSize();
    if (size.x === 0 || size.y === 0) return;
    // reset dulu, karena getBoundsZoom dibatasi oleh min/max zoom yang sedang aktif
    map.setMinZoom(0);
    map.setMaxZoom(18);
    const minZoom = map.getBoundsZoom(WORLD_BOUNDS);
    const maxZoom = map.getBoundsZoom(VN_KH_BOUNDS);
    map.setMinZoom(minZoom);
    map.setMaxZoom(Math.max(minZoom, maxZoom));
  }

  map.setMaxBounds(WORLD_BOUNDS);
  map.setView(START_BOUNDS.getCenter(), 4, { animate: false });
  updateZoomLimits();
  map.fitBounds(START_BOUNDS, { animate: false });

  new ResizeObserver(() => {
    map.invalidateSize();
    updateZoomLimits();
  }).observe(map.getContainer());

  return {
    map,
    select(id) {
      selected = id;
      countryLayer.setStyle(styleFor);
    },
  };
}
