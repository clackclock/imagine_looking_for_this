// $.getJSON("../stations.json", getIcon);

function playMusic() {
  stopMusic();
  let music = document.getElementById("music");
  music.play();
}

function stopMusic() {
  let music = document.getElementById("music");
  music.pause();
}

function playS1(data) {
  stopMusic();
  console.log("working...");
  //$(".statLogo").attr("src",data.stations[0].logoUrl);

  $.getJSON("../scriptWeb/radio/stations.json", function (data) {
    var linkT = data.stations[0].logoUrl;
    console.log(linkT);
    //  $(".statLogo").css("background-image",src =(linkT));
    $("#r1").attr("src", linkT);
    
    var stream = data.stations[0].streamUrl;
    let music = document.getElementById("music");
    $("#music").attr("src", stream);
    console.log(stream);
    music.play();
    
     $("body").css("background-color",data.stations[0].colour);
  });

  //let music = document.getElementById("music");
  //$("source").attr("src","");
}
function playS2(data) {
  stopMusic();
  console.log("working...");
  //$(".statLogo").attr("src",data.stations[0].logoUrl);

  $.getJSON("../scriptWeb/radio/stations.json", function (data) {
    var linkT = data.stations[1].logoUrl;
    console.log(linkT);

    //  $(".statLogo").css("background-image",src =(linkT));
    $("#r1").attr("src", linkT);
    
    var stream = data.stations[1].streamUrl;
    let music = document.getElementById("music");
    $("#music").attr("src", stream);
    console.log(stream);
    music.play();
    
     $("body").css("background-color",data.stations[1].colour);
  });

}

function playS3(data) {
  stopMusic();
  
  console.log("working...");
  //$(".statLogo").attr("src",data.stations[0].logoUrl);

  $.getJSON("../scriptWeb/radio/stations.json", function (data) {
    var linkT = data.stations[3].logoUrl;
    console.log(linkT);

    //  $(".statLogo").css("background-image",src =(linkT));
    $("#r1").attr("src", linkT);
    
    var stream = data.stations[3].streamUrl;
    let music = document.getElementById("music");
    $("#music").attr("src", stream);
    console.log(stream);
    music.play();
    
    $("body").css("background-color",data.stations[3].colour);
  });

  
}

//stations[0].streamURL, stations[0].logoURL
