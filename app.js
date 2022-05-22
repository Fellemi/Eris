//https://stackoverflow.com/questions/20147442/using-onclick-on-images-to-display-text

function changeText(value) {
    var div = document.getElementById("div");
    var text = "";

    if (value == 1) text += "Mercury is a planet. Our smallest planet even.";
    if (value == 2) text += "In terms of something, Venus is better uwu";
    if (value == 3) text += "Earth is the only planet we have found life on. Fun fact: you were born there.";
    if (value == 4) text += "Mars has dust storms that can reach up to ca 100 km/h";
    if (value == 5) text += "Jupiter is our solar system's largest planet, and has a mass of similar components of a star.";
    if (value == 6) text += "Saturn has the most discovered moons of all planets, with 82 as of May 2022. It's also the most overrated planet.";
    if (value == 7) text += "Uranus moons are the only moons not named from mythology.";
    if (value == 8) text += "Neptune is a planet. Our furthest out planet.";

    div.innerHTML = text;
}
