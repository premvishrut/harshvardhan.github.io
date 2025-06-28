fetch('quote.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById("quoteBox").innerHTML = `"${data.quote}"<br>— ${data.author}`;
  })
  .catch(error => {
    document.getElementById("quoteBox").innerText = "Quote लोड नहीं हुआ। कृपया बाद में देखें।";
  });
