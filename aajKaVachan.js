
async function getAajKaVachan() {
  const res = await fetch("https://your-backend.onrender.com/aaj-ka-vachan");
  const data = await res.json();
  document.getElementById("vachan-box").innerText = data?.vachan || "❌ वचन नहीं आया...";
}
getAajKaVachan();
