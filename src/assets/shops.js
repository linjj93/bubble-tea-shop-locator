import koi from "./logos/Koi.png";
import koiExpress from "./logos/Koi Express.png";
import gongCha from "./logos/GongCha.png";
import liHo from "./logos/LiHo.png";
import tigerSugar from "./logos/Tiger Sugar.png";
// import eachACup from "./Each-A-Cup.png";
import tenRen from "./logos/Tenren.png";

const koiShops = [
  {
    id: "koi-rafflescity",
    logo: koiExpress,
    name: "Raffles City",
    unit: "#B1-71",
    brand: "Koi",
    queueTime: 5,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.293418,
    longitude: 103.851561
  },
  {
    id: "koi-citylink",
    logo: koi,
    name: "Citylink Mall",
    unit: "#B1-66",
    brand: "Koi",
    queueTime: 10,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2928431,
    longitude: 103.8508764
  },
  {
    id: "koi-chinatownpoint",
    logo: koi,
    name: "Chinatown Point",
    unit: "#01-39",
    brand: "Koi",
    queueTime: 20,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2855268,
    longitude: 103.8451902
  }
];

const gongChaShops = [
  {
    id: "gongcha-onerafflesplace",
    logo: gongCha,
    name: "One Raffles Place",
    unit: "#B1-39",
    brand: "Gong Cha",
    queueTime: 15,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2843399,
    longitude: 103.8509823
  },
  {
    id: "gongcha-SMU",
    logo: gongCha,
    name: "SMU",
    unit: "#01-01",
    brand: "Gong Cha",
    queueTime: 9,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2950013,
    longitude: 103.8505781
  },
  {
    id: "gongcha-bugis",
    logo: gongCha,
    name: "Bugis Junction",
    unit: "#03-08",
    brand: "Gong Cha",
    queueTime: 15,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.299381,
    longitude: 103.8554475
  },
  {
    id: "gongcha-plazasingapura",
    logo: gongCha,
    name: "Plaza Singapura",
    unit: "#B1-K7",
    brand: "Gong Cha",
    queueTime: 12,
    openingTime: "10:00",
    closingTime: "22:00",
    latitude: 1.3007936,
    longitude: 103.8425952
  }
];

const liHoShops = [
  {
    id: "liho-thecentral",
    logo: liHo,
    name: "The Central",
    unit: "#01-37",
    brand: "LiHo",
    queueTime: 5,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2891413,
    longitude: 103.8447874
  },
  {
    id: "liho-fareastsquare",
    logo: liHo,
    name: "Far East Square",
    unit: "#01-02",
    brand: "LiHo",
    queueTime: 10,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2831,
    longitude: 103.848341
  },
  {
    id: "liho-onerafflesplace",
    logo: liHo,
    name: "One Raffles Place",
    unit: "#B1-10",
    brand: "LiHo",
    queueTime: 7,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2844078,
    longitude: 103.8487931
  },
  {
    id: "liho-capitolpiazza",
    logo: liHo,
    name: "Capitol Piazza",
    unit: "#B2-31",
    brand: "LiHo",
    queueTime: 3,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2933006,
    longitude: 103.851904
  },
  {
    id: "liho-luckychinatown",
    logo: liHo,
    name: "Lucky Chinatown",
    unit: "#01-09",
    brand: "LiHo",
    queueTime: 8,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.283644,
    longitude: 103.8433191
  },
  {
    id: "liho-tanjongpagarcentre",
    logo: liHo,
    name: "Tanjong Pagar Center",
    unit: "#B2-20",
    brand: "LiHo",
    queueTime: 8,
    openingTime: "08:00",
    closingTime: "21:00",
    latitude: 1.2770375,
    longitude: 103.8436887
  },
  {
    id: "liho-asiasquare",
    logo: liHo,
    name: "Asia Square Tower 2",
    unit: "#02-08",
    brand: "LiHo",
    queueTime: 12,
    openingTime: "08:00",
    closingTime: "20:00",
    latitude: 1.2779532,
    longitude: 103.8509025
  }
];

const tigerSugarShops = [
  {
    id: "tiger-chinatownpoint",
    logo: tigerSugar,
    name: "Chinatown Point",
    unit: "#B1-42",
    brand: "Tiger Sugar",
    queueTime: 40,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2856316,
    longitude: 103.8443801
  },
  {
    id: "tiger-capitolpiazza",
    logo: tigerSugar,
    name: "Capitol Piazza",
    unit: "#B2-32",
    brand: "Tiger Sugar",
    queueTime: 30,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2933573,
    longitude: 103.8519624
  }
];

const tenRenShops = [
  {
    id: "tenren-chinatown",
    logo: tenRen,
    name: "Chinatown Point",
    unit: "#01-07",
    brand: "Ten Ren",
    queueTime: 30,
    openingTime: "10:00",
    closingTime: "21:00",
    latitude: 1.2849138,
    longitude: 103.8424951
  }
];

const shops = [
  ...koiShops,
  ...gongChaShops,
  ...liHoShops,
  ...tigerSugarShops,
  ...tenRenShops
];

export { shops };
