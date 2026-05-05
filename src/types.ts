export type CountriesResponseType = {
  name: {
    common: string;
    official: string;
    nativeName: object;
  };
  latlng: number[];
  cca2: string;
  capital: string[];
};

export type ResponseOutlinesType = {
  type: string;
  name: string;
  crs: {
    type: string;
    properties: {
      name: string;
    };
  };
  features: CountryOutlinesType[];
};

export type CountryOutlinesType = {
  type: string;
  properties: {
    name: string;
    ["ISO3166-1-Alpha-3"]: string;
    ["ISO3166-1-Alpha-2"]: string;
  };
  geometry: {
    type: string;
    coordinates: string;
  };
};
export type ResponseCoordsType = {
  totalResultsCount: number;
  geonames: CapitalCoordsType[];
};
export type CapitalCoordsType = {
  adminCode1: string;
  lng: string;
  geonameId: number;
  toponymName: string;
  countryId: string;
  fcl: string;
  population: number;
  countryCode: string;
  name: string;
  fclName: string;
  adminCodes1: object;
  countryName: string;
  fcodeName: string;
  adminName1: string;
  lat: string;
  fcode: string;
};
export type finalCoordsType = {
  lng: number;
  lat: number;
};
