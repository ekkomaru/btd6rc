// Stored in variables for future sharing option.
let primaryTowers = []; // int array containing tower ids
let militaryTowers = []; // int array containing tower ids
let magicTowers = []; // int array containing tower ids
let supportTowers = []; // int array containing tower ids
let hero; // int containing id of the hero
let map; // int containing id of the map
let mapType; // string containing the name of the map type ie.: beginner
let difficulty; // string with the name of diff
let subMode = ""; // string with the name of the submode

function generateChallenge() {
  generateHero();
  generateSupport();
  generateMagic();
  generateMilitary();
  generatePrimary();
  generateMap();
  generateDifficulty();
  if (document.getElementById("includeSubmodes").value !== "-1") {
    generateSubmodes();
  } else {
    subMode = "";
  }
}

function displayCurrentChallenge(x) {
  if (x > 0) setTimeout(displayCurrentChallenge, 40, x - 1);

  generateChallenge();

  document.getElementById("challenge").innerHTML = "<div style='font-size: 20px'> <strong>" + map + "</strong>" + " (" + mapType + ")" + "</div>";

  if (document.getElementById("includeSubmodes").value !== "-1") {
    document.getElementById("challenge").innerHTML += difficulty + " - " + subMode.toLowerCase() + "<br><br>";
  } else {
    document.getElementById("challenge").innerHTML += difficulty + "<br><br>";
  }

  if (document.getElementById("isHeroDesired").value === "1") {
    document.getElementById("challenge").innerHTML += heroes[hero].name + "<br><br>";
  }

  if (subMode.includes("Only") === true) {
    displayOnlySubmode(difficulty);
  } else {
    displayTowers();
  }

}

function displayOnlySubmode(diff) {
  switch (diff) {
    case "easy":
      towers.primary.forEach(function (value, index) {
        document.getElementById("challenge").innerHTML += towers.primary[index].name + "<br>";
      });
      break;
    case "normal":
      towers.military.forEach(function (value, index) {
        document.getElementById("challenge").innerHTML += towers.military[index].name + "<br>";
      });
      break;
    case "hard":
      towers.magic.forEach(function (value, index) {
        document.getElementById("challenge").innerHTML += towers.magic[index].name + "<br>";
      });
      break;
  }
}

function displayTowers() {
  primaryTowers.forEach(function (value) {
    document.getElementById("challenge").innerHTML += towers.primary[value].name + "<br>";
  });

  militaryTowers.forEach(function (value) {
    document.getElementById("challenge").innerHTML += towers.military[value].name + "<br>";
  });

  magicTowers.forEach(function (value) {
    document.getElementById("challenge").innerHTML += towers.magic[value].name + "<br>";
  });

  supportTowers.forEach(function (value) {
    document.getElementById("challenge").innerHTML += towers.support[value].name + "<br>";
  });
}

function totalTowers() {
  return parseInt(document.getElementById("primaryDesiredCount").value) +
    parseInt(document.getElementById("militaryDesiredCount").value) +
    parseInt(document.getElementById("magicDesiredCount").value) +
    parseInt(document.getElementById("supportDesiredCount").value);
}

function randomizeTowers() {
  document.getElementById("primaryDesiredCount").value = Math.floor(Math.random() * (towers.primary.length - 2));
  document.getElementById("militaryDesiredCount").value = Math.floor(Math.random() * (towers.military.length - 1));
  document.getElementById("magicDesiredCount").value = Math.floor(Math.random() * (towers.magic.length - 1));
  document.getElementById("supportDesiredCount").value = Math.floor(Math.random() * (towers.support.length - 1));
}

function randomizeParameters() {
  document.getElementById("isHeroDesired").value = "" + Math.floor(Math.random() * 2);
  document.getElementById("mapType").value = "" + (Math.floor(Math.random() * 5) - 1);
  document.getElementById("desiredDifficulty").value = "" + (Math.floor(Math.random() * 4) - 1);
  document.getElementById("includeSubmodes").value = "" + (Math.floor(Math.random() * 3) - 1);
}

function randomizeChallenge() {
  if (document.getElementById("randomTowersOnly").checked) {
    randomizeTowers();
  } else {
    randomizeTowers();
    randomizeParameters();
  }

  if (totalTowers() < 2 || totalTowers() > 7) {
    randomizeChallenge();
  }
}

function generateHero() {
  hero = Math.floor(Math.random() * heroes.length);
  if (heroes[hero].name === "Striker Jones" && document.getElementById("noStrikerJones").checked){
    generateHero();
  }
}

function generateDifficulty() {
  if (document.getElementById("desiredDifficulty").value === "-1") {
    difficulty = difficulties[Math.floor(Math.random() * difficulties.length)].name;
  } else {
    difficulty = difficulties[parseInt(document.getElementById("desiredDifficulty").value)].name;
  }
}

function generateMap() {
  let typeToGen;
  let rnd;
  if (document.getElementById("mapType").value === "-1") {
    typeToGen = "" + Math.floor(Math.random() * 4);
  } else {
    typeToGen = document.getElementById("mapType").value;
  }
  switch (typeToGen) {
    case "0":
      rnd = Math.floor(Math.random() * maps.beginner.length);
      map = maps.beginner[rnd].name;
      mapType = "beginner";
      break;
    case "1":
      rnd = Math.floor(Math.random() * maps.intermediate.length);
      map = maps.intermediate[rnd].name;
      mapType = "intermediate";
      break;
    case "2":
      rnd = Math.floor(Math.random() * maps.advanced.length);
      map = maps.advanced[rnd].name;
      mapType = "advanced";
      break;
    case "3":
      rnd = Math.floor(Math.random() * maps.expert.length);
      map = maps.expert[rnd].name;
      mapType = "expert";
      break;
  }
}


function generatePrimary() {
  primaryTowers = [];
  for (let x = 0; x < document.getElementById("primaryDesiredCount").value; x = primaryTowers.length) {
    let rnd = Math.floor(Math.random() * towers.primary.length);
    if (primaryTowers.indexOf(rnd) === -1) {
      primaryTowers.push(rnd);
    }
  }
}

function generateMilitary() {
  militaryTowers = [];
  for (let x = 0; x < document.getElementById("militaryDesiredCount").value; x = militaryTowers.length) {
    let rnd = Math.floor(Math.random() * towers.military.length);
    if (militaryTowers.indexOf(rnd) === -1) {
      militaryTowers.push(rnd);
    }
  }
}

function generateMagic() {
  magicTowers = [];
  for (let x = 0; x < document.getElementById("magicDesiredCount").value; x = magicTowers.length) {
    let rnd = Math.floor(Math.random() * towers.magic.length);
    if (magicTowers.indexOf(rnd) === -1) {
      magicTowers.push(rnd);
    }
  }
}

function generateSupport() {
  supportTowers = [];
  for (let x = 0; x < document.getElementById("supportDesiredCount").value; x = supportTowers.length) {
    let rnd = Math.floor(Math.random() * towers.support.length);
    if (supportTowers.indexOf(rnd) === -1) {
      supportTowers.push(rnd);
    }
  }
}

function fixInputFields() {
  if (document.getElementById("primaryDesiredCount").value > towers.primary.length) {
    document.getElementById("primaryDesiredCount").value = towers.primary.length
  }
  if (document.getElementById("militaryDesiredCount").value > towers.military.length) {
    document.getElementById("militaryDesiredCount").value = towers.military.length
  }
  if (document.getElementById("magicDesiredCount").value > towers.magic.length) {
    document.getElementById("magicDesiredCount").value = towers.magic.length
  }
  if (document.getElementById("supportDesiredCount").value > towers.support.length) {
    document.getElementById("supportDesiredCount").value = towers.support.length
  }
}

function generateSubmodes() {
  let genType = parseInt(document.getElementById("includeSubmodes").value);
  switch (difficulty) {
    case "easy":
      if (genType === 0) {
        subMode = difficulties[0].submodes[Math.floor(Math.random() * difficulties[0].submodes.length)].name;
      } else {
        subMode = difficulties[0].submodes[Math.floor((Math.random() * (difficulties[0].submodes.length - 1)) + 1)].name;
      }
      break;
    case "normal":
      if (genType === 0) {
        subMode = difficulties[1].submodes[Math.floor(Math.random() * difficulties[1].submodes.length)].name;
      } else {
        subMode = difficulties[1].submodes[Math.floor((Math.random() * (difficulties[1].submodes.length - 1)) + 1)].name;
      }
      break;
    case "hard":
      if (genType === 0) {
        subMode = difficulties[2].submodes[Math.floor(Math.random() * difficulties[2].submodes.length)].name;
      } else {
        subMode = difficulties[2].submodes[Math.floor((Math.random() * (difficulties[2].submodes.length - 1)) + 1)].name;
      }
      if (subMode === "Chimps" && document.getElementById("noChimpsMode").checked) {
        generateSubmodes();
      }
      break;
  }
}

//TODO: CHIMPS selectable

function openSettings(open) {
  if (open === true){
    document.getElementById("genSettings").style.top = "21px";
  } else {
    document.getElementById("genSettings").style.top = "-325px";
  }
}
