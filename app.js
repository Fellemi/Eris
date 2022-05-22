//https://stackoverflow.com/questions/20147442/using-onclick-on-images-to-display-text

function changeText(value) {
    var div = document.getElementById("div");
    var text = "";

    if (value == 1) text += "Mercury is a planet. Our smallest planet even. Poor one, doesn't have any moons and is therefore not in my interest at all. Even smaller than Ganymede, the largest moon in our solar system.";
    if (value == 2) text += "Venus is the hottest planet in our solar system. Pretty boring overall, cuz it doesn't have any moons.";
    if (value == 3) text += "Earth is the only planet we have found life on. Fun fact: you were born there.";
    if (value == 4) text += "Mars has dust storms that can reach up to ca 100 km/h and two moons named Phobos and Deimos meaning fear and terror, which is pretty cool.";
    if (value == 5) text += "Jupiter is our solar system's largest planet, and has a mass of more than twice all the other planets. It's also home to the Galilean moons, which are the coolest celestial bodies ever.";
    if (value == 6) text += "Saturn has the most discovered moons of all planets, with 82 as of May 2022. It's the most overrated planet, although some of its moons are ok.";
    if (value == 7) text += "Uranus moons are the only moons not named from mythology.";
    if (value == 8) text += "Neptune is a planet. Our furthest out planet, and, if you think that title should go to Pluto, you're wrong. Neso is a cool name for a moon.";

    div.innerHTML = text;
}
