import type {
  CountriesResponseType,
  CountryOutlinesType,
  ResponseOutlinesType,
} from "../types";

export async function getGeoData() {
  //all country names and capitals
  let countryNames: CountriesResponseType[];
  let countriesFiltered: CountriesResponseType[] = [];
  try {
    const namesResponse = await fetch(
      "https://restcountries.com/v3.1/all?fields=cca2,name,capital,latlng",
    );
    countryNames = await namesResponse.json();

    countriesFiltered = countryNames.filter(function (c) {
      return c.capital?.length > 0;
    });
  } catch (error) {
    console.log("Couldn't fetch country names: " + error);
  }

  //all country outlines fetch and extract of just the outlines
  let countryOutlines: CountryOutlinesType[] = [];
  try {
    const outlinesResponse = await fetch(
      "https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson",
    );
    let jsonOutlinesResponse: ResponseOutlinesType =
      await outlinesResponse.json();
    countryOutlines = jsonOutlinesResponse.features;
  } catch (error) {
    console.log("Couldn't fetch country outlines: " + error);
  }

  //filter out the longer array to match the shorter one
  function filterArrays<L, S>(
    firstArray: L[],
    secondArray: S[],
    getFirstCode: (item: L) => string,
    getSecondCode: (item: S) => string,
  ) {
    let modifiedArray = firstArray.filter((longItem) =>
      secondArray.some(
        (shortItem) => getSecondCode(shortItem) === getFirstCode(longItem),
      ),
    );
    return modifiedArray;
  }

  switch (countryOutlines.length > countriesFiltered.length) {
    case true:
      filterArrays(
        countryOutlines,
        countriesFiltered,
        (item) => item.properties["ISO3166-1-Alpha-2"],
        (item) => item.cca2,
      );
      break;

    default:
      filterArrays(
        countriesFiltered,
        countryOutlines,
        (item) => item.cca2,
        (item) => item.properties["ISO3166-1-Alpha-2"],
      );
  }
  console.log;
}
