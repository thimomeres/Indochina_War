import type { GeoJsonObject } from "geojson";

type Ring = number[][];

interface RawFeature {
  type: "Feature";
  properties: { ADM0_A3: string; NAME: string };
  geometry:
    | { type: "Polygon"; coordinates: Ring[] }
    | { type: "MultiPolygon"; coordinates: Ring[][] };
}

export interface RawCollection {
  type: "FeatureCollection";
  features: RawFeature[];
}

// Ring dengan rata-rata bujur di bawah angka ini dipindah +360 supaya
// Amerika muncul di sisi timur Asia (Pasifik di tengah), bukan di ujung barat.
const SHIFT_BELOW = -30;

function shiftRing(ring: Ring): Ring {
  const mean = ring.reduce((sum, p) => sum + p[0], 0) / ring.length;
  return mean < SHIFT_BELOW ? ring.map((p) => [p[0] + 360, p[1]]) : ring;
}

export function buildWorldData(raw: RawCollection): GeoJsonObject {
  const features = raw.features
    .filter((f) => f.properties.ADM0_A3 !== "ATA") // buang Antartika
    .map((f) => {
      const g = f.geometry;
      const geometry =
        g.type === "Polygon"
          ? { type: g.type, coordinates: g.coordinates.map(shiftRing) }
          : {
              type: g.type,
              coordinates: g.coordinates.map((poly) => poly.map(shiftRing)),
            };
      return { ...f, geometry };
    });
  return { type: "FeatureCollection", features } as unknown as GeoJsonObject;
}
