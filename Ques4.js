//Create a countries array, check if there is a country or countries containing the word'and'. If there are countries containing
//'and', print it as array. If there is no country containing the word 'and', print 'All these countries are without and'.
let countries = [
  "England",
  "India",
  "Pakisthan",
  "Thailand",
  "Sri Lanka",
  "Greenland",
  "Finland",
  "Nepal",
];
countries_with_and = [];

for (const country of countries) {
  if (country.includes("and")) {
    countries_with_and.push(country);
  }
}
if (countries_with_and.length > 0) {
  console.log(countries_with_and);
} else {
  console.log("All these countries are without and");
}
