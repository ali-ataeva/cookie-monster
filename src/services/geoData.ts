import type {
  CountriesResponseType,
  CountryOutlinesType,
  finalCoordsType,
  ResponseCoordsType,
  ResponseOutlinesType,
} from "../types";

export async function getGeoData() {
  return;
  const coords = localStorage.getItem("coords");
  const outlines = localStorage.getItem("outlines");
  const countries = localStorage.getItem("countries");

  // if the data is already in local storage parse it, if not fetch
  if (coords && outlines && countries) {
    let finalCoords = JSON.parse(coords);
    let finalOutlines = JSON.parse(outlines);
    let finalCountries = JSON.parse(countries);
    return { finalCoords, finalOutlines, finalCountries };
  } else {
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
    //filter the arrays to get them to have only the same countries
    let finalOutlines = filterArrays(
      countryOutlines,
      countriesFiltered,
      (item) => item.properties["ISO3166-1-Alpha-2"],
      (item) => item.cca2,
    );
    let finalCountries = filterArrays(
      countriesFiltered,
      finalOutlines,
      (item) => item.cca2,
      (item) => item.properties["ISO3166-1-Alpha-2"],
    );

    //fetch each capital city coordinates
    let finalCoords: finalCoordsType[] = [];

    async function getCoords(item: CountriesResponseType) {
      try {
        const coordsResponse = await fetch(
          `http://api.geonames.org/searchJSON?q=${item.capital[0]}&maxRows=1&username=alisaataeva`,
        );
        const allData: ResponseCoordsType = await coordsResponse.json();
        const singleCapital = allData.geonames[0];
        if (singleCapital) {
          const justCoords = {
            lat: Number(singleCapital.lat),
            lng: Number(singleCapital.lng),
          };
          finalCoords.push(justCoords);
        }
      } catch (error) {
        console.log("Couldn't fetch capital coordinates: " + error);
      }
    }

    for (const item of finalCountries) {
      await getCoords(item);
    }
    localStorage.setItem("coords", JSON.stringify(finalCoords));
    localStorage.setItem("outlines", JSON.stringify(finalOutlines));
    localStorage.setItem("countries", JSON.stringify(finalCountries));
    return { finalCoords, finalOutlines, finalCountries };
  }
}
