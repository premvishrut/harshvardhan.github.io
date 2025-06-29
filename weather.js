
async function getWeather() {
  const res = await fetch("https://your-backend.onrender.com/weather");
  const data = await res.json();
  const weatherType = data.main.toLowerCase();
  let bg = "";

  if (weatherType.includes("cloud")) bg = "cloudy-kunj.gif";
  else if (weatherType.includes("rain")) bg = "rainy-radha.gif";
  else if (weatherType.includes("clear")) bg = "sunny-vrindavan.gif";
  else if (weatherType.includes("fog") || weatherType.includes("mist")) bg = "foggy-vrindavan.gif";
  else bg = "ras-leela.gif";

  document.getElementById("weather-box").innerText = data.rasaWeather;
  document.body.style.backgroundImage = `url('assets/${bg}')`;
}
getWeather();
