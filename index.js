// String Destructuring
const animalSounds = "cow horse sheep pig chicken";
const [moo, neigh, baa, oink, cluck] = animalSounds.split(" ");

const traditionalAnimals = "cow horse sheep pig chicken";
const [bessie, , dolly, babe, little] = traditionalAnimals.split(" ");

// Corrected animal colors destructuring
const animalColors = "cow brown sheep pig";
const [blackAndWhite, , black, pink] = animalColors.split(" ");

// Array Destructuring
const rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
const [red, orange, yellow, green, blue, indigo, violet] = rainbowColors;

const [r, o, y, g, b, , v] = rainbowColors;
const [, , , , , indg] = rainbowColors;

// Object Destructuring
const muppet = {
  muppetName: "Miss Piggy",
  color: "pink",
  song: "Never Before, Never Again",
  job: "Cast member of The Muppet Show",
  partner: "Kermit"
};
const { muppetName, color, song, job, partner } = muppet;

const nestedMuppet = {
  nestedName: "Kermit",
  nestedColor: "green",
  album: {
    theMuppetMovie: {
      song1: "Rainbow Connection",
      song2: "Moving Right Along",
      song3: "Never Before, Never Again",
      song4: "I Hope That Something Better Comes Along"
    }
  },
  nestedJob: "Host of The Muppet Show",
  nestedPartner: "Miss Piggy"
};
const { song2, song4 } = nestedMuppet.album.theMuppetMovie;
const { nestedName, nestedColor, nestedJob, nestedPartner } = nestedMuppet;