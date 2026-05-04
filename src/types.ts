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
