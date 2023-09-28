let sent = window.prompt("sent");
let word1 = window.prompt("word1");
let word2 = window.prompt("word2");

// replace method is used to replace word1 with word2 in a sentence
let new_sent = sent.replace(word1,word2);
console.log(`${new_sent}, where \“${word1}\” is replaced by \“${word2}\”.`);
