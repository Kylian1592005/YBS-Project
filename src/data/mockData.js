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
      { id: "s1", name: "ဆူလေ ဂိတ်ဟောင်း", location: "ကျောက်တံတား", isTerminal: true },
      { id: "s2", name: "မြို့တော်ခန်းမ", location: "ကျောက်တံတား", isTerminal: false },
      { id: "s3", name: "ကမ္ဘာအေးဘုရားလမ်း", location: "မယန်းကုန်း", isTerminal: false },
      { id: "s4", name: "ပါရမီလမ်းဆုံ", location: "ရန်ကင်း", isTerminal: false },
      { id: "s5", name: "သမိုင်းလမ်းဆုံ", location: "မယန်းကုန်း", isTerminal: false },
      { id: "s6", name: "ဒဂုံတက္ကသိုလ် ဂိတ်ဆုံး", location: "ဒဂုံမြို့သစ်အရှေ့ပိုင်း", isTerminal: true },
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
      { id: "s1", name: "ဆူလေ ဂိတ်ဟောင်း", location: "ကျောက်တံတား", isTerminal: true },
      { id: "s7", name: "ဘောလုံးကွင်း", location: "မင်္ဂလာတောင်ညွန့်", isTerminal: false },
      { id: "s8", name: "မြေနီကုန်း", location: "စမ်းချောင်း", isTerminal: false },
      { id: "s9", name: "၈ မိုင်", location: "မယန်းကုန်း", isTerminal: false },
      { id: "s10", name: "မင်္ဂလာဒုံ ဂိတ်ဆုံး", location: "မင်္ဂလာဒုံ", isTerminal: true },
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
      { id: "s11", name: "လှည်းကူး ဂိတ်ဟောင်း", location: "လှည်းကူး", isTerminal: true },
      { id: "s12", name: "ထောက်ကြန့် လမ်းဆုံ", location: "မင်္ဂလာဒုံ", isTerminal: false },
      { id: "s13", name: "မိုတယ်လမ်းဆုံ", location: "မြောက်ဥက္ကလာပ", isTerminal: false },
      { id: "s1", name: "ဆူလေ ဂိတ်ဆုံး", location: "ကျောက်တံတား", isTerminal: true },
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
      { id: "s14", name: "သာကေတ ဂိတ်ဟောင်း", location: "သာကေတ", isTerminal: true },
      { id: "s15", name: "အနော်ရထာ လမ်းဆုံ", location: "ပုဇွန်တောင်", isTerminal: false },
      { id: "s16", name: "ကြည့်မြင်တိုင် ဈေး", location: "ကြည့်မြင်တိုင်", isTerminal: false },
      { id: "s17", name: "လှိုင်သာယာ ဂိတ်ဆုံး", location: "လှိုင်သာယာ", isTerminal: true },
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
      { id: "s18", name: "မှော်ဘီ ဂိတ်ဟောင်း", location: "မှော်ဘီ", isTerminal: true },
      { id: "s19", name: "နည်းပညာတက္ကသိုလ် (မှော်ဘီ)", location: "မှော်ဘီ", isTerminal: false },
      { id: "s20", name: "အင်းစိန် လမ်းဆုံ", location: "အင်းစိန်", isTerminal: false },
      { id: "s21", name: "သခင်မြပန်းခြံ ဂိတ်ဆုံး", location: "အလုံ", isTerminal: true },
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

// Helper: Stops Page အတွက် မတူညီသော မှတ်တိုင်များအားလုံးကို စုစည်းပေးထားသော Array
export const allStops = Array.from(
  new Map(
    mockBusLines.flatMap((line) =>
      line.stops.map((stop) => [
        stop.name,
        {
          id: stop.id,
          name: stop.name,
          location: stop.location,
          isTerminal: stop.isTerminal,
          passingLines: mockBusLines
            .filter((l) => l.stops.some((s) => s.name === stop.name))
            .map((l) => ({ id: l.id, lineCode: l.lineCode, color: l.color })),
        },
      ])
    )
  ).values()
);