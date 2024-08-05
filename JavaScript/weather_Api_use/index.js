let cityName = document.querySelector('.weather_city');
let emoji = document.querySelector('.emoji-container');
let dateTime = document.querySelector('.weather_date_time');
let w_forecast = document.querySelector('.weather_forecast');
let w_icon = document.querySelector('.weather_icon');
let w_temperature = document.querySelector('.weather_temperature');
let w_minTem = document.querySelector('.weather_min');
let w_maxTem = document.querySelector('.weather_max');

let w_feelsLike = document.querySelector('.weather_feelsLike');
let w_humidity = document.querySelector('.weather_humidity');
let w_wind = document.querySelector('.weather_wind');
let w_pressure = document.querySelector('.weather_pressure');

let citySearch = document.querySelector('.weather_search');

// * IN --> India & country name
const getCountryName = (code) => {
	// * js in-build api
	return new Intl.DisplayNames([code], {
		type: 'region',
	}).of(code);
};

// * Flag Emoji insert
const countryCodeToFlagEmoji = (code) => {
	console.log(code);

	//* Convert country code to uppercase (if not already)
	const codePoints = code
		.toUpperCase()
		.split('')
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
};

// * Date & Time
const getDateTime = (dateTime) => {
	const curDate = new Date(dateTime * 1000); // Convert seconds to milliseconds
	// * methods for different parameter in date time
	const options = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};
	// * JS in build Method
	const formatter = new Intl.DateTimeFormat('en-US', options);

	return formatter.format(curDate);
};

const myApiKey = '787abf1d4aae2387ef84d720a980c512';
let city = 'jalgaon';

// * search City
citySearch.addEventListener('submit', (e) => {
	e.preventDefault();
	let cityName = document.querySelector('.city_name');
	// * API call --> for Specific city
	city = cityName.value;
	// * Again call function for --> query
	getWeatherData();
	// * input field " " --> empty
	cityName.value = '';
});

// * Fetching data from url
const getWeatherData = async () => {
	const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${myApiKey}`;

	try {
		const res = await fetch(weatherUrl);
		const data = await res.json();
		// console.log('data:', data);

		// * De-Structure --> for getting data
		//* dt --> time , sys--> india
		const { name, main, weather, wind, sys, dt } = data;
		// * emoji insert
		const emoji = countryCodeToFlagEmoji(sys.country);
		// * city and country name
		cityName.innerHTML = `${name}, ${getCountryName(sys.country)}, ${emoji}`;

		// * city name
		w_forecast.innerHTML = `${weather[0].main}`;

		// * icon
		w_icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${weather[0].icon}@4x.png" alt="weather icon">`;

		// * Date and time
		dateTime.innerHTML = getDateTime(dt);
		// * temp
		w_temperature.innerHTML = `${main.temp}&#176`;
		// * temp min and max
		w_minTem.innerHTML = `Min:  ${main.temp_min.toFixed()}&#176`;
		w_maxTem.innerHTML = `Max:  ${main.temp_max.toFixed()}&#176`;
		// * feels like, humidity
		w_feelsLike.innerHTML = `${main.feels_like.toFixed(2)}&#176`;
		w_humidity.innerHTML = `${main.humidity}%`;
		w_wind.innerHTML = `${wind.speed} m/s`;
		w_pressure.innerHTML = `${main.pressure} hPa`;
	} catch (error) {
		console.log(error);
	}
};

document.body.addEventListener('load', getWeatherData());
