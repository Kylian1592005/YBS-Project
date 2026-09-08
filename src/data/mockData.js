// src/data/mockData.js

export const mockBusLines = [
  {
    id: "ybs-21",
    lineCode: "21",
    operator: "YUPT",
    startPoint: "ဆူလေ (Sule)",
    endPoint: "ဒဂုံတက္ကသိုလ် (Dagon University)",
    operatingHours: "5:00 AM - 8:30 PM",
    fare: "400 MMK",
    totalBuses: "35",
    color: "#E11D48",
    description: "မြို့ထဲ ဆူလေမှ ဒဂုံတက္ကသိုလ်သို့ သမိုင်းလမ်းဆုံ၊ ကမ္ဘာအေးဘုရားလမ်းအတိုင်း ပြေးဆွဲသော လိုင်းဖြစ်ပါသည်။",
    stops: [
      { id: "s1", name: "ဆူလေ ဂိတ်ဟောင်း", location: "ကျောက်တံတား", isTerminal: true, coordinates: { lat: 16.7722, lng: 96.1581 } },
      { id: "s2", name: "မြို့တော်ခန်းမ", location: "ကျောက်တံတား", isTerminal: false, coordinates: { lat: 16.7745, lng: 96.1588 } },
      { id: "s3", name: "ကမ္ဘာအေးဘုရားလမ်း", location: "မယန်းကုန်း", isTerminal: false, coordinates: { lat: 16.8331, lng: 96.1565 } },
      { id: "s4", name: "ပါရမီလမ်းဆုံ", location: "ရန်ကင်း", isTerminal: false, coordinates: { lat: 16.8452, lng: 96.1542 } },
      { id: "s5", name: "သမိုင်းလမ်းဆုံ", location: "မယန်းကုန်း", isTerminal: false, coordinates: { lat: 16.8521, lng: 96.1287 } },
      { id: "s6", name: "ဒဂုံတက္ကသိုလ် ဂိတ်ဆုံး", location: "ဒဂုံမြို့သစ်အရှေ့ပိုင်း", isTerminal: true, coordinates: { lat: 16.8920, lng: 96.1825 } },
    ],
    routes: [
      {
        direction: "outbound",
        title: "ဆူလေ ➔ ဒဂုံတက္ကသိုလ်",
        stopIds: ["s1", "s2", "s3", "s4", "s5", "s6"],
        coordinates: [
          [16.7722, 96.1581],
          [16.7745, 96.1588],
          [16.8331, 96.1565],
          [16.8452, 96.1542],
          [16.8521, 96.1287],
          [16.8920, 96.1825],
        ],
      },
      {
        direction: "inbound",
        title: "ဒဂုံတက္ကသိုလ် ➔ ဆူလေ",
        stopIds: ["s6", "s5", "s4", "s3", "s2", "s1"],
        coordinates: [
          [16.8920, 96.1825],
          [16.8521, 96.1287],
          [16.8452, 96.1542],
          [16.8331, 96.1565],
          [16.7745, 96.1588],
          [16.7722, 96.1581],
        ],
      },
    ],
    schedules: {
      firstBus: "05:00 AM",
      lastBus: "08:30 PM",
      peakInterval: "10-15 mins",
      offPeakInterval: "20-30 mins",
    },
  },
  {
    id: "ybs-37",
    lineCode: "37",
    operator: "Bandoola Transit",
    startPoint: "ဆူလေ (Sule)",
    endPoint: "မင်္ဂလာဒုံ (Mingaladon)",
    operatingHours: "5:30 AM - 9:00 PM",
    fare: "400 MMK",
    totalBuses: "42",
    color: "#2563EB",
    description: "ပြည်လမ်းအတိုင်း မင်္ဂလာဒုံနှင့် မြို့ထဲ ဆူလေသို့ တိုက်ရိုက်ပြေးဆွဲပေးသော အဓိကယာဥ်လိုင်းဖြစ်ပါသည်။",
    stops: [
      { id: "s1", name: "ဆူလေ ဂိတ်ဟောင်း", location: "ကျောက်တံတား", isTerminal: true, coordinates: { lat: 16.7722, lng: 96.1581 } },
      { id: "s7", name: "ဘောလုံးကွင်း", location: "မင်္ဂလာတောင်ညွန့်", isTerminal: false, coordinates: { lat: 16.7812, lng: 96.1625 } },
      { id: "s8", name: "မြေနီကုန်း", location: "စမ်းချောင်း", isTerminal: false, coordinates: { lat: 16.8041, lng: 96.1362 } },
      { id: "s9", name: "၈ မိုင်", location: "မယန်းကုန်း", isTerminal: false, coordinates: { lat: 16.8672, lng: 96.1433 } },
      { id: "s10", name: "မင်္ဂလာဒုံ ဂိတ်ဆုံး", location: "မင်္ဂလာဒုံ", isTerminal: true, coordinates: { lat: 16.9083, lng: 96.1301 } },
    ],
    routes: [
      {
        direction: "outbound",
        title: "ဆူလေ ➔ မင်္ဂလာဒုံ",
        stopIds: ["s1", "s7", "s8", "s9", "s10"],
        coordinates: [
          [16.7722, 96.1581],
          [16.7812, 96.1625],
          [16.8041, 96.1362],
          [16.8672, 96.1433],
          [16.9083, 96.1301],
        ],
      },
      {
        direction: "inbound",
        title: "မင်္ဂလာဒုံ ➔ ဆူလေ",
        stopIds: ["s10", "s9", "s8", "s7", "s1"],
        coordinates: [
          [16.9083, 96.1301],
          [16.8672, 96.1433],
          [16.8041, 96.1362],
          [16.7812, 96.1625],
          [16.7722, 96.1581],
        ],
      },
    ],
    schedules: {
      firstBus: "05:30 AM",
      lastBus: "09:00 PM",
      peakInterval: "8-12 mins",
      offPeakInterval: "15-20 mins",
    },
  },
  {
    id: "ybs-89",
    lineCode: "89",
    operator: "YUPT",
    startPoint: "လှည်းကူး (Hlegu)",
    endPoint: "ဆူလေ (Sule)",
    operatingHours: "4:30 AM - 8:00 PM",
    fare: "500 MMK",
    totalBuses: "28",
    color: "#059669",
    description: "လှည်းကူးမှ မြို့ထဲ ဆူလေအထိ အမြန်လမ်းမကြီးအတိုင်း ပြေးဆွဲပေးသော ခရီးဝေးယာဥ်လိုင်းဖြစ်ပါသည်။",
    stops: [
      { id: "s11", name: "လှည်းကူး ဂိတ်ဟောင်း", location: "လှည်းကူး", isTerminal: true, coordinates: { lat: 17.1022, lng: 96.2291 } },
      { id: "s12", name: "ထောက်ကြန့် လမ်းဆုံ", location: "မင်္ဂလာဒုံ", isTerminal: false, coordinates: { lat: 17.0341, lng: 96.1822 } },
      { id: "s13", name: "မိုတယ်လမ်းဆုံ", location: "မြောက်ဥက္ကလာပ", isTerminal: false, coordinates: { lat: 16.8831, lng: 96.1712 } },
      { id: "s1", name: "ဆူလေ ဂိတ်ဆုံး", location: "ကျောက်တံတား", isTerminal: true, coordinates: { lat: 16.7722, lng: 96.1581 } },
    ],
    routes: [
      {
        direction: "outbound",
        title: "လှည်းကူး ➔ ဆူလေ",
        stopIds: ["s11", "s12", "s13", "s1"],
        coordinates: [
          [17.1022, 96.2291],
          [17.0341, 96.1822],
          [16.8831, 96.1712],
          [16.7722, 96.1581],
        ],
      },
      {
        direction: "inbound",
        title: "ဆူလေ ➔ လှည်းကူး",
        stopIds: ["s1", "s13", "s12", "s11"],
        coordinates: [
          [16.7722, 96.1581],
          [16.8831, 96.1712],
          [17.0341, 96.1822],
          [17.1022, 96.2291],
        ],
      },
    ],
    schedules: {
      firstBus: "04:30 AM",
      lastBus: "08:00 PM",
      peakInterval: "15-20 mins",
      offPeakInterval: "25-35 mins",
    },
  },
  {
    id: "ybs-11",
    lineCode: "11",
    operator: "Yangon Bus",
    startPoint: "သာကေတ (Thaketa)",
    endPoint: "လှိုင်သာယာ (Hlaing Tharyar)",
    operatingHours: "5:00 AM - 8:30 PM",
    fare: "400 MMK",
    totalBuses: "30",
    color: "#D97706",
    description: "သာကေတမှ လှိုင်သာယာ စက်မှုဇုန်အထိ ဘိလိယက်လမ်း၊ ကြည့်မြင်တိုင်လမ်းအတိုင်း ဖြတ်သန်းပြေးဆွဲပါသည်။",
    stops: [
      { id: "s14", name: "သာကေတ ဂိတ်ဟောင်း", location: "သာကေတ", isTerminal: true, coordinates: { lat: 16.7891, lng: 96.1952 } },
      { id: "s15", name: "အနော်ရထာ လမ်းဆုံ", location: "ပုဇွန်တောင်", isTerminal: false, coordinates: { lat: 16.7801, lng: 96.1721 } },
      { id: "s16", name: "ကြည့်မြင်တိုင် ဈေး", location: "ကြည့်မြင်တိုင်", isTerminal: false, coordinates: { lat: 16.7932, lng: 96.1281 } },
      { id: "s17", name: "လှိုင်သာယာ ဂိတ်ဆုံး", location: "လှိုင်သာယာ", isTerminal: true, coordinates: { lat: 16.8512, lng: 96.0682 } },
    ],
    routes: [
      {
        direction: "outbound",
        title: "သာကေတ ➔ လှိုင်သာယာ",
        stopIds: ["s14", "s15", "s16", "s17"],
        coordinates: [
          [16.7891, 96.1952],
          [16.7801, 96.1721],
          [16.7932, 96.1281],
          [16.8512, 96.0682],
        ],
      },
      {
        direction: "inbound",
        title: "လှိုင်သာယာ ➔ သာကေတ",
        stopIds: ["s17", "s16", "s15", "s14"],
        coordinates: [
          [16.8512, 96.0682],
          [16.7932, 96.1281],
          [16.7801, 96.1721],
          [16.7891, 96.1952],
        ],
      },
    ],
    schedules: {
      firstBus: "05:00 AM",
      lastBus: "08:30 PM",
      peakInterval: "10-15 mins",
      offPeakInterval: "20-25 mins",
    },
  },
  {
    id: "ybs-65",
    lineCode: "65",
    operator: "Omni Focus",
    startPoint: "မှော်ဘီ (Hmawbi)",
    endPoint: "သခင်မြပန်းခြံ (Thakin Mya Park)",
    operatingHours: "5:00 AM - 7:30 PM",
    fare: "500 MMK",
    totalBuses: "25",
    color: "#7C3AED",
    description: "မှော်ဘီနည်းပညာတက္ကသိုလ်မှ ပြည်လမ်းအတိုင်း မြို့ထဲသို့ ပြေးဆွဲပေးသော ကျောင်းသားသုံးများသည့် လိုင်းဖြစ်ပါသည်။",
    stops: [
      { id: "s18", name: "မှော်ဘီ ဂိတ်ဟောင်း", location: "မှော်ဘီ", isTerminal: true, coordinates: { lat: 17.1082, lng: 96.0351 } },
      { id: "s19", name: "နည်းပညာတက္ကသိုလ် (မှော်ဘီ)", location: "မှော်ဘီ", isTerminal: false, coordinates: { lat: 17.0811, lng: 96.0522 } },
      { id: "s20", name: "အင်းစိန် လမ်းဆုံ", location: "အင်းစိန်", isTerminal: false, coordinates: { lat: 16.8892, lng: 96.1151 } },
      { id: "s21", name: "သခင်မြပန်းခြံ ဂိတ်ဆုံး", location: "အလုံ", isTerminal: true, coordinates: { lat: 16.7761, lng: 96.1382 } },
    ],
    routes: [
      {
        direction: "outbound",
        title: "မှော်ဘီ ➔ သခင်မြပန်းခြံ",
        stopIds: ["s18", "s19", "s20", "s21"],
        coordinates: [
          [17.1082, 96.0351],
          [17.0811, 96.0522],
          [16.8892, 96.1151],
          [16.7761, 96.1382],
        ],
      },
      {
        direction: "inbound",
        title: "သခင်မြပန်းခြံ ➔ မှော်ဘီ",
        stopIds: ["s21", "s20", "s19", "s18"],
        coordinates: [
          [16.7761, 96.1382],
          [16.8892, 96.1151],
          [17.0811, 96.0522],
          [17.1082, 96.0351],
        ],
      },
    ],
    schedules: {
      firstBus: "05:00 AM",
      lastBus: "07:30 PM",
      peakInterval: "15-20 mins",
      offPeakInterval: "25-30 mins",
    },
  },
];

// Dynamically extracted list of all 21 unique stops
export const allStops = Array.from(
  new Map(
    mockBusLines
      .flatMap((line) => line.stops)
      .map((stop) => [
        stop.id,
        {
          id: stop.id,
          stopId: `YBS-${stop.id.toUpperCase()}`,
          name: stop.name,
          location: stop.location,
          isTerminal: stop.isTerminal,
          coordinates: stop.coordinates,
          passingLines: mockBusLines
            .filter((l) => l.stops.some((s) => s.id === stop.id))
            .map((l) => ({
              id: l.id,
              lineCode: l.lineCode,
              color: l.color,
            })),
        },
      ])
  ).values()
);

// Map of detailed information per stop ID
export const detailedStopsMap = {
  s1: {
    id: "s1",
    stopId: "YBS-S1",
    name: "ဆူလေ ဂိတ်ဟောင်း",
    township: "Kyauktada Township",
    isActive: true,
    coordinates: { lat: 16.7722, lng: 96.1581 },
    servingBusLines: [
      { id: "ybs-21", routeNumber: "YBS 21", routeName: "Sule → Dagon Univ", badgeColor: "bg-rose-600" },
      { id: "ybs-37", routeNumber: "YBS 37", routeName: "Sule → Mingaladon", badgeColor: "bg-blue-600" },
      { id: "ybs-89", routeNumber: "YBS 89", routeName: "Hlegu → Sule", badgeColor: "bg-emerald-600" },
    ],
    upcomingBuses: [
      { id: "b1", line: "YBS 21", route: "Sule → Dagon Univ", busNumber: "YGN-21/1092", etaMins: 3, status: "Arriving", badgeColor: "bg-rose-600", isLive: true },
      { id: "b2", line: "YBS 37", route: "Sule → Mingaladon", busNumber: "YGN-37/2041", etaMins: 8, status: "On Time", badgeColor: "bg-blue-600", isLive: false },
      { id: "b3", line: "YBS 89", route: "Hlegu → Sule", busNumber: "YGN-89/5512", etaMins: 15, status: "On Time", badgeColor: "bg-emerald-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s2", name: "မြို့တော်ခန်းမ", distance: "250 m", lines: ["YBS 21"] },
      { id: "s7", name: "ဘောလုံးကွင်း", distance: "600 m", lines: ["YBS 37"] },
    ],
  },
  s2: {
    id: "s2",
    stopId: "YBS-S2",
    name: "မြို့တော်ခန်းမ",
    township: "Kyauktada Township",
    isActive: true,
    coordinates: { lat: 16.7745, lng: 96.1588 },
    servingBusLines: [
      { id: "ybs-21", routeNumber: "YBS 21", routeName: "Sule → Dagon Univ", badgeColor: "bg-rose-600" },
    ],
    upcomingBuses: [
      { id: "b4", line: "YBS 21", route: "Sule → Dagon Univ", busNumber: "YGN-21/1092", etaMins: 5, status: "Arriving", badgeColor: "bg-rose-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s1", name: "ဆူလေ ဂိတ်ဟောင်း", distance: "250 m", lines: ["YBS 21", "YBS 37", "YBS 89"] },
    ],
  },
  s3: {
    id: "s3",
    stopId: "YBS-S3",
    name: "ကမ္ဘာအေးဘုရားလမ်း",
    township: "Mayangone Township",
    isActive: true,
    coordinates: { lat: 16.8331, lng: 96.1565 },
    servingBusLines: [
      { id: "ybs-21", routeNumber: "YBS 21", routeName: "Sule → Dagon Univ", badgeColor: "bg-rose-600" },
    ],
    upcomingBuses: [
      { id: "b5", line: "YBS 21", route: "Sule → Dagon Univ", busNumber: "YGN-21/3011", etaMins: 10, status: "On Time", badgeColor: "bg-rose-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s4", name: "ပါရမီလမ်းဆုံ", distance: "800 m", lines: ["YBS 21"] },
    ],
  },
  s4: {
    id: "s4",
    stopId: "YBS-S4",
    name: "ပါရမီလမ်းဆုံ",
    township: "Yankin Township",
    isActive: true,
    coordinates: { lat: 16.8452, lng: 96.1542 },
    servingBusLines: [
      { id: "ybs-21", routeNumber: "YBS 21", routeName: "Sule → Dagon Univ", badgeColor: "bg-rose-600" },
    ],
    upcomingBuses: [
      { id: "b6", line: "YBS 21", route: "Sule → Dagon Univ", busNumber: "YGN-21/4090", etaMins: 7, status: "On Time", badgeColor: "bg-rose-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s3", name: "ကမ္ဘာအေးဘုရားလမ်း", distance: "800 m", lines: ["YBS 21"] },
      { id: "s5", name: "သမိုင်းလမ်းဆုံ", distance: "1.1 km", lines: ["YBS 21"] },
    ],
  },
  s5: {
    id: "s5",
    stopId: "YBS-S5",
    name: "သမိုင်းလမ်းဆုံ",
    township: "Mayangone Township",
    isActive: true,
    coordinates: { lat: 16.8521, lng: 96.1287 },
    servingBusLines: [
      { id: "ybs-21", routeNumber: "YBS 21", routeName: "Sule → Dagon Univ", badgeColor: "bg-rose-600" },
    ],
    upcomingBuses: [
      { id: "b7", line: "YBS 21", route: "Sule → Dagon Univ", busNumber: "YGN-21/1102", etaMins: 12, status: "On Time", badgeColor: "bg-rose-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s4", name: "ပါရမီလမ်းဆုံ", distance: "1.1 km", lines: ["YBS 21"] },
    ],
  },
  s6: {
    id: "s6",
    stopId: "YBS-S6",
    name: "ဒဂုံတက္ကသိုလ် ဂိတ်ဆုံး",
    township: "East Dagon Township",
    isActive: true,
    coordinates: { lat: 16.8920, lng: 96.1825 },
    servingBusLines: [
      { id: "ybs-21", routeNumber: "YBS 21", routeName: "Sule → Dagon Univ", badgeColor: "bg-rose-600" },
    ],
    upcomingBuses: [
      { id: "b8", line: "YBS 21", route: "Dagon Univ → Sule", busNumber: "YGN-21/9001", etaMins: 2, status: "Arriving", badgeColor: "bg-rose-600", isLive: true },
    ],
    nearbyStops: [],
  },
  s7: {
    id: "s7",
    stopId: "YBS-S7",
    name: "ဘောလုံးကွင်း",
    township: "Mingalar Taung Nyunt Township",
    isActive: true,
    coordinates: { lat: 16.7812, lng: 96.1625 },
    servingBusLines: [
      { id: "ybs-37", routeNumber: "YBS 37", routeName: "Sule → Mingaladon", badgeColor: "bg-blue-600" },
    ],
    upcomingBuses: [
      { id: "b9", line: "YBS 37", route: "Sule → Mingaladon", busNumber: "YGN-37/3001", etaMins: 4, status: "Arriving", badgeColor: "bg-blue-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s1", name: "ဆူလေ ဂိတ်ဟောင်း", distance: "600 m", lines: ["YBS 21", "YBS 37", "YBS 89"] },
      { id: "s8", name: "မြေနီကုန်း", distance: "1.4 km", lines: ["YBS 37"] },
    ],
  },
  s8: {
    id: "s8",
    stopId: "YBS-S8",
    name: "မြေနီကုန်း",
    township: "Sanchaung Township",
    isActive: true,
    coordinates: { lat: 16.8041, lng: 96.1362 },
    servingBusLines: [
      { id: "ybs-37", routeNumber: "YBS 37", routeName: "Sule → Mingaladon", badgeColor: "bg-blue-600" },
    ],
    upcomingBuses: [
      { id: "b10", line: "YBS 37", route: "Sule → Mingaladon", busNumber: "YGN-37/8812", etaMins: 6, status: "On Time", badgeColor: "bg-blue-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s7", name: "ဘောလုံးကွင်း", distance: "1.4 km", lines: ["YBS 37"] },
    ],
  },
  s9: {
    id: "s9",
    stopId: "YBS-S9",
    name: "၈ မိုင်",
    township: "Mayangone Township",
    isActive: true,
    coordinates: { lat: 16.8672, lng: 96.1433 },
    servingBusLines: [
      { id: "ybs-37", routeNumber: "YBS 37", routeName: "Sule → Mingaladon", badgeColor: "bg-blue-600" },
    ],
    upcomingBuses: [
      { id: "b11", line: "YBS 37", route: "Sule → Mingaladon", busNumber: "YGN-37/5541", etaMins: 9, status: "On Time", badgeColor: "bg-blue-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s10", name: "မင်္ဂလာဒုံ ဂိတ်ဆုံး", distance: "2.1 km", lines: ["YBS 37"] },
    ],
  },
  s10: {
    id: "s10",
    stopId: "YBS-S10",
    name: "မင်္ဂလာဒုံ ဂိတ်ဆုံး",
    township: "Mingaladon Township",
    isActive: true,
    coordinates: { lat: 16.9083, lng: 96.1301 },
    servingBusLines: [
      { id: "ybs-37", routeNumber: "YBS 37", routeName: "Sule → Mingaladon", badgeColor: "bg-blue-600" },
    ],
    upcomingBuses: [
      { id: "b12", line: "YBS 37", route: "Mingaladon → Sule", busNumber: "YGN-37/1010", etaMins: 1, status: "Arriving", badgeColor: "bg-blue-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s9", name: "၈ မိုင်", distance: "2.1 km", lines: ["YBS 37"] },
    ],
  },
  s11: {
    id: "s11",
    stopId: "YBS-S11",
    name: "လှည်းကူး ဂိတ်ဟောင်း",
    township: "Hlegu Township",
    isActive: true,
    coordinates: { lat: 17.1022, lng: 96.2291 },
    servingBusLines: [
      { id: "ybs-89", routeNumber: "YBS 89", routeName: "Hlegu → Sule", badgeColor: "bg-emerald-600" },
    ],
    upcomingBuses: [
      { id: "b13", line: "YBS 89", route: "Hlegu → Sule", busNumber: "YGN-89/1002", etaMins: 5, status: "Arriving", badgeColor: "bg-emerald-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s12", name: "ထောက်ကြန့် လမ်းဆုံ", distance: "3.5 km", lines: ["YBS 89"] },
    ],
  },
  s12: {
    id: "s12",
    stopId: "YBS-S12",
    name: "ထောက်ကြန့် လမ်းဆုံ",
    township: "Mingaladon Township",
    isActive: true,
    coordinates: { lat: 17.0341, lng: 96.1822 },
    servingBusLines: [
      { id: "ybs-89", routeNumber: "YBS 89", routeName: "Hlegu → Sule", badgeColor: "bg-emerald-600" },
    ],
    upcomingBuses: [
      { id: "b14", line: "YBS 89", route: "Hlegu → Sule", busNumber: "YGN-89/2020", etaMins: 14, status: "On Time", badgeColor: "bg-emerald-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s11", name: "လှည်းကူး ဂိတ်ဟောင်း", distance: "3.5 km", lines: ["YBS 89"] },
      { id: "s13", name: "မိုတယ်လမ်းဆုံ", distance: "2.8 km", lines: ["YBS 89"] },
    ],
  },
  s13: {
    id: "s13",
    stopId: "YBS-S13",
    name: "မိုတယ်လမ်းဆုံ",
    township: "North Okkalapa Township",
    isActive: true,
    coordinates: { lat: 16.8831, lng: 96.1712 },
    servingBusLines: [
      { id: "ybs-89", routeNumber: "YBS 89", routeName: "Hlegu → Sule", badgeColor: "bg-emerald-600" },
    ],
    upcomingBuses: [
      { id: "b15", line: "YBS 89", route: "Hlegu → Sule", busNumber: "YGN-89/4041", etaMins: 10, status: "On Time", badgeColor: "bg-emerald-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s12", name: "ထောက်ကြန့် လမ်းဆုံ", distance: "2.8 km", lines: ["YBS 89"] },
    ],
  },
  s14: {
    id: "s14",
    stopId: "YBS-S14",
    name: "သာကေတ ဂိတ်ဟောင်း",
    township: "Thaketa Township",
    isActive: true,
    coordinates: { lat: 16.7891, lng: 96.1952 },
    servingBusLines: [
      { id: "ybs-11", routeNumber: "YBS 11", routeName: "Thaketa → Hlaing Tharyar", badgeColor: "bg-amber-600" },
    ],
    upcomingBuses: [
      { id: "b16", line: "YBS 11", route: "Thaketa → Hlaing Tharyar", busNumber: "YGN-11/7701", etaMins: 2, status: "Arriving", badgeColor: "bg-amber-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s15", name: "အနော်ရထာ လမ်းဆုံ", distance: "1.2 km", lines: ["YBS 11"] },
    ],
  },
  s15: {
    id: "s15",
    stopId: "YBS-S15",
    name: "အနော်ရထာ လမ်းဆုံ",
    township: "Pazundaung Township",
    isActive: true,
    coordinates: { lat: 16.7801, lng: 96.1721 },
    servingBusLines: [
      { id: "ybs-11", routeNumber: "YBS 11", routeName: "Thaketa → Hlaing Tharyar", badgeColor: "bg-amber-600" },
    ],
    upcomingBuses: [
      { id: "b17", line: "YBS 11", route: "Thaketa → Hlaing Tharyar", busNumber: "YGN-11/8802", etaMins: 6, status: "On Time", badgeColor: "bg-amber-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s14", name: "သာကေတ ဂိတ်ဟောင်း", distance: "1.2 km", lines: ["YBS 11"] },
    ],
  },
  s16: {
    id: "s16",
    stopId: "YBS-S16",
    name: "ကြည့်မြင်တိုင် ဈေး",
    township: "Kyimyindaing Township",
    isActive: true,
    coordinates: { lat: 16.7932, lng: 96.1281 },
    servingBusLines: [
      { id: "ybs-11", routeNumber: "YBS 11", routeName: "Thaketa → Hlaing Tharyar", badgeColor: "bg-amber-600" },
    ],
    upcomingBuses: [
      { id: "b18", line: "YBS 11", route: "Thaketa → Hlaing Tharyar", busNumber: "YGN-11/9920", etaMins: 11, status: "On Time", badgeColor: "bg-amber-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s17", name: "လှိုင်သာယာ ဂိတ်ဆုံး", distance: "3.1 km", lines: ["YBS 11"] },
    ],
  },
  s17: {
    id: "s17",
    stopId: "YBS-S17",
    name: "လှိုင်သာယာ ဂိတ်ဆုံး",
    township: "Hlaing Tharyar Township",
    isActive: true,
    coordinates: { lat: 16.8512, lng: 96.0682 },
    servingBusLines: [
      { id: "ybs-11", routeNumber: "YBS 11", routeName: "Thaketa → Hlaing Tharyar", badgeColor: "bg-amber-600" },
    ],
    upcomingBuses: [
      { id: "b19", line: "YBS 11", route: "Hlaing Tharyar → Thaketa", busNumber: "YGN-11/1122", etaMins: 4, status: "Arriving", badgeColor: "bg-amber-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s16", name: "ကြည့်မြင်တိုင် ဈေး", distance: "3.1 km", lines: ["YBS 11"] },
    ],
  },
  s18: {
    id: "s18",
    stopId: "YBS-S18",
    name: "မှော်ဘီ ဂိတ်ဟောင်း",
    township: "Hmawbi Township",
    isActive: true,
    coordinates: { lat: 17.1082, lng: 96.0351 },
    servingBusLines: [
      { id: "ybs-65", routeNumber: "YBS 65", routeName: "Hmawbi → Thakin Mya Park", badgeColor: "bg-purple-600" },
    ],
    upcomingBuses: [
      { id: "b20", line: "YBS 65", route: "Hmawbi → Thakin Mya Park", busNumber: "YGN-65/5001", etaMins: 3, status: "Arriving", badgeColor: "bg-purple-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s19", name: "နည်းပညာတက္ကသိုလ် (မှော်ဘီ)", distance: "1.5 km", lines: ["YBS 65"] },
    ],
  },
  s19: {
    id: "s19",
    stopId: "YBS-S19",
    name: "နည်းပညာတက္ကသိုလ် (မှော်ဘီ)",
    township: "Hmawbi Township",
    isActive: true,
    coordinates: { lat: 17.0811, lng: 96.0522 },
    servingBusLines: [
      { id: "ybs-65", routeNumber: "YBS 65", routeName: "Hmawbi → Thakin Mya Park", badgeColor: "bg-purple-600" },
    ],
    upcomingBuses: [
      { id: "b21", line: "YBS 65", route: "Hmawbi → Thakin Mya Park", busNumber: "YGN-65/6002", etaMins: 9, status: "On Time", badgeColor: "bg-purple-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s18", name: "မှော်ဘီ ဂိတ်ဟောင်း", distance: "1.5 km", lines: ["YBS 65"] },
    ],
  },
  s20: {
    id: "s20",
    stopId: "YBS-S20",
    name: "အင်းစိန် လမ်းဆုံ",
    township: "Insein Township",
    isActive: true,
    coordinates: { lat: 16.8892, lng: 96.1151 },
    servingBusLines: [
      { id: "ybs-65", routeNumber: "YBS 65", routeName: "Hmawbi → Thakin Mya Park", badgeColor: "bg-purple-600" },
    ],
    upcomingBuses: [
      { id: "b22", line: "YBS 65", route: "Hmawbi → Thakin Mya Park", busNumber: "YGN-65/7003", etaMins: 12, status: "On Time", badgeColor: "bg-purple-600", isLive: false },
    ],
    nearbyStops: [
      { id: "s21", name: "သခင်မြပန်းခြံ ဂိတ်ဆုံး", distance: "4.0 km", lines: ["YBS 65"] },
    ],
  },
  s21: {
    id: "s21",
    stopId: "YBS-S21",
    name: "သခင်မြပန်းခြံ ဂိတ်ဆုံး",
    township: "Ahlone Township",
    isActive: true,
    coordinates: { lat: 16.7761, lng: 96.1382 },
    servingBusLines: [
      { id: "ybs-65", routeNumber: "YBS 65", routeName: "Hmawbi → Thakin Mya Park", badgeColor: "bg-purple-600" },
    ],
    upcomingBuses: [
      { id: "b23", line: "YBS 65", route: "Thakin Mya Park → Hmawbi", busNumber: "YGN-65/8004", etaMins: 2, status: "Arriving", badgeColor: "bg-purple-600", isLive: true },
    ],
    nearbyStops: [
      { id: "s20", name: "အင်းစိန် လမ်းဆုံ", distance: "4.0 km", lines: ["YBS 65"] },
    ],
  },
};

// Fallback stop data object
export const mockStopData = detailedStopsMap["s1"];