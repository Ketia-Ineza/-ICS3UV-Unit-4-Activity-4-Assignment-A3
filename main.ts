/*
Name: Ketia
Date: 2025-12-10
Assignment: Word Search in Sentence
Program: Checks if a word exists in a sentence
*/

const sentence = prompt("Please enter a sentence?")!;
const word = prompt("Please enter a word to search for in your sentence?")!;

if (sentence.includes(word)) {
  console.log(`The word ${word} was found in the sentence: ${sentence}`);
} else {
  console.log(`Sorry, the word ${word} was not found in the sentence: ${sentence}`);
}