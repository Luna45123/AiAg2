export interface PmLocationData {
    status: string;
    data: {
      aqi: number;
      idx: number;
      attributions: {
        url: string;
        name: string;
        logo?: string;
      }[];
      city: {
        geo: number[];
        name: string;
        url: string;
        location: string;
      };
      dominentpol: string;
      iaqi: {
        h?: { v: number };
        no2?: { v: number };
        o3?: { v: number };
        p?: { v: number };
        pm10?: { v: number };
        pm25?: { v: number };
        r?: { v: number };
        so2?: { v: number };
        t?: { v: number };
        w?: { v: number };
      };
      time: {
        s: string;
        tz: string;
        v: number;
        iso: string;
      };
      forecast: {
        daily: {
          o3: {
            avg: number;
            day: string;
            max: number;
            min: number;
          }[];
          pm10: {
            avg: number;
            day: string;
            max: number;
            min: number;
          }[];
          pm25: {
            avg: number;
            day: string;
            max: number;
            min: number;
          }[];
          uvi: {
            avg: number;
            day: string;
            max: number;
            min: number;
          }[];
        };
      };
      debug: {
        sync: string;
      };
    };
  }
  