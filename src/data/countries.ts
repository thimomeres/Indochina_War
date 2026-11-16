import type { CountryInfo } from "../types";

// Teks diambil dari draf MOE (Annex C). Poin yang ditandai perlu verifikasi
// di catatan mentor sudah dihilangkan sementara.
// Catatan: bujur USA memakai nilai +360 karena peta berpusat di Asia.
export const COUNTRIES: CountryInfo[] = [
  {
    id: "vietnam",
    name: "Vietnam",
    short: "VN",
    color: "#ef4444",
    codes: ["VNM"],
    marker: [15.8, 108.4],
    role: "Central player in the Third Indochina War. Invaded Cambodia to overthrow the Khmer Rouge regime and later defended itself against a Chinese invasion.",
    points: [
      "Unified as a communist state in 1976 after the Vietnam War.",
      "Sought to become the dominant power in Indochina, drawing on a long-held vision of an Indochinese Federation of Vietnam, Laos and Cambodia under Vietnamese leadership.",
      "Secured influence over Laos through treaties of friendship, including a 25-year treaty in July 1977.",
      "Relations with Cambodia deteriorated because of border disputes and the Khmer Rouge's anti-Vietnamese policies.",
      "Its growing alliance with the Soviet Union, formalised in the 1978 Treaty of Friendship and Cooperation, strained relations with China.",
      "These shifts, together with security concerns about the hostile Khmer Rouge regime, led Vietnam to invade Cambodia in December 1978.",
    ],
  },
  {
    id: "cambodia",
    name: "Cambodia",
    short: "KH",
    color: "#FFE600",
    codes: ["KHM"],
    marker: [12.6, 104.6],
    role: "Battleground of the Third Indochina War. Ruled by the Khmer Rouge until the Vietnamese invasion.",
    points: [
      "Under Khmer Rouge rule (1975–1979), tensions with Vietnam escalated through anti-Vietnamese policies and border clashes.",
      "Cambodia's transformation from a Chinese-aligned state to a Vietnamese-controlled regime alarmed China, drawing it into the conflict and turning a regional dispute into a wider international crisis.",
    ],
  },
  {
    id: "china",
    name: "China",
    short: "CN",
    color: "#f59e0b",
    codes: ["CHN"],
    marker: [35, 103],
    role: "Supported the Khmer Rouge. Invaded northern Vietnam in 1979 in response to Vietnam's invasion of Cambodia and growing Soviet influence in the region.",
    points: [
      "Emerged as a key player, mainly in opposition to Vietnam's growing influence and Soviet alignment.",
      "Initially a supporter of Vietnam, China shifted its position as Vietnam strengthened ties with the Soviet Union.",
      "China viewed the 1978 Soviet–Vietnamese friendship treaty and Vietnam's invasion of Cambodia as threats to its regional influence.",
      "This led China to launch a punitive invasion of northern Vietnam in 1979.",
    ],
  },
  {
    id: "usa",
    name: "USA",
    short: "US",
    color: "#10b981",
    codes: ["USA"],
    marker: [39, 262],
    role: "Indirect participant in the Third Indochina War. Focused on diplomatic and economic measures rather than direct military involvement.",
    points: [
      "American policy was largely shaped by Cold War dynamics and the desire to counter Soviet influence in Southeast Asia.",
      "The USA opposed Vietnam's invasion of Cambodia, viewing Vietnam's expansion and close relationship with the Soviet Union as threats to regional stability.",
      "This concern led to closer cooperation between the USA and China, as both sought to counter Soviet–Vietnamese expansion.",
      "The USA also strengthened diplomatic ties with ASEAN nations.",
    ],
  },
  {
    id: "ussr",
    name: "USSR",
    short: "SU",
    color: "#a855f7",
    // Rusia + 14 negara bekas republik Soviet (batas modern, sementara)
    codes: [
      "RUS",
      "UKR",
      "BLR",
      "MDA",
      "EST",
      "LVA",
      "LTU",
      "GEO",
      "ARM",
      "AZE",
      "KAZ",
      "UZB",
      "TKM",
      "KGZ",
      "TJK",
    ],
    marker: [60, 95],
    role: "Major supporter of Vietnam. Indirect participant in the Third Indochina War.",
    points: [
      "Through the 1978 Treaty of Friendship and Cooperation, the Soviets gave Vietnam substantial economic aid and military support.",
      "The alliance served Soviet interests by expanding influence in Southeast Asia while challenging both Chinese power and US interests in the region.",
      "When China invaded northern Vietnam in 1979, the Soviet Union strongly condemned the action as aggression, though it stopped short of direct military intervention.",
    ],
  },
];
