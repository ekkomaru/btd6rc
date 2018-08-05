var towers = {
  "primary": [
    {
      "id": 0,
      "name": "Dart Monkey",
      "icon": "img/monkeys/dart.png",
      "camo": true
    },
    {
      "id": 1,
      "name": "Boomerang Monkey",
      "icon": "img/monkeys/rang.png",
      "camo": false
    },
    {
      "id": 2,
      "name": "Bomb Shooter",
      "icon": "img/monkeys/bomb.png",
      "camo": false
    },
    {
      "id": 3,
      "name": "Tack Shooter",
      "icon": "img/monkeys/track.png",
      "camo": false
    },
    {
      "id": 4,
      "name": "Ice Monkey",
      "icon": "img/monkeys/ice.png",
      "camo": false
    },
    {
      "id": 5,
      "name": "Glue Gunner",
      "icon": "img/monkeys/glue.png",
      "camo": false
    }
  ],
  "military": [
    {
      "id": 0,
      "name": "Sniper Monkey",
      "icon": "img/monkeys/sniper.png",
      "camo": true
    },
    {
      "id": 1,
      "name": "Monkey Sub",
      "icon": "img/monkeys/sub.png",
      "camo": true
    },
    {
      "id": 2,
      "name": "Monkey Buccaneer",
      "icon": "img/monkeys/pirate.png",
      "camo": true
    },
    {
      "id": 3,
      "name": "Monkey Ace",
      "icon": "img/monkeys/ace.png",
      "camo": true
    },
    {
      "id": 4,
      "name": "Heli Pilot",
      "icon": "img/monkeys/heli.png",
      "camo": true
    }
  ],
  "magic": [
    {
      "id": 0,
      "name": "Wizard Monkey",
      "icon": "img/monkeys/wizard.png",
      "camo": true
    },
    {
      "id": 1,
      "name": "Super Monkey",
      "icon": "img/monkeys/super.png",
      "camo": true
    },
    {
      "id": 2,
      "name": "Ninja Monkey",
      "icon": "img/monkeys/ninja.png",
      "camo": true
    },
    {
      "id": 3,
      "name": "Alchemist",
      "icon": "img/monkeys/alchemist.png",
      "camo": false
    },
    {
      "id": 4,
      "name": "Druid",
      "icon": "img/monkeys/druid.png",
      "camo": false
    }
  ],
  "support": [
    {
      "id": 0,
      "name": "Banana Farm",
      "icon": "img/monkeys/farm.png",
      "camo": false
    },
    {
      "id": 1,
      "name": "Spike Factory",
      "icon": "img/monkeys/factory.png",
      "camo": true
    },
    {
      "id": 2,
      "name": "Monkey Village",
      "icon": "img/monkeys/village.png",
      "camo": true
    }
  ]
};

var heroes = [
  {
    "id": 0,
    "name": "Quincy",
    "icon": "img/heroes/quincy.png"
  },
  {
    "id": 1,
    "name": "Gwendolin",
    "icon": "img/heroes/gwendolin.png"
  },
  {
    "id": 2,
    "name": "Striker Jones",
    "icon": "img/heroes/jones.png"
  },
  {
    "id": 3,
    "name": "Obyn Greenfoot",
    "icon": "img/heroes/obyn.png"
  },
  {
    "id": 4,
    "name": "Captain Churchill",
    "icon": "img/heroes/churchill.png"
  }
];

var maps = {
  "beginner": [
    {
      "id": 0,
      "name": "Monkey Meadow",
      "icon": "img/maps/meadow.png"
    },
    {
      "id": 1,
      "name": "Tree Stump",
      "icon": "img/maps/stump.png"
    },
    {
      "id": 2,
      "name": "Town Center",
      "icon": "img/maps/town.png"
    },
    {
      "id": 3,
      "name": "In The Loop",
      "icon": "img/maps/loop.png"
    },
    {
      "id": 4,
      "name": "Cubism",
      "icon": "img/maps/cubism.png"
    },
    {
      "id": 5,
      "name": "Four Circles",
      "icon": "img/maps/circles.png"
    },
    {
      "id": 6,
      "name": "Hedge",
      "icon": "img/maps/hedge.png"
    },
    {
      "id": 7,
      "name": "End Of The Road",
      "icon": "img/maps/road.png"
    },
    {
      "id": 8,
      "name": "Logs",
      "icon": "img/maps/logs.png"
    }
  ],
  "intermediate": [
    {
      "id": 0,
      "name": "Firing Range",
      "icon": "img/maps/range.png"
    },
    {
      "id": 1,
      "name": "Cracked",
      "icon": "img/maps/cracked.png"
    },
    {
      "id": 2,
      "name": "Streambed",
      "icon": "img/maps/streambed.png"
    },
    {
      "id": 3,
      "name": "Chutes",
      "icon": "img/maps/chutes.png"
    },
    {
      "id": 4,
      "name": "Rake",
      "icon": "img/maps/rake.png"
    },
    {
      "id": 5,
      "name": "Spice Islands",
      "icon": "img/maps/spice.png"
    }
  ],
  "advanced": [
    {
      "id": 0,
      "name": "Anotherbrick",
      "icon": "img/maps/brick.png"
    },
    {
      "id": 1,
      "name": "Off The Coast",
      "icon": "img/maps/coast.png"
    },
    {
      "id": 2,
      "name": "Cornfield",
      "icon": "img/maps/corn.png" // Why do americans call this "maze"? It makes no sense to me. inb4: Too lazy to Google.
    },
    {
      "id": 3,
      "name": "Underground",
      "icon": "img/maps/underground.png"
    }
  ],
  "expert": [
    {
      "id": 0,
      "name": "Muddy Puddles",
      "icon": "img/maps/mud.png"
    },
    {
      "id": 1,
      "name": "#Ouch",
      "icon": "img/maps/ouch.png"
    }
  ]
};

var difficulties = [
  {
    "id": 0,
    "name": "easy",
    "submodes": [
      {
        "id": 0,
        "name": "Standard"
      },
      {
        "id": 1,
        "name": "Primary Only"
      },
      {
        "id": 2,
        "name": "Deflation"
      }
    ]
  },
  {
    "id": 1,
    "name": "normal",
    "submodes": [
      {
        "id": 0,
        "name": "Standard"
      },
      {
        "id": 1,
        "name": "Military Only"
      },
      {
        "id": 2,
        "name": "Apocalypse"
      },
      {
        "id": 3,
        "name": "Reverse"
      }
    ]
  },
  {
    "id": 2,
    "name": "hard",
    "submodes": [
      {
        "id": 0,
        "name": "Standard"
      },
      {
        "id": 1,
        "name": "Magic Only"
      },
      {
        "id": 2,
        "name": "Double HP MOABs"
      },
      {
        "id": 3,
        "name": "Half Cash"
      },
      {
        "id": 4,
        "name": "Alternate Bloons Rounds"
      },
      {
        "id": 5,
        "name": "Impoppable"
      },
      {
        "id": 6,
        "name": "Chimps"
      }
    ]
  }
];
