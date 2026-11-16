import type { KeyEvent } from "../types";

// Ikon masih emoji sementara; ganti dengan SVG buatan desainer nanti.
// Poin yang ditandai perlu verifikasi di catatan mentor (kutipan Carter,
// tanggal Comecon, resolusi PBB 34/22, jumlah pasukan) sengaja dihilangkan.
export const EVENTS: KeyEvent[] = [
  {
    icon: "⚔️",
    short: "1975–78",
    dateLabel: "1975 to 1978",
    title: "Cambodian–Vietnamese Border Clashes",
    description: [
      "Following communist victories in both countries in 1975, Cambodia and Vietnam engaged in a series of border skirmishes, particularly around disputed territories in the Mekong Delta region.",
      "This escalated tensions between the two countries.",
    ],
  },
  {
    icon: "🚫",
    short: "Jul 1978",
    dateLabel: "July 1978",
    title: "China Cuts Aid to Vietnam",
    description: [
      "China's decision to end its aid programme for Vietnam reflected the growing split between the two communist states.",
      "It signalled China's opposition to Vietnam's ambitions in Southeast Asia and the deepening Soviet–Vietnamese cooperation.",
      "The event pushed Vietnam to rely more heavily on Soviet support and set the stage for future conflict.",
    ],
  },
  {
    icon: "🤝",
    short: "Nov 1978",
    dateLabel: "3 November 1978",
    title: "Vietnam–Soviet Friendship Treaty",
    description: [
      "Facing economic hardship after the Vietnam War and the loss of Chinese aid, Vietnam strengthened its alliance with the Soviet Union.",
      "Vietnam and the Soviet Union signed a Treaty of Friendship and Cooperation, aligning Vietnam with the Soviet bloc and providing substantial military and economic support.",
      "The backing gave Vietnam the confidence to confront Cambodia, knowing it had superpower support against potential Chinese retaliation.",
    ],
  },
  {
    icon: "⚔️",
    short: "Dec 1978",
    dateLabel: "25 December 1978",
    title: "Vietnamese Invasion of Cambodia",
    description: [
      "Vietnam launched a full-scale invasion of Cambodia, quickly overwhelming Khmer Rouge forces.",
      "It followed earlier failed attempts to remove Pol Pot as leader of the Khmer Rouge in 1977. Vietnam viewed Cambodia as a security threat because of its proximity and alliance with China.",
    ],
    reactions: [
      'China condemned the invasion, warning against an "Indochinese Federation".',
      "The Soviet Union supported Vietnam, citing humanitarian concerns about the Khmer Rouge regime.",
      "The USA opposed the invasion as a violation of international law.",
      "The UN Security Council failed to reach a consensus because of a Soviet veto.",
    ],
  },
  {
    icon: "🏙️",
    short: "Jan 1979",
    dateLabel: "7 January 1979",
    title: "Fall of Phnom Penh",
    description: [
      "Vietnamese forces captured Phnom Penh just two weeks after launching their invasion, ending Khmer Rouge rule in Cambodia.",
      "Vietnam installed a new government, the People's Republic of Kampuchea (PRK) under Heng Samrin, turning Cambodia into a Vietnamese-aligned state.",
    ],
    reactions: [
      'The USSR praised the "liberation" of Cambodia from the Pol Pot regime.',
      "The USA opposed the Vietnamese occupation.",
      "China denounced Vietnam's aggression.",
      "ASEAN expressed concern. On 12 January 1979, an emergency meeting of ASEAN Foreign Ministers in Bangkok affirmed the Cambodian people's right to self-determination and demanded the withdrawal of Vietnamese forces.",
    ],
  },
  {
    icon: "⚔️",
    short: "Feb 1979",
    dateLabel: "17 February 1979",
    title: "China's Invasion of Vietnam",
    description: [
      "China launched an invasion of northern Vietnam, aiming to pressure Vietnam over its occupation of Cambodia and to show its willingness to challenge Soviet influence in Southeast Asia.",
      "Vietnamese forces mounted strong resistance, resulting in heavy casualties on both sides.",
    ],
    reactions: [
      "The Soviet Union warned China to withdraw and pledged support for Vietnam.",
      "The USA called for all foreign forces to withdraw from the region.",
      "ASEAN expressed concern over the escalating conflict and sought a peaceful resolution through diplomatic channels.",
    ],
  },
  {
    icon: "🔺",
    short: "Jun 1982",
    dateLabel: "22 June 1982",
    title: "Formation of the Coalition Government of Democratic Kampuchea",
    description: [
      "Three Cambodian resistance groups — royalists, republicans and the Khmer Rouge — formed a coalition government-in-exile to oppose the Vietnamese occupation.",
      "Despite international concerns about including the Khmer Rouge, the coalition received international recognition and held Cambodia's UN seat, challenging the legitimacy of the PRK government.",
    ],
  },
  {
    icon: "🚪",
    short: "Apr 1989",
    dateLabel: "5 April 1989",
    title: "Vietnam Announces Complete Withdrawal from Cambodia",
    description: [
      "Vietnam announced its complete military withdrawal from Cambodia, ending a decade-long occupation.",
      "The decision was influenced by mounting international pressure, the economic burden of occupation, improving relations with China, and changing Soviet policies under Gorbachev.",
      "The withdrawal, completed in September 1989, paved the way for peace negotiations and Cambodia's eventual return to self-governance.",
    ],
  },
  {
    icon: "🕊️",
    short: "Oct 1991",
    dateLabel: "23 October 1991",
    title: "Paris Peace Accords on Cambodia",
    description: [
      "The Paris Peace Agreements marked the official end of the Third Indochina War, signed by 19 countries including Vietnam, Cambodia, China, the USA and the Soviet Union.",
      "The agreements established a UN transitional authority (UNTAC) to oversee Cambodia's governance until free elections could be held.",
    ],
  },
];
