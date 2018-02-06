/*global $*/
// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add ay to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkay.
// CREATE THE FUNCTIONS BELOW

// Document Ready Function. All of your jQuery should go in here. 
function indexOfFirstVowel(word) {
  var vowelArray = ["a","e","i","o","u"];
  for (var i = 0; i < word.length; i++) {
//    console.log(vowelArray.indexOf(word[i]));
    if(vowelArray.indexOf(word[i]) > -1) {
      return i;
    }
  }
}

// Create the wordToPigLatin function that takes a word as a parameter and returns a transfromed word. 

function wordToPigLatin (word){
    if(word.charAt(0) === "a" ||
    word.charAt(0) === "e"||
    word.charAt(0) === "i"||
    word.charAt(0) === "o"||
    word.charAt(0) === "u"){
    return	word + "ay";
    }
    else{
    	 var firstVowelIndex = indexOfFirstVowel(word);
        var changedWord = word.substr(firstVowelIndex) + word.substr(0,firstVowelIndex) + "ay";
        return changedWord;
    }
    
    
}

// Create the sentenceToPigLatin function that takes a sentence as a parameter
	//Loops through all the words in the sentence and transforms each word
	//It should return a transfromed sentance
function sentenceToPigLatin (sentence){
    var words = sentence.split(" ");
    var final = [];
    for (var i = 0; i < words.length; i++ ){
    var word = words[i];
    var newArray = final.push(wordToPigLatin(word) + " ");
   }
    
    return final;
}

$( document ).ready(function() {
$("#btn").click(function() {
    var input = $("#info").val();
    $("#result").html(sentenceToPigLatin(input));
    });

});
