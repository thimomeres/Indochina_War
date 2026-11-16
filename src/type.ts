export type CountryId = "vietnam" | "cambodia" | "china" | "usa" | "ussr";

export interface CountryInfo {
  id: CountryId;
  name: string;
  short: string; // teks singkat di dalam tombol
  color: string;
  codes: string[]; // kode ADM0_A3 di data Natural Earth
  marker: [number, number]; // [lat, lng] posisi tombol di peta
  role: string;
  points: string[];
}

export interface KeyEvent {
  icon: string;
  short: string; // label di timeline
  dateLabel: string;
  title: string;
  description: string[];
  reactions?: string[];
}
