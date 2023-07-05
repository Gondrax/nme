// PARYŻ
const inputParis = "Paryż";
//const errorMessage = document.querySelector(".error-paris");
const cityNameParis = document.querySelector(".city_name-paris");
const temperatureParis = document.querySelector(".temperature-paris");
const temperatureParisDescription = document.querySelector(
  ".temperature_description-paris"
);
const feelsLikeParis = document.querySelector(".feels_like-paris");
const pressureParis = document.querySelector(".pressure-paris");
const humidityParis = document.querySelector(".humidity-paris");
const windSpeedParis = document.querySelector(".wind_speed-paris");
const cloudsParis = document.querySelector(".clouds-paris");
const coordsParis = document.querySelector(".coords-paris");
let lon = "";
let lat = "";
let temp = 0;

const apiLink = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "&appid=7dc1e3959907f252891451585f715299";
const apiUnits = "&units=metric";
const apiLang = "&lang=pl";

// WENECJA
const inputwenecja = "Venice";
const errorMessage = document.querySelector(".error-wenecja");
const cityNamewenecja = document.querySelector(".city_name-wenecja");
const temperaturewenecja = document.querySelector(".temperature-wenecja");
const temperaturewenecjaDescription = document.querySelector(
  ".temperature_description-wenecja"
);
const feelsLikewenecja = document.querySelector(".feels_like-wenecja");
const pressurewenecja = document.querySelector(".pressure-wenecja");
const humiditywenecja = document.querySelector(".humidity-wenecja");
const windSpeedwenecja = document.querySelector(".wind_speed-wenecja");
const cloudswenecja = document.querySelector(".clouds-wenecja");
const coordswenecja = document.querySelector(".coords-wenecja");
let lonwenecja = "";
let latwenecja = "";
let tempwenecja = 0;

const apiLinkwenecja = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKeywenecja = "&appid=7dc1e3959907f252891451585f715299";
const apiUnitswenecja = "&units=metric";
const apiLangwenecja = "&lang=pl";

// wieden
const inputwieden = "Vienna";
//const errorMessage = document.querySelector(".error-wieden");
const cityNamewieden = document.querySelector(".city_name-wieden");
const temperaturewieden = document.querySelector(".temperature-wieden");
const temperaturewiedenDescription = document.querySelector(
  ".temperature_description-wieden"
);
const feelsLikewieden = document.querySelector(".feels_like-wieden");
const pressurewieden = document.querySelector(".pressure-wieden");
const humiditywieden = document.querySelector(".humidity-wieden");
const windSpeedwieden = document.querySelector(".wind_speed-wieden");
const cloudswieden = document.querySelector(".clouds-wieden");
const coordswieden = document.querySelector(".coords-wieden");
let lonwieden = "";
let latwieden = "";
let tempwieden = 0;

const apiLinkwieden = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKeywieden = "&appid=7dc1e3959907f252891451585f715299";
const apiUnitswieden = "&units=metric";
const apiLangwieden = "&lang=pl";

// londyn
const inputlondyn = "London";
//const errorMessage = document.querySelector(".error-londyn");
const cityNamelondyn = document.querySelector(".city_name-londyn");
const temperaturelondyn = document.querySelector(".temperature-londyn");
const temperaturelondynDescription = document.querySelector(
  ".temperature_description-londyn"
);
const feelsLikelondyn = document.querySelector(".feels_like-londyn");
const pressurelondyn = document.querySelector(".pressure-londyn");
const humiditylondyn = document.querySelector(".humidity-londyn");
const windSpeedlondyn = document.querySelector(".wind_speed-londyn");
const cloudslondyn = document.querySelector(".clouds-londyn");
const coordslondyn = document.querySelector(".coords-londyn");
let lonlondyn = "";
let latlondyn = "";
let templondyn = 0;

const apiLinklondyn = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKeylondyn = "&appid=7dc1e3959907f252891451585f715299";
const apiUnitslondyn = "&units=metric";
const apiLanglondyn = "&lang=pl";

// stambul
const inputstambul = "Istanbul";

const cityNamestambul = document.querySelector(".city_name-stambul");
const temperaturestambul = document.querySelector(".temperature-stambul");
const temperaturestambulDescription = document.querySelector(
  ".temperature_description-stambul"
);
const feelsLikestambul = document.querySelector(".feels_like-stambul");
const pressurestambul = document.querySelector(".pressure-stambul");
const humiditystambul = document.querySelector(".humidity-stambul");
const windSpeedstambul = document.querySelector(".wind_speed-stambul");
const cloudsstambul = document.querySelector(".clouds-stambul");
const coordsstambul = document.querySelector(".coords-stambul");
let lonstambul = "";
let latstambul = "";
let tempstambul = 0;

const apiLinkstambul = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKeystambul = "&appid=7dc1e3959907f252891451585f715299";
const apiUnitsstambul = "&units=metric";
const apiLangstambul = "&lang=pl";

// bangkok
const inputbangkok = "Bangkok";
const cityNamebangkok = document.querySelector(".city_name-bangkok");
const temperaturebangkok = document.querySelector(".temperature-bangkok");
const temperaturebangkokDescription = document.querySelector(
  ".temperature_description-bangkok"
);
const feelsLikebangkok = document.querySelector(".feels_like-bangkok");
const pressurebangkok = document.querySelector(".pressure-bangkok");
const humiditybangkok = document.querySelector(".humidity-bangkok");
const windSpeedbangkok = document.querySelector(".wind_speed-bangkok");
const cloudsbangkok = document.querySelector(".clouds-bangkok");
const coordsbangkok = document.querySelector(".coords-bangkok");
let lonbangkok = "";
let latbangkok = "";
let tempbangkok = 0;

const apiLinkbangkok = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKeybangkok = "&appid=7dc1e3959907f252891451585f715299";
const apiUnitsbangkok = "&units=metric";
const apiLangbangkok = "&lang=pl";

// FUNKCJE
function getWeather2(inputwenecja) {
  const apiCity = inputwenecja;
  const URL =
    apiLinkwenecja + apiCity + apiKeywenecja + apiUnitswenecja + apiLangwenecja;

  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      cloudswenecja.textContent = `${response.data.clouds.all} %`;
      windSpeedwenecja.textContent = `${response.data.wind.speed} km/h`;
      humiditywenecja.textContent = `${response.data.main.humidity} %`;
      pressurewenecja.textContent = `${response.data.main.pressure} hPa`;
      feelsLikewenecja.textContent = `${response.data.main.feels_like} °C`;

      temperaturewenecjaDescription.textContent = `${response.data.weather[0].description}`;
      temperaturewenecja.textContent = `${Math.round(
        response.data.main.temp
      )} °C`;
      tempwenecja = `${Math.round(response.data.main.temp)}`;

      if (tempwenecja <= 0) {
        temperaturewenecja.classList.add("red");
      } else if (tempwenecja <= 10) {
        temperaturewenecja.classList.add("orange");
      } else {
        temperaturewenecja.classList.add("green");
      }

      lonwenecja = `${response.data.coord.lon}`;
      latwenecja = `${response.data.coord.lat}`;
      coordswenecja.textContent = `${lonwenecja}, ${latwenecja}`;
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data.cod !== "200") {
        errorMessage.textContent = `${error.response.data.message}`;
      }
      [
        cloudswenecja,
        windSpeedwenecja,
        humiditywenecja,
        pressurewenecja,
        feelsLikewenecja,
        temperaturewenecja,
        temperaturewenecjaDescription,
        cityNamewenecja,
      ].array.forEach((element) => {
        element.textContent = "";
        temperaturewenecjaDescription.classList.remove("orange");
      });
    })
    .finally(() => {});
}

function getWeather(inputParis) {
  const apiCity = inputParis;
  const URL = apiLink + apiCity + apiKey + apiUnits + apiLang;

  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      //cityNameParis.textContent = `${response.data.name}, ${response.data.sys.country}`;
      cloudsParis.textContent = `${response.data.clouds.all} %`;
      windSpeedParis.textContent = `${response.data.wind.speed} km/h`;
      humidityParis.textContent = `${response.data.main.humidity} %`;
      pressureParis.textContent = `${response.data.main.pressure} hPa`;
      feelsLikeParis.textContent = `${response.data.main.feels_like} °C`;

      temperatureParisDescription.textContent = `${response.data.weather[0].description}`;
      temperatureParis.textContent = `${Math.round(
        response.data.main.temp
      )} °C`;
      temp = `${Math.round(response.data.main.temp)}`;

      if (temp <= 0) {
        temperatureParis.classList.add("red");
      } else if (temp <= 10) {
        temperatureParis.classList.add("orange");
      } else {
        temperatureParis.classList.add("green");
      }

      lon = `${response.data.coord.lon}`;
      lat = `${response.data.coord.lat}`;
      coordsParis.textContent = `${lon}, ${lat}`;

      const airPollutionAPI =
        `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}` +
        apiKey;

      axios.get(airPollutionAPI).then((response) => {
        PM25.textContent = `${response.data.list[0].components.pm2_5}`;
      });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data.cod !== "200") {
        errorMessage.textContent = `${error.response.data.message}`;
      }
      [
        cloudsParis,
        windSpeedParis,
        humidityParis,
        pressureParis,
        feelsLikeParis,
        temperatureParis,
        temperatureParisDescription,
        cityNameParis,
        PM25,
      ].array.forEach((element) => {
        element.textContent = "";
        temperatureParisDescription.classList.remove("orange");
      });
    })
    .finally(() => {});
}

function getWeather3(inputwieden) {
  const apiCity = inputwieden;
  const URL =
    apiLinkwieden + apiCity + apiKeywieden + apiUnitswieden + apiLangwieden;

  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      //cityNamewieden.textContent = `${response.data.name}, ${response.data.sys.country}`;
      cloudswieden.textContent = `${response.data.clouds.all} %`;
      windSpeedwieden.textContent = `${response.data.wind.speed} km/h`;
      humiditywieden.textContent = `${response.data.main.humidity} %`;
      pressurewieden.textContent = `${response.data.main.pressure} hPa`;
      feelsLikewieden.textContent = `${response.data.main.feels_like} °C`;

      temperaturewiedenDescription.textContent = `${response.data.weather[0].description}`;
      temperaturewieden.textContent = `${Math.round(
        response.data.main.temp
      )} °C`;
      tempwieden = `${Math.round(response.data.main.temp)}`;

      if (tempwieden <= 0) {
        temperaturewieden.classList.add("red");
      } else if (tempwieden <= 10) {
        temperaturewieden.classList.add("orange");
      } else {
        temperaturewieden.classList.add("green");
      }

      lonwieden = `${response.data.coord.lon}`;
      latwieden = `${response.data.coord.lat}`;
      coordswieden.textContent = `${lonwieden}, ${latwieden}`;

      const airPollutionAPI =
        `http://api.openweathermap.org/data/2.5/air_pollution?latwieden=${latwieden}&lonwieden=${lonwieden}` +
        apiKeywieden;

      //axios.get(airPollutionAPI).then((response) => {
      //   PM25.textContent = `${response.data.list[0].components.pm2_5}`;
      //  });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data.cod !== "200") {
        errorMessage.textContent = `${error.response.data.message}`;
      }
      [
        cloudswieden,
        windSpeedwieden,
        humiditywieden,
        pressurewieden,
        feelsLikewieden,
        temperaturewieden,
        temperaturewiedenDescription,
        cityNamewieden,
      ].array.forEach((element) => {
        element.textContent = "";
        temperaturewiedenDescription.classList.remove("orange");
      });
    })
    .finally(() => {});
}

function getWeather4(inputlondyn) {
  const apiCity = inputlondyn;
  const URL =
    apiLinklondyn + apiCity + apiKeylondyn + apiUnitslondyn + apiLanglondyn;

  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      //cityNamelondyn.textContent = `${response.data.name}, ${response.data.sys.country}`;
      cloudslondyn.textContent = `${response.data.clouds.all} %`;
      windSpeedlondyn.textContent = `${response.data.wind.speed} km/h`;
      humiditylondyn.textContent = `${response.data.main.humidity} %`;
      pressurelondyn.textContent = `${response.data.main.pressure} hPa`;
      feelsLikelondyn.textContent = `${response.data.main.feels_like} °C`;

      temperaturelondynDescription.textContent = `${response.data.weather[0].description}`;
      // img.src = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
      temperaturelondyn.textContent = `${Math.round(
        response.data.main.temp
      )} °C`;
      templondyn = `${Math.round(response.data.main.temp)}`;

      if (templondyn <= 0) {
        temperaturelondyn.classList.add("red");
      } else if (templondyn <= 10) {
        temperaturelondyn.classList.add("orange");
      } else {
        temperaturelondyn.classList.add("green");
      }

      lonlondyn = `${response.data.coord.lon}`;
      latlondyn = `${response.data.coord.lat}`;
      coordslondyn.textContent = `${lonlondyn}, ${latlondyn}`;

      const airPollutionAPI =
        `http://api.openweathermap.org/data/2.5/air_pollution?latlondyn=${latlondyn}&lonlondyn=${lonlondyn}` +
        apiKeylondyn;

      //axios.get(airPollutionAPI).then((response) => {
      //   PM25.textContent = `${response.data.list[0].components.pm2_5}`;
      //  });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data.cod !== "200") {
        errorMessage.textContent = `${error.response.data.message}`;
      }
      [
        cloudslondyn,
        windSpeedlondyn,
        humiditylondyn,
        pressurelondyn,
        feelsLikelondyn,
        temperaturelondyn,
        temperaturelondynDescription,
        cityNamelondyn,
      ].array.forEach((element) => {
        element.textContent = "";
        temperaturelondynDescription.classList.remove("orange");
      });
    })
    .finally(() => {});
}

function getWeather5(inputstambul) {
  const apiCity = inputstambul;
  const URL =
    apiLinkstambul + apiCity + apiKeystambul + apiUnitsstambul + apiLangstambul;

  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      //cityNamestambul.textContent = `${response.data.name}, ${response.data.sys.country}`;
      cloudsstambul.textContent = `${response.data.clouds.all} %`;
      windSpeedstambul.textContent = `${response.data.wind.speed} km/h`;
      humiditystambul.textContent = `${response.data.main.humidity} %`;
      pressurestambul.textContent = `${response.data.main.pressure} hPa`;
      feelsLikestambul.textContent = `${response.data.main.feels_like} °C`;

      temperaturestambulDescription.textContent = `${response.data.weather[0].description}`;
      temperaturestambul.textContent = `${Math.round(
        response.data.main.temp
      )} °C`;
      tempstambul = `${Math.round(response.data.main.temp)}`;

      if (tempstambul <= 0) {
        temperaturestambul.classList.add("red");
      } else if (tempstambul <= 10) {
        temperaturestambul.classList.add("orange");
      } else {
        temperaturestambul.classList.add("green");
      }

      lonstambul = `${response.data.coord.lon}`;
      latstambul = `${response.data.coord.lat}`;
      coordsstambul.textContent = `${lonstambul}, ${latstambul}`;

      const airPollutionAPI =
        `http://api.openweathermap.org/data/2.5/air_pollution?latstambul=${latstambul}&lonstambul=${lonstambul}` +
        apiKeystambul;

      //axios.get(airPollutionAPI).then((response) => {
      //   PM25.textContent = `${response.data.list[0].components.pm2_5}`;
      //  });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data.cod !== "200") {
        errorMessage.textContent = `${error.response.data.message}`;
      }
      [
        cloudsstambul,
        windSpeedstambul,
        humiditystambul,
        pressurestambul,
        feelsLikestambul,
        temperaturestambul,
        temperaturestambulDescription,
        cityNamestambul,
      ].array.forEach((element) => {
        element.textContent = "";
        temperaturestambulDescription.classList.remove("orange");
      });
    })
    .finally(() => {});
}

function getWeather6(inputbangkok) {
  const apiCity = inputbangkok;
  const URL =
    apiLinkbangkok + apiCity + apiKeybangkok + apiUnitsbangkok + apiLangbangkok;

  axios
    .get(URL)
    .then((response) => {
      console.log(response.data);
      //cityNamebangkok.textContent = `${response.data.name}, ${response.data.sys.country}`;
      cloudsbangkok.textContent = `${response.data.clouds.all} %`;
      windSpeedbangkok.textContent = `${response.data.wind.speed} km/h`;
      humiditybangkok.textContent = `${response.data.main.humidity} %`;
      pressurebangkok.textContent = `${response.data.main.pressure} hPa`;
      feelsLikebangkok.textContent = `${response.data.main.feels_like} °C`;

      temperaturebangkokDescription.textContent = `${response.data.weather[0].description}`;
      temperaturebangkok.textContent = `${Math.round(
        response.data.main.temp
      )} °C`;
      tempbangkok = `${Math.round(response.data.main.temp)}`;

      if (tempbangkok <= 0) {
        temperaturebangkok.classList.add("red");
      } else if (tempbangkok <= 10) {
        temperaturebangkok.classList.add("orange");
      } else {
        temperaturebangkok.classList.add("green");
      }

      lonbangkok = `${response.data.coord.lon}`;
      latbangkok = `${response.data.coord.lat}`;
      coordsbangkok.textContent = `${lonbangkok}, ${latbangkok}`;

      const airPollutionAPI =
        `http://api.openweathermap.org/data/2.5/air_pollution?latbangkok=${latbangkok}&lonbangkok=${lonbangkok}` +
        apiKeybangkok;

      //axios.get(airPollutionAPI).then((response) => {
      //   PM25.textContent = `${response.data.list[0].components.pm2_5}`;
      //  });
    })
    .catch((error) => {
      console.log(error);
      if (error.response.data.cod !== "200") {
        errorMessage.textContent = `${error.response.data.message}`;
      }
      [
        cloudsbangkok,
        windSpeedbangkok,
        humiditybangkok,
        pressurebangkok,
        feelsLikebangkok,
        temperaturebangkok,
        temperaturebangkokDescription,
        cityNamebangkok,
      ].array.forEach((element) => {
        element.textContent = "";
        temperaturebangkokDescription.classList.remove("orange");
      });
    })
    .finally(() => {});
}

//WYWOLANIE
window.onload = function () {
  getWeather("Paryż");
  getWeather2("Venice");
  getWeather3("Vienna");
  getWeather4("London");
  getWeather5("Istanbul");
  getWeather6("Bangkok");
};
