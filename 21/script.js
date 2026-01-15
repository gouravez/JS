const button = document.getElementById("get-location-button");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");
async function getData(lat, lon) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=8b1a34eae5a642e893543841261501&q=${lat},${lon}&aqi=no`
  );
  return await promise.json();
}

async function gotLocation(position) {
  const result = await getData(
    position.coords.latitude,
    position.coords.longitude
  );
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
  console.log(result);
}

function failedToGetLocation() {
  console.log("Couldn't Get Location");
}

button.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGetLocation);
});
