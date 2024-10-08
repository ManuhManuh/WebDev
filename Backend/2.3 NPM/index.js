//var generateName = require('sillyname');

import generateName from "sillyname";
import {randomSuperhero} from 'superheroes';

var sillyName = generateName();
const superHeroName = randomSuperhero();

console.log (`My name is: ${sillyName}...`);
console.log(`...but my Super Secret Superhero name is ${superHeroName}!!`);