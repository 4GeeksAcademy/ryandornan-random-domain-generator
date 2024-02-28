/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let randomPronounIndex = Math.floor(Math.random() * pronouns.length);
  let randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
  let randomNounIndex = Math.floor(Math.random() * nouns.length);

  let randomPronoun = pronouns[randomPronounIndex];
  let randomAdjective = adjectives[randomAdjectiveIndex];
  let randomNoun = nouns[randomNounIndex];

  let randomDomain = randomPronoun + randomAdjective + randomNoun + ".com";
  console.log("Hello Rigo from the console!");

  return randomDomain;
};

let domainElement = document.getElementById("domain");

domainElement.textContent = generateRandomDomain();
