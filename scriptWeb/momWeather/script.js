let url = "https://api.weather.gov/gridpoints/OKX/41,52/forecast";

function grabMyData(data) {
  //console.log(data.properties.periods[0].detailedForecast);
  let currentForecast = data.properties.periods[0].shortForecast;
  // let currentForecast = "Frogs falling from sky"

  //$("#the-forecast").text(currentForecast);
  //currentForecast = "";

  if (currentForecast == "Rain") {
    $("#mom-face").attr(
      "src",
      "https://cdn.glitch.global/07d7e99a-e087-44be-8a44-f40649d49452/images.jpg?v=1712188252187"
    );
    $("#the-forecast").text(
      "Rainy. I can't go to the store in this rain, so make sure to bring an umbrella and read my list. 🌧️"
    );
  } else if (currentForecast == "Sunny") {
    $("#mom-face").attr(
      "src",
      "https://cdn.glitch.global/07d7e99a-e087-44be-8a44-f40649d49452/istockphoto-174869132-612x612.jpg?v=1712188208410"
    );
    $("#the-forecast").text(
      "Sunny. It's so nice out, make sure to take a walk today. Get some fresh air. ☀️"
    );
  } else {
    //??
    $("#momface").attr(
      "src",
      "https://cdn.glitch.global/07d7e99a-e087-44be-8a44-f40649d49452/istockphoto-174861937-612x612.jpg?v=1712188223201"
    );
  }
}

$.getJSON(url, grabMyData);
